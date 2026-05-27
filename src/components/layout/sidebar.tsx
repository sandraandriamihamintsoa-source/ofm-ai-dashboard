"use client";

import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Brain, 
  TrendingUp, 
  Users, 
  Heart, 
  Copy, 
  Settings,
  Bell,
  Search,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: MessageSquare, label: "Conversations", active: false },
  { icon: Brain, label: "AI Assistant", active: false },
  { icon: TrendingUp, label: "Analytics", active: false },
  { icon: Users, label: "Chatters", active: false },
  { icon: Heart, label: "Emotions", active: false },
  { icon: Sparkles, label: "Personality", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-[280px] glass border-r border-white/8 flex flex-col z-50"
    >
      {/* Logo */}
      <div className="p-6 border-b border-white/8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ai-purple to-neon-pink flex items-center justify-center glow-purple">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-text">AI OFM</h1>
            <p className="text-xs text-gray-400">Command Center</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-250",
              item.active
                ? "bg-gradient-to-r from-ai-purple/20 to-neon-pink/20 border border-ai-purple/30 text-white"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </motion.button>
        ))}
      </nav>

      {/* Selected Creator */}
      <div className="p-4 border-t border-white/8">
        <div className="glass-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-premium-cyan to-electric-blue" />
            <div>
              <p className="font-medium text-sm">Sarah Model</p>
              <p className="text-xs text-gray-400">Premium Creator</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">Active Fans</span>
            <span className="text-premium-cyan font-medium">2,847</span>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-white/8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ai-purple to-neon-pink" />
          <div className="flex-1">
            <p className="font-medium text-sm">Alex Manager</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </motion.aside>
  );
}
