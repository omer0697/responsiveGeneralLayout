import HeroSection from "./components/HeroSection";
import { WhatsApp } from "./components/reusableComponents";


export default function Home() {
  return (
    <main className="flex h-full flex-col justify-between z-[-20] bg-stone-200">
      <HeroSection />
      <p className="text-2xl text-center">Welcome to our website</p>
      <WhatsApp />
    </main>
  )
};
