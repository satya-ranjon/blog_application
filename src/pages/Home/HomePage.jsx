import HeroSection from "./container/HeroSection";
import MainLayout from "../../layouts/MainLayout";
import Articles from "./container/Articles";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <Articles />
    </MainLayout>
  );
};

export default HomePage;
