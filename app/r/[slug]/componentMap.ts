// @ts-nocheck
import dynamic from "next/dynamic";
import { LoadingSpinner } from "./LoadingSpinner";

export const componentMap: Record<string, any> = {
  // Portfolio: dynamic(() => import("@/components/projects/Portfolio"), { loading: LoadingSpinner, ssr: false }),

  // PortfolioLayout: dynamic(() => import("@/components/projects/PortfolioLayout"), { loading: LoadingSpinner, ssr: false }),
  // ProductivityTracker: dynamic(() => import("@/components/projects/ProductivityTracker"), { loading: LoadingSpinner, ssr: false }),

  // Profile: dynamic(() => import("@/components/projects/Profile"), { loading: LoadingSpinner, ssr: false }),
  // ProfileEditor: dynamic(() => import("@/components/projects/ProfileEditor"), { loading: LoadingSpinner, ssr: false }),
  // ProjectManager: dynamic(() => import("@/components/projects/ProjectManager"), { loading: LoadingSpinner, ssr: false }),
  // ProjectMapping: dynamic(() => import("@/components/projects/ProjectMapping"), { loading: LoadingSpinner, ssr: false }),

  PulseTrack: dynamic(() => import("@/components/projects/PulseTrack"), { loading: LoadingSpinner, ssr: false }),
  Quoura: dynamic(() => import("@/components/projects/Quoura"), { loading: LoadingSpinner, ssr: false }),

  // SimonGame: dynamic(() => import("@/components/projects/SimonGame"), { loading: LoadingSpinner, ssr: false }),
  // Snippet: dynamic(() => import("@/components/projects/Snippet"), { loading: LoadingSpinner, ssr: false }),


  SocialMediaSentiment: dynamic(() => import("@/components/projects/SocialMediaSentiment"), { loading: LoadingSpinner, ssr: false }),
  SolarSystemSimulator: dynamic(() => import("@/components/projects/SolarSystemSimulator"), { loading: LoadingSpinner, ssr: false }),
  Spa: dynamic(() => import("@/components/projects/Spa"), { loading: LoadingSpinner, ssr: false }),
  Spotify: dynamic(() => import("@/components/projects/Spotify"), { loading: LoadingSpinner, ssr: false }),

  StockExplorationApp: dynamic(() => import("@/components/projects/StockExplorationApp"), { loading: LoadingSpinner, ssr: false }),

  StockMarketApp: dynamic(() => import("@/components/projects/StockMarketApp"), { loading: LoadingSpinner, ssr: false }),
  Storefrontpage: dynamic(() => import("@/components/projects/Storefrontpage"), { loading: LoadingSpinner, ssr: false }),
  StoryBoard: dynamic(() => import("@/components/projects/StoryBoard"), { loading: LoadingSpinner, ssr: false }),

  StyleGuideBuilder: dynamic(() => import("@/components/projects/StyleGuideBuilder"), { loading: LoadingSpinner, ssr: false }),

  SurveyDashboard: dynamic(() => import("@/components/projects/SurveyDashboard"), { loading: LoadingSpinner, ssr: false }),
  Suspense: dynamic(() => import("@/components/projects/Suspense"), { loading: LoadingSpinner, ssr: false }),
  TaskApp: dynamic(() => import("@/components/projects/TaskApp"), { loading: LoadingSpinner, ssr: false }),

  TaskFlowScreening: dynamic(() => import("@/components/projects/TaskFlowScreening"), { loading: LoadingSpinner, ssr: false }),

  TechnicalWritingDashboard: dynamic(() => import("@/components/projects/TechnicalWritingDashboard"), { loading: LoadingSpinner, ssr: false }),
  TimeBlocker: dynamic(() => import("@/components/projects/TimeBlocker"), { loading: LoadingSpinner, ssr: false }),
  TimelineScheduler: dynamic(() => import("@/components/projects/TimelineScheduler"), { loading: LoadingSpinner, ssr: false }),

  TravelBlog: dynamic(() => import("@/components/projects/TravelBlog"), { loading: LoadingSpinner, ssr: false }),

  TravelSite: dynamic(() => import("@/components/projects/TravelSite"), { loading: LoadingSpinner, ssr: false }),

  // TrendNews: dynamic(() => import("@/components/projects/TrendNews"), { loading: LoadingSpinner, ssr: false }),
  Typing: dynamic(() => import("@/components/projects/Typing"), { loading: LoadingSpinner, ssr: false }),
  TypingGame: dynamic(() => import("@/components/projects/TypingGame"), { loading: LoadingSpinner, ssr: false }),
  VehicleSuspensionSImulator: dynamic(() => import("@/components/projects/VehicleSuspensionSImulator"), { loading: LoadingSpinner, ssr: false }),
  VideoPlayer: dynamic(() => import("@/components/projects/VideoPlayer"), { loading: LoadingSpinner, ssr: false }),
  VocavularyApp: dynamic(() => import("@/components/projects/VocavularyApp"), { loading: LoadingSpinner, ssr: false }),
  WaterUsageSimulation: dynamic(() => import("@/components/projects/WaterUsageSimulation"), { loading: LoadingSpinner, ssr: false }),
  WaveInterfaceSim: dynamic(() => import("@/components/projects/WaveInterfaceSim"), { loading: LoadingSpinner, ssr: false }),

  WebsiteTraffic: dynamic(() => import("@/components/projects/WebsiteTraffic"), { loading: LoadingSpinner, ssr: false }),

  WordCrossGame: dynamic(() => import("@/components/projects/WordCrossGame"), { loading: LoadingSpinner, ssr: false }),

};
