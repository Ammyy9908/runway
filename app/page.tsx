"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Triangle,
  Search,
  LayoutGrid,
  List,
  Plus,
  Activity,
  Code,
  Settings,
  Globe,
  Terminal,
  ExternalLink,
  GitBranch,
  Github,
  ChevronDown,
  Bell,
  MoreHorizontal,
  CircleAlert,
  Layers,
  Variable
} from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "sumit-folio",
    url: "sumit-folio.vercel.app",
    repo: "Ammyy9908/sumit_folio",
    lastCommit: "update coffee button color to a more transparent...",
    branch: "main",
    updatedAt: "Apr 16",
    status: "ready"
  },
  {
    id: 2,
    name: "goproamiz",
    url: "goproamiz.vercel.app",
    repo: "Ammyy9908/goproamiz",
    lastCommit: "theme changed to hacker",
    branch: "main",
    updatedAt: "Apr 7",
    status: "ready"
  },
  {
    id: 3,
    name: "goshortnerapp",
    url: "goshortnerapp.vercel.app",
    repo: "Ammyy9908/goshortnerapp",
    lastCommit: "ui added",
    branch: "main",
    updatedAt: "Apr 4",
    status: "ready"
  },
  {
    id: 4,
    name: "careerdcode-beol",
    url: "careerdcode-beol.vercel.app",
    repo: "Ammyy9908/careerdcode",
    lastCommit: "refactor: Update dependencies and tsconfig",
    branch: "main",
    updatedAt: "Mar 22",
    status: "ready"
  },
  {
    id: 5,
    name: "folio2026",
    url: "folio2026-sigma.vercel.app",
    repo: "Ammyy9908/folio2026",
    lastCommit: "feat: Add custom cursor with hover effects",
    branch: "main",
    updatedAt: "Mar 19",
    status: "ready"
  },
  {
    id: 6,
    name: "spotify-home-page",
    url: "spotify-home-page.vercel.app",
    repo: "Ammyy9908/spotifyHome...",
    lastCommit: "Merge pull request #1 from raj9426/patch-1",
    branch: "main",
    updatedAt: "10/1/21",
    status: "ready"
  }
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('Projects');

  const sidebarItems = [
    { icon: LayoutGrid, label: 'Projects' },
    { icon: Activity, label: 'Deployments' },
    { icon: Terminal, label: 'Logs' },
    { icon: Variable, label: 'Env Variables' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="flex min-h-screen bg-black text-zinc-400 font-sans selection:bg-white selection:text-black">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-900 flex flex-col fixed inset-y-0 z-50 bg-black">
        <div className="p-4 flex items-center justify-between border-b border-zinc-900">
          <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-zinc-900 rounded-md transition-colors cursor-pointer w-full group">
            <div className="w-6 h-6 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full" />
            <span className="text-sm font-medium text-white truncate">ammyy9908&apos;s ...</span>
            <span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded border border-zinc-700 font-bold tracking-tight">Hobby</span>
            <ChevronDown className="w-4 h-4 ml-auto group-hover:text-white transition-colors" />
          </div>
        </div>

        <div className="p-3">
          <div className="relative group">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-white transition-colors" />
            <input 
              placeholder="Find..." 
              className="w-full bg-transparent border border-zinc-900 rounded-md py-1.5 pl-9 pr-3 text-sm focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-800 transition-all text-white placeholder:text-zinc-600"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-zinc-600 border border-zinc-900 px-1 rounded bg-zinc-950">F</span>
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-0.5 mt-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all group ${
                activeTab === item.label 
                  ? 'bg-zinc-900 text-white shadow-sm' 
                  : 'hover:bg-zinc-950 text-zinc-400 hover:text-white'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 space-y-4">
          {/* <div className="bg-zinc-900/40 border border-red-900/20 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest text-red-400">
              <CircleAlert className="w-3.5 h-3.5" />
              Action Required
            </div>
            <p className="text-[11px] text-zinc-500 leading-normal">
              Take action to secure your projects from critical vulnerabilities.
            </p>
            <button className="w-full py-1.5 text-xs font-bold border border-zinc-800 rounded bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-white">
              Update Projects
            </button>
          </div> */}

          <div className="flex items-center justify-between pt-4 border-t border-zinc-900">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-6 h-6 bg-zinc-800 rounded-full flex items-center justify-center text-[10px] text-zinc-400 group-hover:text-white group-hover:bg-zinc-700 transition-all font-bold uppercase">
                A9
              </div>
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">ammyy9908</span>
            </div>
            <div className="flex items-center gap-3">
              <MoreHorizontal className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
              <div className="relative">
                <Bell className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full border-2 border-black" />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 min-h-screen pb-20">
        {/* Sub-header */}
        <header className="h-14 border-b border-zinc-900 flex items-center justify-between px-6 sticky top-0 bg-black/80 backdrop-blur-md z-40">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2 py-1 hover:bg-zinc-900 rounded transition-colors cursor-pointer group">
              <span className="text-sm font-medium text-white">All Projects</span>
              <ChevronDown className="w-4 h-4 group-hover:text-white transition-colors" />
            </div>
            <span className="text-zinc-800 text-lg font-light">/</span>
            <span className="text-sm font-medium text-white">Overview</span>
          </div>
          <div className="flex items-center gap-6">
             <MoreHorizontal className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
          </div>
        </header>

        <div className="p-6 max-w-[1400px] mx-auto space-y-8 mt-4">
          {/* Search bar row */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 group">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-white transition-colors" />
              <input 
                placeholder="Search Projects..." 
                className="w-full bg-transparent border border-zinc-900 rounded-md py-2 pl-10 pr-3 text-sm focus:outline-none focus:border-zinc-700 transition-all text-white placeholder:text-zinc-600 focus:ring-1 focus:ring-zinc-800"
              />
            </div>
            <div className="flex bg-zinc-950 border border-zinc-900 rounded-md p-1">
              <button className="p-1.5 hover:bg-zinc-900 rounded transition-colors text-white">
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button className="p-1.5 hover:bg-zinc-900 rounded transition-colors text-zinc-600">
                <List className="w-4 h-4" />
              </button>
            </div>
            <button className="bg-white text-black px-4 py-2 rounded-md transition-all hover:bg-zinc-200 flex items-center gap-2 text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <span>Add New...</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 items-start">
            {/* Left Column: Stats */}
            <div className="space-y-8">
              {/* <section className="space-y-4">
                <h2 className="text-sm font-bold text-white tracking-tight uppercase px-1">Usage</h2>
                <div className="bg-black border border-zinc-900 rounded-lg overflow-hidden flex flex-col">
                  <div className="p-4 flex items-center justify-between border-b border-zinc-900 bg-zinc-950/50">
                    <span className="text-xs font-bold text-white tracking-tight">Last 30 days</span>
                    <button className="text-[10px] font-bold text-white uppercase tracking-widest px-2.5 py-1 border border-zinc-800 rounded bg-zinc-900 hover:bg-zinc-800 transition-all">Upgrade</button>
                  </div>
                  <div className="p-5 space-y-5">
                    {[
                      { label: 'Edge Requests', value: '20K / 1M', percent: 2, color: 'bg-blue-500' },
                      { label: 'Image Optimization - Transformations', value: '90 / 5K', percent: 1.8, color: 'bg-zinc-500' },
                      { label: 'Fast Data Transfer', value: '233.69 MB / 100 GB', percent: 0.2, color: 'bg-zinc-500' },
                      { label: 'Image Optimization - Cache Writes', value: '120 / 100K', percent: 0.12, color: 'bg-zinc-500' },
                    ].map((stat, idx) => (
                      <div key={idx} className="space-y-2.5 group cursor-help">
                        <div className="flex justify-between text-[11px] font-bold tracking-tight">
                          <span className="text-zinc-400 flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${stat.color} shadow-[0_0_5px_rgba(59,130,246,0.5)]`} />
                            {stat.label}
                          </span>
                          <span className="text-zinc-500">{stat.value}</span>
                        </div>
                        <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${stat.percent}%` }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            className={`h-full ${stat.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="p-2 bg-zinc-900/30 flex justify-center hover:bg-zinc-900 transition-colors border-t border-zinc-900">
                     <ChevronDown className="w-4 h-4 text-zinc-600" />
                  </button>
                </div>
              </section> */}

              {/* <section className="space-y-4">
                <h2 className="text-sm font-bold text-white tracking-tight uppercase px-1">Alerts</h2>
                <div className="bg-black border border-zinc-900 rounded-lg p-10 flex flex-col items-center justify-center text-center space-y-5 group cursor-pointer hover:border-zinc-700 transition-all">
                  <div className="w-14 h-14 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                     <Bell className="w-6 h-6 text-zinc-700 group-hover:text-zinc-300 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-white tracking-tight">Get alerted for anomalies</h3>
                    <p className="text-[11px] text-zinc-500 leading-relaxed max-w-[220px]">Automatically monitor your projects for anomalies and get notified.</p>
                  </div>
                  <button className="text-[10px] font-extrabold text-white uppercase tracking-widest px-5 py-2 border border-zinc-800 rounded bg-zinc-950 hover:bg-zinc-900 hover:text-white transition-all">Upgrade to Pro</button>
                </div>
              </section> */}

              <section className="space-y-4">
                <h2 className="text-sm font-bold text-white tracking-tight uppercase px-1">Recent Previews</h2>
                <div className="bg-black border border-zinc-900 rounded-lg p-10 flex flex-col items-center justify-center text-center space-y-5 group cursor-help hover:border-zinc-700 transition-all">
                  <div className="w-14 h-14 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center group-hover:rotate-6 transition-transform">
                     <Layers className="w-6 h-6 text-zinc-700 group-hover:text-zinc-300 transition-colors" />
                  </div>
                  <p className="text-[11px] text-zinc-500 leading-relaxed max-w-[220px]">Preview deployments that you have recently visited or created will appear here.</p>
                </div>
              </section>
            </div>

            {/* Right Column: Project Grid */}
            <div className="space-y-4 overflow-hidden">
              <div className="flex items-center justify-between px-1">
                <h2 className="text-sm font-bold text-white tracking-tight uppercase">Projects</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <AnimatePresence>
                  {projects.map((project, idx) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="bg-black border border-zinc-900 rounded-lg flex flex-col hover:border-zinc-700 transition-all cursor-pointer group relative overflow-hidden"
                    >
                      <div className="p-6 flex-1 space-y-5">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden shadow-sm">
                               {idx === 0 ? <div className="w-8 h-8 rounded-full bg-zinc-900" /> : 
                                idx === 2 ? <Triangle className="w-6 h-6 fill-white" /> : 
                                idx === 4 ? <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-sm rotate-45" /> :
                                <div className="w-full h-full bg-zinc-900" />}
                            </div>
                            <div>
                               <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">{project.name}</h3>
                               <p className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                 {project.url}
                               </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                             <div className="w-6 h-6 rounded-full border border-blue-500/20 flex items-center justify-center scale-95 opacity-80">
                                <Activity className="w-3 h-3 text-blue-500" />
                             </div>
                             <MoreHorizontal className="w-4 h-4 text-zinc-700 hover:text-white transition-colors" />
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 text-xs text-zinc-400 py-1.5 px-3 bg-zinc-950/50 rounded-md border border-zinc-900 w-fit group-hover:border-zinc-800 transition-colors">
                           <Github className="w-4 h-4" />
                           <span className="font-bold tracking-tight">{project.repo}</span>
                        </div>

                        <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed group-hover:text-zinc-400 transition-colors">
                          {project.lastCommit}
                        </p>
                      </div>

                      <div className="px-6 py-3.5 border-t border-zinc-900 flex items-center justify-between text-[10px] text-zinc-500 group-hover:bg-zinc-950/50 transition-colors bg-zinc-950/20">
                         <div className="flex items-center gap-3">
                            <span className="font-bold text-zinc-500 uppercase tracking-wider whitespace-nowrap">{project.updatedAt} on</span>
                            <div className="flex items-center gap-1.5 text-zinc-400 font-bold">
                               <GitBranch className="w-3.5 h-3.5" />
                               <span>{project.branch}</span>
                            </div>
                         </div>
                         <div className="flex items-center gap-2">
                             <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.3)] animate-pulse" />
                             {idx === 0 && <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">Last Used</span>}
                         </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
