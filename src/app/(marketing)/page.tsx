import Hero from "@/components/sections/Hero";
import QuickLinks from "@/components/sections/QuickLinks";
import DirectionsWidget from "@/components/sections/DirectionsWidget";
import GettingAround from "@/components/sections/GettingAround";
import UsefulLinks from "@/components/sections/UsefulLinks";
import StatsCounter from "@/components/sections/StatsCounter";
import NewsFeed from "@/components/sections/NewsFeed";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <QuickLinks />
      <GettingAround />
      <DirectionsWidget />
      <UsefulLinks />
      <StatsCounter />
      <NewsFeed />
    </div>
  );
}
