"use client";

import { Hero, MoreFacts, VideoPlayer, WhyExibiti } from "@/containers";

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoPlayer />
      <WhyExibiti />
      <MoreFacts/>
    </main>
  );
}
