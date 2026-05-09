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
      <section id="programmes">
        <div className="py-16 px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Our Programmes
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Discover the range of academic and extracurricular programmes we
            offer to nurture every child&apos;s potential.
          </p>
        </div>
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
