import { useEffect } from 'react';
import ScrollGlobe from './components/ui/scroll-globe';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  const shakthiSatSections = [
    {
      id: "mission-overview",
      badge: "Mission Overview",
      title: "ShakthiSAT",
      subtitle: "Global Space Initiative",
      description: "ShakthiSAT is a global mission to empower 12,000 girls from 108 countries through real-time satellite projects. The mission sets out on a bold journey to spark curiosity, courage, and a lifelong passion for STEM and space exploration in brilliant young girls from 108 nations.",
      align: "left" as const,
      features: [
        { title: "12,000 Girls Empowered", description: "Inspiring the next generation of space leaders across the globe" },
        { title: "108 Countries United", description: "Building bridges across cultures through STEM collaboration" },
        { title: "Infinite Possibilities", description: "Opening doors to dreamers from every continent and culture" }
      ],
      actions: [
        { label: "Join the Mission", variant: "primary" as const },
        { label: "Learn More", variant: "secondary" as const }
      ]
    },
    {
      id: "what-is-shakthisat",
      badge: "What is ShakthiSAT",
      title: "Building Bridges",
      subtitle: "Through Innovation",
      description: "ShakthiSAT represents more than a satellite mission—it's a philosophy of building bridges across cultures through STEM and space collaboration. It stands as a beacon of hope, dedicated to fostering unparalleled international cooperation and unity across the globe.",
      align: "center" as const,
      features: [
        { title: "Beacon of Hope", description: "Fostering international cooperation and unity" },
        { title: "Cultural Bridges", description: "Connecting diverse perspectives through shared discovery" },
        { title: "Shared Purpose", description: "Reminding us that space belongs to all humanity" }
      ]
    },
    {
      id: "why-girls-in-space",
      badge: "Why Girls in Space",
      title: "Equal Access",
      subtitle: "To Infinity",
      description: "Only 11% of all astronauts launched to space have been women. The gender gap in space and STEM fields remains significant. ShakthiSAT is our answer—an initiative to ignite passion, nurture leadership, and dismantle limits. We believe every girl deserves the chance to reach beyond the sky.",
      align: "left" as const,
      features: [
        { title: "Ignite Passion", description: "Spark curiosity and wonder in young minds" },
        { title: "Nurture Leadership", description: "Build confidence and essential STEM skills" },
        { title: "Dismantle Limits", description: "Break barriers and challenge stereotypes" }
      ],
      actions: [
        { label: "Support Girls in STEM", variant: "primary" as const },
        { label: "View Statistics", variant: "secondary" as const }
      ]
    },
    {
      id: "why-108-countries",
      badge: "Why 108 Countries",
      title: "Cosmic Harmony",
      subtitle: "Unity in Diversity",
      description: "The number 108 carries deep cultural, scientific, and spiritual significance across civilizations—symbolizing completeness, cosmic harmony, and unity. Bringing together 108 nations in a shared mission sparks innovation through diversity, strengthens collaboration, and builds a future where humanity learns, explores, and grows together among the stars.",
      align: "center" as const,
      features: [
        { title: "Cultural Significance", description: "Honoring the sacred number across civilizations" },
        { title: "Innovation Through Diversity", description: "Unique perspectives unite for breakthrough discoveries" },
        { title: "Global Collaboration", description: "Humanity learning and growing together" }
      ],
      actions: [
        { label: "Explore Global Impact", variant: "primary" as const },
        { label: "Join 108 Nations", variant: "secondary" as const }
      ]
    }
  ];

  const globeConfig = {
    positions: [
      { top: "50%", left: "75%", scale: 1.2 },  // Mission Overview: Right side
      { top: "30%", left: "25%", scale: 0.8 },  // What is ShakthiSAT: Left side, subtle
      { top: "70%", left: "80%", scale: 1.5 },  // Why Girls: Right side, prominent
      { top: "40%", left: "50%", scale: 1.8 },  // Why 108: Center, large backdrop
    ]
  };

  return (
    <div className='min-h-screen bg-black overflow-x-hidden'>
      <ScrollGlobe 
        sections={shakthiSatSections}
        globeConfig={globeConfig}
        className="bg-gradient-to-br from-black via-purple-900/10 to-teal-900/10"
      />
    </div>
  );
}

export default App;