"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  Github, 
  Chrome, 
  Fingerprint, 
  Triangle
} from 'lucide-react';

export default function SignupPage() {
  const [email, setEmail] = useState('');

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full space-y-8"
        >
          <h1 className="text-3xl font-bold tracking-tight text-center text-white">
            Create your Runway account
          </h1>

          <div className="space-y-4">
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-all placeholder:text-zinc-500 text-white"
              />
              <button className="w-full py-3 bg-white text-black font-medium rounded-md hover:bg-zinc-200 transition-colors">
                Continue with Email
              </button>
            </div>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-zinc-800"></span>
              </div>
            </div>

            <div className="space-y-3">
              {/* GitHub */}
              <button className="relative w-full flex items-center justify-center gap-3 px-4 py-3 bg-black border border-zinc-800 rounded-md hover:bg-zinc-900 transition-colors group">
                <Github className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">Continue with GitHub</span>
              </button>

              {/* Google */}
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-black border border-zinc-800 rounded-md hover:bg-zinc-900 transition-colors">
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
