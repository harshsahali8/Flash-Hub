import { ProjectShowcase } from "@/lib/types";

export const projects: ProjectShowcase[] = [
  {
    name: "fitpulse",
    logo: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    headline: "Personalized Fitness Tracking App",
    description:
      "FitPulse is a mobile application designed to help fitness enthusiasts track workouts, monitor progress, and receive personalized exercise recommendations. Built with a sleek interface and AI-driven insights, it empowers users to achieve their fitness goals through tailored plans and real-time feedback.",
    projectDetails: {
      techStack: ["React Native", "Firebase", "TensorFlow", "Redux"],
      developmentStage: "Completed",
      businessOpportunity:
        "Subscription model for premium features and partnerships with fitness brands.",
      socialLinks: [
        "https://twitter.com/fitpulse",
        "https://instagram.com/fitpulseapp",
      ],
      imgs: [
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
      ],
      youtubeLinks: ["https://youtube.com/fitpulsedemo"],
      projectLink: "https://fitpulse.app/",
      githubLink: "https://github.com/user/fitpulse",
      shortInfo: "Created on: Mar 2024, Last Updated: Aug 2024",
      teamMembers: [
        {
          name: "Sara",
          role: "Mobile Developer",
        },
        {
          name: "Liam",
          role: "AI Specialist",
        },
        {
          name: "Emma",
          role: "Product Designer",
        },
      ],
      feedback: "Users love the intuitive design but want more workout variety.",
      projectMentor: "Alex Carter",
      acquiredDetails: "Collaborated with gyms for beta testing.",
      challengesFaced: [
        "Real-time data syncing",
        "Optimizing AI model for mobile",
      ],
      solutionsImplemented: [
        "Implemented offline-first architecture",
        "Optimized model with quantization",
      ],
      futureScope:
        "Add social features and integrate wearable device support.",
      fundingDetails: "Seed funding from local startup incubator.",
      documentationLink: "https://docs.fitpulse.app",
      features: [
        "AI-driven workout plans",
        "Progress tracking dashboard",
        "Community challenges",
      ],
    },
    projectType: "Personal",
    creationDate: new Date("2024-03-01"),
    lastUpdate: new Date("2024-08-15"),
    rating: 4.7,
    tags: ["Fitness", "AI", "Mobile"],
    targetAudience: ["Fitness Enthusiasts", "Gym Goers", "Health Coaches"],
    featured: true,
    views: 250,
  },
];