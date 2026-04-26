"use client";

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  Triangle,
  ChevronRight,
  Zap,
  Globe,
  Lock
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto w-full sticky top-0 bg-black/50 backdrop-blur-md z-50">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Triangle className="w-6 h-6 fill-white" />
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
            <a href="#" className="hover:text-white transition-colors">Templates</a>
            <a href="#" className="hover:text-white transition-colors">Integrations</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Log In
          </Link>
          <Link href="/signup" className="px-4 py-1.5 text-sm font-medium bg-white text-black rounded-md hover:bg-zinc-200 transition-colors">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Runway Ship 2024 is almost here
            <ChevronRight className="w-3 h-3" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500"
          >
            Runway is the platform for frontend developers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Runway provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="/signup" className="w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
              Start Deploying
            </Link>
            <button className="w-full sm:w-auto px-8 py-3 bg-black border border-zinc-800 text-white font-semibold rounded-md hover:bg-zinc-900 transition-colors">
              Get a Demo
            </button>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-40">
          {[
            {
              icon: <Zap className="w-10 h-10 text-white" />,
              title: "Faster Build Times",
              description: "Optimized build infrastructure to get your changes live in seconds."
            },
            {
              icon: <Globe className="w-10 h-10 text-white" />,
              title: "Global Edge Network",
              description: "Serve content from the location closest to your users for instant loads."
            },
            {
              icon: <Lock className="w-10 h-10 text-white" />,
              title: "Enterprise Security",
              description: "Built-in security for your applications, from SSO to DDoS protection."
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors space-y-4"
            >
              {feature.icon}
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950/50 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-4">
            <Triangle className="w-6 h-6 fill-white" />
            <p className="text-sm text-zinc-500 italic">Developed by Google AI Studio</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider">Product</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">Next.js</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Turbo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Runway AI</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
