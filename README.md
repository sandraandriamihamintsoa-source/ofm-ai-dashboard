# AI OFM Dashboard

A production-ready, ultra-premium futuristic SaaS dashboard for AI-powered OFM (OnlyFans Management) agencies and chat teams.

## Features

- **Live Revenue Dashboard**: Real-time performance metrics with animated charts
- **Live Conversations**: Mission control interface for managing fan conversations
- **AI Response Assistant**: Real-time AI suggestions for responses, upsells, and emotional alerts
- **Whale Detection**: Advanced analytics for identifying high-spending fans
- **Chatter Performance**: Modern table with heatmaps and performance indicators
- **AI Emotional Engine**: Neuroscience-inspired emotional visualization
- **Personality Cloning**: Holographic AI personality visualization with accuracy metrics

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom design system
- **Components**: Custom shadcn/ui-inspired components
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React

## Design System

### Color Palette
- Background: #0B1020
- Secondary Background: #111827
- Card Surfaces: #151C2F
- AI Purple: #8B5CF6
- Neon Pink: #EC4899
- Premium Cyan: #06B6D4
- Electric Blue: #3B82F6

### Visual Style
- Glassmorphism effects
- Subtle gradients (purple → pink, cyan → blue)
- Highly rounded corners (18px-24px)
- Soft diffused shadows with glow effects
- Smooth animations and micro-interactions

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── dashboard/
│   │   ├── hero-section.tsx
│   │   ├── live-conversations.tsx
│   │   ├── ai-assistant.tsx
│   │   ├── whale-detection.tsx
│   │   ├── chatter-performance.tsx
│   │   ├── emotional-engine.tsx
│   │   └── personality-cloning.tsx
│   ├── layout/
│   │   ├── sidebar.tsx
│   │   └── header.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── avatar.tsx
└── lib/
    └── utils.ts
```

## Dashboard Modules

### Hero Section
- Live revenue tracking
- Active fans count
- Global emotional score
- PPV sales metrics
- Real-time growth charts

### Live Conversations
- Active fan list with emotional status
- Buying probability indicators
- Response time tracking
- Whale detection badges
- AI mood analysis

### AI Response Assistant
- Suggested responses
- Upsell timing recommendations
- PPV suggestions
- Emotional alerts
- Flirting strategy suggestions

### Whale Detection
- Top spenders identification
- Revenue potential analysis
- Attachment level tracking
- Purchase frequency metrics
- Exclusivity scoring

### Chatter Performance
- Revenue generation per chatter
- Conversion rate tracking
- Response speed metrics
- Emotional score analysis
- AI-detected fatigue indicators

### AI Emotional Engine
- Loneliness detection
- Attachment analysis
- Excitement tracking
- Loyalty measurement
- Frustration monitoring

### Personality Cloning
- Active personality display
- Cloning accuracy metrics
- Conversational style analysis
- Emoji usage patterns
- Emotional tone visualization

## Responsive Design

- **Desktop**: Full sidebar with 12-column grid
- **Tablet**: Collapsible sidebar with 2-column grid
- **Mobile**: Bottom navigation with vertically stacked cards

## License

MIT
