"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Github, 
  Chrome, 
  Fingerprint, 
  Triangle
} from "lucide-react";
import { authFetch, getAuthApiBase } from "@/lib/auth-api";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState<null | "email">(null);
  const [error, setError] = useState<string | null>(null);

  async function handleEmailSignup(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !password) {
      setError("Enter email and password.");
      return;
    }
    setPending("email");
    try {
      const res = await authFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(data.error || "Could not create account.");
        return;
      }
      router.replace("/");
    } catch {
      setError("Network error. Is the auth service running?");
    } finally {
      setPending(null);
    }
  }

  function goToGitHub() {
    window.location.href = `${getAuthApiBase()}/auth/github`;
  }

  function goToGoogle() {
    window.location.href = `${getAuthApiBase()}/auth/google`;
  }

  const busy = pending !== null;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2">
          <Triangle className="w-6 h-6 fill-white" />
        </Link>
        <Link href="/login" className="px-4 py-1.5 text-sm font-medium border border-zinc-800 rounded-md hover:bg-zinc-900 transition-colors">
          Log In
        </Link>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 pt-12 pb-24 max-w-md mx-auto w-full">
        <motion.div
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="w-full space-y-8"
        >
          <h1 className="text-3xl font-bold tracking-tight text-center text-white">
            Create your Runway account
          </h1>

          {error ? (
            <p
              className="text-sm text-red-400 text-center bg-red-950/40 border border-red-900/60 rounded-md px-3 py-2"
              role="alert"
            >
              {error}
            </p>
          ) : null}

          <div className="space-y-4">
            <form onSubmit={handleEmailSignup} className="space-y-2">
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-all placeholder:text-zinc-500 text-white"
              />
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-all placeholder:text-zinc-500 text-white"
              />
              <button
                type="submit"
                disabled={busy}
                className="w-full py-3 bg-white text-black font-medium rounded-md hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:pointer-events-none"
              >
                {pending === "email" ? "Creating account…" : "Continue with Email"}
              </button>
            </form>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-zinc-800"></span>
              </div>
            </div>

            <div className="space-y-3">
              {/* GitHub */}
              <button
                type="button"
                onClick={goToGitHub}
                disabled={busy}
                className="relative w-full flex items-center justify-center gap-3 px-4 py-3 bg-black border border-zinc-800 rounded-md hover:bg-zinc-900 transition-colors group disabled:opacity-50"
              >
                <Github className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">Continue with GitHub</span>
              </button>

              {/* Google */}
              <button
                type="button"
                onClick={goToGoogle}
                disabled={busy}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-black border border-zinc-800 rounded-md hover:bg-zinc-900 transition-colors disabled:opacity-50"
              >
                <Chrome className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">Continue with Google</span>
              </button>

              {/* Passkey */}
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-black border border-zinc-800 rounded-md hover:bg-zinc-900 transition-colors">
                <Fingerprint className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">Continue with Passkey</span>
              </button>
            </div>

            <div className="text-center pt-8">
              <p className="text-sm text-zinc-400">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-500 hover:underline">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-8 flex justify-center gap-6 text-xs text-zinc-500">
        <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
        <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
      </footer>
    </div>
  );
}
