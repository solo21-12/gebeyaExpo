import { AppNavBar, AppSliderWrapper } from "@/containers";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "GebeyaExpo",
  description: "An Expo app under construction",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className}  bg-BlueDark relative`}>
        <AppSliderWrapper>{children}</AppSliderWrapper>
      </body>
    </html>
  );
}
