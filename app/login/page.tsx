"use client";

import React, { Suspense, useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  startAuthentication,
  type PublicKeyCredentialRequestOptionsJSON,
} from "@simplewebauthn/browser";
import { Github, Chrome, Fingerprint, Triangle } from "lucide-react";
import { authFetch, getAuthApiBase } from "@/lib/auth-api";

type Pending = null | "email" | "passkey";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState<Pending>(null);
  const [error, setError] = useState<string | null>(null);

  const redirectIfAuthed = useCallback(async () => {
    try {
      const res = await authFetch("/me");
      if (res.ok) {
        const data = (await res.json()) as { user: unknown };
        if (data.user) router.replace("/");
      }
    } catch {
      /* ignore */
    }
  }, [router]);

  useEffect(() => {
    void redirectIfAuthed();
  }, [redirectIfAuthed]);

  const oauthStatus = searchParams.get("oauth");
  useEffect(() => {
    if (oauthStatus === "success") {
      void redirectIfAuthed();
    }
  }, [oauthStatus, redirectIfAuthed]);

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !password) {
      setError("Enter email and password.");
      return;
    }
    setPending("email");
    try {
      const res = await authFetch("/auth/login/email", {
        method: "POST",
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(data.error || "Could not log in.");
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

  async function handlePasskey() {
    setError(null);
    setPending("passkey");
    try {
      const optionsRes = await authFetch("/auth/webauthn/login/options", {
        method: "POST",
        body: JSON.stringify(
          email.trim() ? { email: email.trim().toLowerCase() } : {}
        ),
      });
      const optionsBody = (await optionsRes.json()) as
        | { error?: string }
        | PublicKeyCredentialRequestOptionsJSON;

      if (!optionsRes.ok) {
        setError(
          "error" in optionsBody && optionsBody.error
            ? optionsBody.error
            : "Passkey sign-in is not available."
        );
        return;
      }

      const assertion = await startAuthentication({
        optionsJSON: optionsBody as PublicKeyCredentialRequestOptionsJSON,
      });

      const verifyRes = await authFetch("/auth/webauthn/login/verify", {
        method: "POST",
        body: JSON.stringify(assertion),
      });
      const verifyData = (await verifyRes.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!verifyRes.ok) {
        setError(verifyData.error || "Passkey verification failed.");
        return;
      }
      router.replace("/");
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Passkey was cancelled or failed.";
      setError(msg);
    } finally {
      setPending(null);
    }
  }

  const busy = pending !== null;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2">
          <Triangle className="w-6 h-6 fill-white" />
        </Link>
        <Link
          href="/signup"
          className="px-4 py-1.5 text-sm font-medium border border-zinc-800 rounded-md hover:bg-zinc-900 transition-colors"
        >
          Sign Up
        </Link>
      </nav>

      <main className="flex flex-col items-center justify-center px-6 pt-12 pb-24 max-w-md mx-auto w-full">
        <motion.div
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="w-full space-y-8"
        >
          <h1 className="text-3xl font-bold tracking-tight text-center text-white">
            Log in to Runway
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
            <form onSubmit={handleEmailLogin} className="space-y-2">
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
                autoComplete="current-password"
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
                {pending === "email" ? "Signing in…" : "Continue with Email"}
              </button>
            </form>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-zinc-800" />
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={goToGitHub}
                disabled={busy}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-black border border-zinc-800 rounded-md hover:bg-zinc-900 transition-colors disabled:opacity-50"
              >
                <Github className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">
                  Continue with GitHub
                </span>
              </button>

              <button
                type="button"
                onClick={goToGoogle}
                disabled={busy}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-black border border-zinc-800 rounded-md hover:bg-zinc-900 transition-colors disabled:opacity-50"
              >
                <Chrome className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">
                  Continue with Google
                </span>
              </button>

              <button
                type="button"
                onClick={() => void handlePasskey()}
                disabled={busy}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-black border border-zinc-800 rounded-md hover:bg-zinc-900 transition-colors disabled:opacity-50"
              >
                <Fingerprint className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">
                  {pending === "passkey"
                    ? "Waiting for passkey…"
                    : "Continue with Passkey"}
                </span>
              </button>
            </div>

            <p className="text-xs text-zinc-500 text-center">
              Optional: enter email before passkey to target your account. Set{" "}
              <code className="text-zinc-400">WEBAUTHN_ORIGIN</code> on the auth service
              to this app&apos;s URL (e.g. <code className="text-zinc-400">http://localhost:3000</code>).
            </p>

            <div className="text-center pt-8">
              <p className="text-sm text-zinc-400">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-blue-500 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-8 flex justify-center gap-6 text-xs text-zinc-500">
        <a href="#" className="hover:text-zinc-300 transition-colors">
          Terms
        </a>
        <a href="#" className="hover:text-zinc-300 transition-colors">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-zinc-500 text-sm">
          Loading…
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
