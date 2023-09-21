"use client";

import {
  ContactUs,
  Footer,
  Hero,
  MoreFacts,
  Partners,
  PhotoGallery,
  VideoPlayer,
  WhyExibiti,
} from "@/containers";

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoPlayer />
      <WhyExibiti />
      <MoreFacts />
      <PhotoGallery />
      <Partners />
      <ContactUs />
    </main>
  );
}
