import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import ActivitiesGallery from "./components/ActivitiesGallery";
import AdmissionsAndFees from "./components/AdmissionsAndFees";
import Footer from "./components/Footer";
import ApplicationModal from "./components/ApplicationModal";

export default function App() {
  // Add state to track if the modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-900 font-sans selection:bg-blue-500/30">
      {/* Pass the function to open the modal down to the Navbar */}
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <HeroSection />
      <AboutUs />
      <ActivitiesGallery />
      <AdmissionsAndFees />
      <Footer />

      {/* Place the Modal outside the normal flow */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
