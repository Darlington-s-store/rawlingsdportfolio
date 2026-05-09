import Navbar from "@/components/Navbar";
import TechStackSection from "@/components/TechStackSection";
import Footer from "@/components/Footer";

const TechStackPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-20">
      <TechStackSection />
    </div>
    <Footer />
  </div>
);

export default TechStackPage;
