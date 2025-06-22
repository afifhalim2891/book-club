import Footer from "@/components/Home/Footer";
import CallToActionSection from "@/components/Home/CallToActionSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HeroSection from "@/components/Home/HeroSection";
import JourneySection from "@/components/Home/JourneySection";
import MembershipSection from "@/components/Home/MembershipSection";
import TestimonialSection from "@/components/Home/TestimonialSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <JourneySection />
      <MembershipSection />
      <TestimonialSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
