"use client";

import { motion } from "framer-motion";
import { Heart, Brain, Zap, Flame, Smile } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const emotionData = [
  { time: "00:00", loneliness: 30, attachment: 45, excitement: 60, loyalty: 55, frustration: 20 },
  { time: "04:00", loneliness: 35, attachment: 50, excitement: 55, loyalty: 58, frustration: 22 },
  { time: "08:00", loneliness: 28, attachment: 55, excitement: 65, loyalty: 60, frustration: 18 },
  { time: "12:00", loneliness: 25, attachment: 60, excitement: 70, loyalty: 62, frustration: 15 },
  { time: "16:00", loneliness: 22, attachment: 65, excitement: 75, loyalty: 65, frustration: 12 },
  { time: "20:00", loneliness: 20, attachment: 70, excitement: 80, loyalty: 68, frustration: 10 },
  { time: "24:00", loneliness: 18, attachment: 75, excitement: 85, loyalty: 70, frustration: 8 },
];

const emotions = [
  { name: "Loneliness", value: 18, color: "#06B6D4", icon: Heart },
  { name: "Attachment", value: 75, color: "#EC4899", icon: Brain },
  { name: "Excitement", value: 85, color: "#8B5CF6", icon: Zap },
  { name: "Loyalty", value: 70, color: "#10B981", icon: Flame },
  { name: "Frustration", value: 8, color: "#EF4444", icon: Smile },
];

export function EmotionalEngine() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="col-span-6"
    >
      <Card className="h-full glow-purple">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-ai-purple" />
            AI Emotional Engine
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Emotion Bars */}
          <div className="space-y-4 mb-6">
            {emotions.map((emotion, index) => (
              <motion.div
                key={emotion.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <emotion.icon className="w-5 h-5" style={{ color: emotion.color }} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{emotion.name}</span>
                    <span className="text-sm font-bold" style={{ color: emotion.color }}>
                      {emotion.value}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${emotion.value}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: emotion.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={emotionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="time" 
                  stroke="rgba(255,255,255,0.3)"
                  tick={{ fill: "rgba(255,255,255,0.5)" }}
                />
                <YAxis 
                  stroke="rgba(255,255,255,0.3)"
                  tick={{ fill: "rgba(255,255,255,0.5)" }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "rgba(21, 28, 47, 0.9)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px"
                  }}
                />
                <Area type="monotone" dataKey="excitement" stroke="#8B5CF6" fillOpacity={0.3} fill="#8B5CF6" />
                <Area type="monotone" dataKey="attachment" stroke="#EC4899" fillOpacity={0.3} fill="#EC4899" />
                <Area type="monotone" dataKey="loyalty" stroke="#10B981" fillOpacity={0.3} fill="#10B981" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
