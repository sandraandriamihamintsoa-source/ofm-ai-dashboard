"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Heart, DollarSign, Sparkles, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const revenueData = [
  { time: "00:00", value: 12000 },
  { time: "04:00", value: 18000 },
  { time: "08:00", value: 25000 },
  { time: "12:00", value: 42000 },
  { time: "16:00", value: 58000 },
  { time: "20:00", value: 75000 },
  { time: "24:00", value: 89000 },
];

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="col-span-8"
    >
      <Card className="relative overflow-hidden glow-purple">
        <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/10 via-transparent to-neon-pink/10" />
        
        <CardContent className="relative p-8">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Live Revenue Dashboard</h2>
              <p className="text-gray-400">Real-time performance metrics</p>
            </div>
            <Button size="lg" className="gap-2">
              <Sparkles className="w-5 h-5" />
              Launch AI Assistant
            </Button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-success" />
                <span className="text-gray-400 text-sm">Today's Revenue</span>
              </div>
              <p className="text-2xl font-bold">{formatCurrency(89420)}</p>
              <p className="text-success text-sm flex items-center gap-1 mt-1">
                <ArrowUpRight className="w-4 h-4" />
                +24.5%
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-premium-cyan" />
                <span className="text-gray-400 text-sm">Active Fans</span>
              </div>
              <p className="text-2xl font-bold">{formatNumber(2847)}</p>
              <p className="text-premium-cyan text-sm flex items-center gap-1 mt-1">
                <ArrowUpRight className="w-4 h-4" />
                +12.3%
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-neon-pink" />
                <span className="text-gray-400 text-sm">Emotional Score</span>
              </div>
              <p className="text-2xl font-bold">87.2</p>
              <p className="text-neon-pink text-sm flex items-center gap-1 mt-1">
                <ArrowUpRight className="w-4 h-4" />
                +5.8%
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-electric-blue" />
                <span className="text-gray-400 text-sm">PPV Sales</span>
              </div>
              <p className="text-2xl font-bold">{formatNumber(1247)}</p>
              <p className="text-electric-blue text-sm flex items-center gap-1 mt-1">
                <ArrowUpRight className="w-4 h-4" />
                +18.7%
              </p>
            </motion.div>
          </div>

          {/* Chart */}
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="time" 
                  stroke="rgba(255,255,255,0.3)"
                  tick={{ fill: "rgba(255,255,255,0.5)" }}
                />
                <YAxis 
                  stroke="rgba(255,255,255,0.3)"
                  tick={{ fill: "rgba(255,255,255,0.5)" }}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "rgba(21, 28, 47, 0.9)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px"
                  }}
                  formatter={(value: number) => formatCurrency(value)}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="url(#gradient)" 
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6, fill: "#8B5CF6" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
