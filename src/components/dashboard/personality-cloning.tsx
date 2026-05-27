"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Heart, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatPercent } from "@/lib/utils";

const personalityTraits = [
  { name: "Flirty", value: 92, color: "#EC4899" },
  { name: "Playful", value: 88, color: "#8B5CF6" },
  { name: "Caring", value: 85, color: "#06B6D4" },
  { name: "Mysterious", value: 72, color: "#3B82F6" },
  { name: "Confident", value: 95, color: "#10B981" },
];

const emojiUsage = [
  { emoji: "💕", usage: 34 },
  { emoji: "😘", usage: 28 },
  { emoji: "🔥", usage: 22 },
  { emoji: "✨", usage: 18 },
  { emoji: "💋", usage: 15 },
];

export function PersonalityCloning() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="col-span-6"
    >
      <Card className="h-full glow-cyan">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-premium-cyan" />
              Personality Cloning
            </CardTitle>
            <Badge variant="success">94% Accuracy</Badge>
          </div>
        </CardHeader>
        <CardContent>
          {/* Holographic AI Visualization */}
          <div className="relative mb-6">
            <div className="w-32 h-32 mx-auto relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-premium-cyan/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-ai-purple/30"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border-2 border-neon-pink/30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-premium-cyan to-ai-purple flex items-center justify-center"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-400 mt-4">AI Personality Active</p>
          </div>

          {/* Personality Traits */}
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-ai-purple" />
              Conversational Style
            </h4>
            <div className="space-y-2">
              {personalityTraits.map((trait, index) => (
                <motion.div
                  key={trait.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-sm w-20">{trait.name}</span>
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${trait.value}%` }}
                      transition={{ duration: 1, delay: index * 0.05 + 0.5 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: trait.color }}
                    />
                  </div>
                  <span className="text-xs w-10 text-right">{formatPercent(trait.value)}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Emoji Usage */}
          <div>
            <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4 text-neon-pink" />
              Emoji Usage
            </h4>
            <div className="flex gap-2 flex-wrap">
              {emojiUsage.map((item, index) => (
                <motion.div
                  key={item.emoji}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass rounded-lg px-3 py-2 flex items-center gap-2"
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-xs text-gray-400">{item.usage}%</span>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
