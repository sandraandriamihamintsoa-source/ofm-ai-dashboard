"use client";

import { motion } from "framer-motion";
import { MessageSquare, Clock, User, Zap, Heart, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const conversations = [
  {
    id: 1,
    name: "John D.",
    avatar: "JD",
    mood: "excited",
    emotionalScore: 92,
    buyingProbability: 87,
    responseTime: "2m",
    assignedChatter: "Sarah",
    isWhale: true,
    lastMessage: "I'd love to see more exclusive content! 💕",
  },
  {
    id: 2,
    name: "Mike R.",
    avatar: "MR",
    mood: "attached",
    emotionalScore: 85,
    buyingProbability: 72,
    responseTime: "5m",
    assignedChatter: "Emma",
    isWhale: false,
    lastMessage: "You're so amazing, I can't stop thinking about you",
  },
  {
    id: 3,
    name: "David K.",
    avatar: "DK",
    mood: "lonely",
    emotionalScore: 78,
    buyingProbability: 65,
    responseTime: "1m",
    assignedChatter: "Alex",
    isWhale: true,
    lastMessage: "I really need someone to talk to tonight...",
  },
  {
    id: 4,
    name: "Chris P.",
    avatar: "CP",
    mood: "curious",
    emotionalScore: 71,
    buyingProbability: 58,
    responseTime: "8m",
    assignedChatter: "Sarah",
    isWhale: false,
    lastMessage: "What's your PPV menu like?",
  },
  {
    id: 5,
    name: "Tom W.",
    avatar: "TW",
    mood: "frustrated",
    emotionalScore: 45,
    buyingProbability: 32,
    responseTime: "15m",
    assignedChatter: "Emma",
    isWhale: false,
    lastMessage: "Why haven't you replied to my messages?",
  },
];

const moodColors = {
  excited: "text-success",
  attached: "text-neon-pink",
  lonely: "text-premium-cyan",
  curious: "text-electric-blue",
  frustrated: "text-danger",
};

export function LiveConversations() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="col-span-4"
    >
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-ai-purple" />
              Live Conversations
            </CardTitle>
            <Badge variant="default">12 Active</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {conversations.map((conv, index) => (
            <motion.div
              key={conv.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02, x: 4 }}
              className="glass rounded-xl p-4 cursor-pointer transition-all hover:bg-white/5"
            >
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarFallback>{conv.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{conv.name}</span>
                    {conv.isWhale && (
                      <Badge variant="whale" className="text-xs">Whale</Badge>
                    )}
                    <Badge variant="vip" className="text-xs">VIP</Badge>
                  </div>
                  <p className="text-sm text-gray-400 truncate mb-2">
                    {conv.lastMessage}
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <Heart className={`w-3 h-3 ${moodColors[conv.mood as keyof typeof moodColors]}`} />
                      <span className="capitalize text-gray-400">{conv.mood}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-ai-purple" />
                      <span className="text-gray-400">{conv.buyingProbability}% intent</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-400">{conv.responseTime}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ai-purple/20 to-neon-pink/20 flex items-center justify-center mb-1">
                    <span className="text-sm font-bold text-ai-purple">{conv.emotionalScore}</span>
                  </div>
                  <p className="text-xs text-gray-400">Score</p>
                </div>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
