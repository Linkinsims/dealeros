"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Car } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      setError("Invalid email or password.");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
            <Car className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-2xl tracking-tighter">DealerOS</span>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
          <p className="text-muted-foreground text-sm mb-6">Sign in to your dealership account.</p>
          {error && (
            <div className="mb-4 rounded-lg bg-destructive/10 border border-destructive/30 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@dealership.co.za"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-6">
            No account?{" "}
            <Link href="/onboarding" className="text-primary hover:underline font-medium">Request a demo</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
