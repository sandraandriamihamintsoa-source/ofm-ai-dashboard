"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Lightbulb, AlertTriangle, TrendingUp, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const aiSuggestions = [
  {
    type: "response",
    icon: Lightbulb,
    title: "Suggested Response",
    content: "Hey! I noticed you've been really supportive lately 💕 I have something special just for you...",
    priority: "high",
  },
  {
    type: "upsell",
    icon: TrendingUp,
    title: "Upsell Opportunity",
    content: "John D. is showing 87% buying intent. Perfect time for $50 PPV offer.",
    priority: "high",
  },
  {
    type: "alert",
    icon: AlertTriangle,
    title: "Emotional Alert",
    content: "David K. is showing signs of loneliness. Recommend personal attention.",
    priority: "medium",
  },
];

export function AIAssistant() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="col-span-4"
    >
      <Card className="h-full glow-cyan">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-premium-cyan" />
            AI Response Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {aiSuggestions.map((suggestion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-4 border-l-4 border-l-premium-cyan"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-premium-cyan/20">
                  <suggestion.icon className="w-4 h-4 text-premium-cyan" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{suggestion.title}</span>
                    <Badge 
                      variant={suggestion.priority === "high" ? "danger" : "warning"}
                      className="text-xs"
                    >
                      {suggestion.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-400">{suggestion.content}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* AI Terminal */}
          <div className="glass rounded-xl p-4 mt-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-ai-purple animate-pulse" />
              <span className="text-sm font-medium">AI Terminal</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="text-gray-500">></span>
                <span className="text-gray-400">Analyzing conversation patterns...</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500">></span>
                <span className="text-success">Detected 3 high-value opportunities</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500">></span>
                <span className="text-premium-cyan">Personality match: 94% accuracy</span>
              </div>
            </div>
          </div>

          <Button className="w-full gap-2">
            <Sparkles className="w-4 h-4" />
            Generate Smarter Response
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
