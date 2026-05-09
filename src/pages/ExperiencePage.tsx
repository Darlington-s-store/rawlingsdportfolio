import Navbar from "@/components/Navbar";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

const ExperiencePage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-20">
      <ExperienceSection />
    </div>
    <Footer />
  </div>
);

export default ExperiencePage;
