"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/dashboard/hero-section";
import { LiveConversations } from "@/components/dashboard/live-conversations";
import { AIAssistant } from "@/components/dashboard/ai-assistant";
import { WhaleDetection } from "@/components/dashboard/whale-detection";
import { ChatterPerformance } from "@/components/dashboard/chatter-performance";
import { EmotionalEngine } from "@/components/dashboard/emotional-engine";
import { PersonalityCloning } from "@/components/dashboard/personality-cloning";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="ml-[280px] mt-[80px] p-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Live Conversations */}
          <LiveConversations />
          
          {/* AI Assistant */}
          <AIAssistant />
          
          {/* Whale Detection */}
          <WhaleDetection />
          
          {/* Chatter Performance */}
          <ChatterPerformance />
          
          {/* Emotional Engine */}
          <EmotionalEngine />
          
          {/* Personality Cloning */}
          <PersonalityCloning />
        </div>
      </main>
    </div>
  );
}
