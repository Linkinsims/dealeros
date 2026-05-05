export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { slugify } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, dealershipName } = await req.json();

    if (!name || !email || !password || !dealershipName) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "Email already registered" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const orgSlug = slugify(dealershipName);

    const organization = await prisma.organization.create({
      data: {
        name: dealershipName,
        slug: orgSlug,
        email,
        status: "INACTIVE", // Requires admin activation (demo-only model)
        branches: {
          create: {
            name: `${dealershipName} - Main Branch`,
            slug: "main",
            isHeadOffice: true,
          },
        },
      },
      include: { branches: true },
    });

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        role: "DEALER_ADMIN",
        organizationId: organization.id,
        branchId: organization.branches[0].id,
      },
    });

    return NextResponse.json({
      message: "Registration successful. Your account is pending activation. Our team will contact you to schedule a demo.",
      userId: user.id,
      organizationId: organization.id,
    }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
