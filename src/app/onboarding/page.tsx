"use client";
import { useState } from "react";
import Link from "next/link";
import { Car, CheckCircle } from "lucide-react";

export default function OnboardingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    dealership: "",
    branches: "1",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center max-w-md">
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-3">Demo Requested!</h1>
          <p className="text-muted-foreground mb-6">
            Thanks {form.name}. Our team will reach out to {form.email} within 24 hours.
          </p>
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
            <Car className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-2xl tracking-tighter">DealerOS</span>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <h1 className="text-2xl font-bold mb-2">Request a Demo</h1>
          <p className="text-muted-foreground text-sm mb-6">Tell us about your dealership and we&apos;ll be in touch.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1.5">Your Name</label>
              <input name="name" type="text" value={form.name} onChange={handleChange} required
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="John Smith" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Work Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="john@dealership.co.za" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Dealership Name</label>
              <input name="dealership" type="text" value={form.dealership} onChange={handleChange} required
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Cape Town Motors" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Phone Number</label>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+27 82 000 0000" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Number of Branches</label>
              <select name="branches" value={form.branches} onChange={handleChange}
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="1">1 Branch</option>
                <option value="2-3">2–3 Branches</option>
                <option value="4-10">4–10 Branches</option>
                <option value="10+">10+ Branches</option>
              </select>
            </div>
            <button type="submit" disabled={loading}
              className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60">
              {loading ? "Submitting..." : "Request Demo"}
            </button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
