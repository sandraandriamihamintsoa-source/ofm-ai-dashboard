"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Heart, Zap, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, formatPercent } from "@/lib/utils";

const chatters = [
  {
    name: "Sarah Johnson",
    revenue: 45200,
    conversionRate: 34.5,
    responseSpeed: "1.2m",
    emotionalScore: 92,
    fatigue: 15,
  },
  {
    name: "Emma Williams",
    revenue: 38750,
    conversionRate: 31.2,
    responseSpeed: "1.8m",
    emotionalScore: 88,
    fatigue: 25,
  },
  {
    name: "Alex Chen",
    revenue: 29800,
    conversionRate: 28.7,
    responseSpeed: "2.1m",
    emotionalScore: 85,
    fatigue: 35,
  },
  {
    name: "Mike Davis",
    revenue: 24100,
    conversionRate: 25.4,
    responseSpeed: "2.5m",
    emotionalScore: 79,
    fatigue: 45,
  },
];

export function ChatterPerformance() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="col-span-8"
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-success" />
            Chatter Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-sm border-b border-white/8">
                  <th className="pb-4 font-medium">Chatter</th>
                  <th className="pb-4 font-medium">Revenue</th>
                  <th className="pb-4 font-medium">Conversion</th>
                  <th className="pb-4 font-medium">Response Time</th>
                  <th className="pb-4 font-medium">Emotional Score</th>
                  <th className="pb-4 font-medium">Fatigue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/8">
                {chatters.map((chatter, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ai-purple to-neon-pink flex items-center justify-center text-sm font-medium">
                          {chatter.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <span className="font-medium">{chatter.name}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="font-semibold text-success">{formatCurrency(chatter.revenue)}</span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${chatter.conversionRate}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full bg-gradient-to-r from-ai-purple to-neon-pink"
                          />
                        </div>
                        <span className="text-sm">{formatPercent(chatter.conversionRate)}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">{chatter.responseSpeed}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-neon-pink" />
                        <span className="font-medium">{chatter.emotionalScore}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      {chatter.fatigue > 40 ? (
                        <Badge variant="danger" className="gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          {chatter.fatigue}%
                        </Badge>
                      ) : (
                        <Badge variant="success">{chatter.fatigue}%</Badge>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
