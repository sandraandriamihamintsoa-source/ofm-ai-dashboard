"use client";

import { motion } from "framer-motion";
import { Crown, TrendingUp, DollarSign, Heart, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formatCurrency } from "@/lib/utils";

const whales = [
  {
    name: "Alexander M.",
    avatar: "AM",
    totalSpent: 245000,
    potential: 450000,
    attachmentLevel: 95,
    purchaseFrequency: "Daily",
    exclusivityScore: 88,
  },
  {
    name: "James W.",
    avatar: "JW",
    totalSpent: 189000,
    potential: 320000,
    attachmentLevel: 89,
    purchaseFrequency: "Weekly",
    exclusivityScore: 76,
  },
  {
    name: "Michael R.",
    avatar: "MR",
    totalSpent: 156000,
    potential: 280000,
    attachmentLevel: 82,
    purchaseFrequency: "Daily",
    exclusivityScore: 92,
  },
];

export function WhaleDetection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="col-span-4"
    >
      <Card className="h-full glow-pink">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-yellow-400" />
            Whale Detection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {whales.map((whale, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-xl p-4 cursor-pointer transition-all hover:bg-white/5"
            >
              <div className="flex items-start gap-3">
                <Avatar className="ring-2 ring-yellow-400/50">
                  <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-orange-500">
                    {whale.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">{whale.name}</span>
                    <Badge variant="whale" className="text-xs">Whale</Badge>
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3 text-success" />
                      <span className="text-gray-400">Spent: </span>
                      <span className="font-medium">{formatCurrency(whale.totalSpent)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-premium-cyan" />
                      <span className="text-gray-400">Potential: </span>
                      <span className="font-medium">{formatCurrency(whale.potential)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3 text-neon-pink" />
                      <span className="text-gray-400">Attachment: </span>
                      <span className="font-medium">{whale.attachmentLevel}%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-gray-400">Exclusivity: </span>
                      <span className="font-medium">{whale.exclusivityScore}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Radar Visualization Placeholder */}
          <div className="glass rounded-xl p-4 mt-4">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-3 relative">
                <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 animate-pulse" />
                <div className="absolute inset-4 rounded-full border-2 border-yellow-400/50" />
                <div className="absolute inset-8 rounded-full border-2 border-yellow-400/70" />
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Crown className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
              <p className="text-sm text-gray-400">AI Whale Radar Active</p>
              <p className="text-xs text-gray-500">3 high-value targets detected</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
