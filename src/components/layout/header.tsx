"use client";

import { motion } from "framer-motion";
import { Search, Sparkles, Bell, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-[280px] right-0 h-[80px] glass border-b border-white/8 flex items-center justify-between px-8 z-40"
    >
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search fans, conversations, or ask AI..."
            className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-ai-purple/50 focus:ring-2 focus:ring-ai-purple/20 transition-all"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <Button className="gap-2">
          <Sparkles className="w-4 h-4" />
          Ask AI
        </Button>

        {/* Team Avatars */}
        <div className="flex items-center -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-9 h-9 rounded-full border-2 border-background bg-gradient-to-br from-ai-purple to-neon-pink flex items-center justify-center text-xs font-medium"
            >
              {i}
            </div>
          ))}
          <div className="w-9 h-9 rounded-full border-2 border-background bg-white/10 flex items-center justify-center">
            <Users className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Notifications */}
        <button className="relative p-3 hover:bg-white/10 rounded-xl transition-colors">
          <Bell className="w-5 h-5 text-gray-400" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
        </button>
      </div>
    </motion.header>
  );
}
