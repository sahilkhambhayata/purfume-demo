import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import Experience3D from "./components/Experience3D";
import Collection from "./components/Collection";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ReserveModal from "./components/ReserveModal";

export default function App() {
  const [reserveOpen, setReserveOpen] = useState(false);
  const [preset, setPreset] = useState<string | undefined>();

  const openReserve = useCallback((value?: string) => {
    setPreset(value);
    setReserveOpen(true);
  }, []);

  const closeReserve = useCallback(() => setReserveOpen(false), []);

  const scrollToExperience = useCallback(() => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-ink text-ivory">
      <a
        href="#main"
        className="absolute left-4 top-4 z-[90] -translate-y-24 rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar onReserve={() => openReserve()} />
      <main id="main">
        <Hero onExplore={scrollToExperience} onReserve={() => openReserve()} />
        <SocialProof />
        <Features />
        <Experience3D />
        <Collection onReserve={(s) => openReserve(s)} />
        <Benefits />
        <Testimonials />
        <Pricing onReserve={(p) => openReserve(p)} />
        <FAQ />
        <CTA onReserve={() => openReserve()} />
      </main>
      <Footer />
      <ReserveModal open={reserveOpen} preset={preset} onClose={closeReserve} />
    </div>
  );
}
