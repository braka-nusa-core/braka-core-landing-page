import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ValueSection from "@/components/sections/ValueSection";
import WorkSection from "@/components/sections/WorkSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PackageSection from "@/components/sections/PackageSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ValueSection />
      <WorkSection />
      <AboutSection />
      <ProcessSection />
      <PackageSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
