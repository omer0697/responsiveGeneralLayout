import HeroSection from "./components/HeroSection";
import MainContent from "./components/MainContent";
import { WhatsApp } from "./components/reusableComponents";


export default function Home() {
  return (
    <main className="flex h-full flex-col justify-between  ">
      <HeroSection />
      <MainContent />
    </main>
  )
};
