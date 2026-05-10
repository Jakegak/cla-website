import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Programmes from "./components/Programmes";
import ActivitiesGallery from "./components/ActivitiesGallery";
import Testimonials from "./components/Testimonials";
import AdmissionsAndFees from "./components/AdmissionsAndFees";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ApplicationModal from "./components/ApplicationModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen max-w-full overflow-x-hidden bg-slate-900 font-sans selection:bg-blue-500/30">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Spacer to offset fixed navbar height (h-20 = 5rem) */}
      <div className="h-20" aria-hidden="true" />

      <HeroSection onOpenModal={() => setIsModalOpen(true)} />

      <AboutUs />

      <Programmes />

      <ActivitiesGallery />

      <Testimonials />

      <section id="admissions">
        <AdmissionsAndFees />
      </section>

      <ContactSection />

      <Footer />

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
