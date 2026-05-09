import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import ActivitiesGallery from "./components/ActivitiesGallery";
import AdmissionsAndFees from "./components/AdmissionsAndFees";
import Footer from "./components/Footer";
import ApplicationModal from "./components/ApplicationModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-900 font-sans selection:bg-blue-500/30">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="gallery">
        <ActivitiesGallery />
      </section>
      <section id="admissions">
        <AdmissionsAndFees />
      </section>
      <section id="contact">
        <Footer />
      </section>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
