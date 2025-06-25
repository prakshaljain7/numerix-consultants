import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import WhyChooseUsSection from "../components/WhyChooseUsSection.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  );
}
