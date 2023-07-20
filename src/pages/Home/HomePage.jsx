import HeroSection from "./container/HeroSection";
import MainLayout from "../../layouts/MainLayout";
import Articles from "./container/Articles";
import CTA from "./container/CTA";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <Articles />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
