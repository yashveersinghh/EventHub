import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LightRays from "@/components/LightRays";
import NavBar from "@/components/NavBar";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font--schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EventHub",
  description: "The hub for all your events related to the world of software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("min-h-screen", "antialiased", schibstedGrotesk.variable, martianMono.variable, "font-sans", inter.variable)}>
      <body className="relative min-h-full overflow-x-hidden bg-[#05070b] text-foreground">
        <NavBar />
        <div className="pointer-events-none absolute inset-0 z-[-1] min-h-screen">
          <LightRays
            raysOrigin="top-right-offset"
            raysColor="#f3f6fb"
            raysSpeed={0.42}
            lightSpread={1.25}
            rayLength={7}
            followMouse={true}
            mouseInfluence={0.18}
            noiseAmount={0.012}
            distortion={0.03}
            pulsating={false}
            fadeDistance={4.2}
            saturation={1}
            className="event-rays"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_16%,rgba(148,163,184,0.16),transparent_30%),radial-gradient(circle_at_78%_14%,rgba(226,232,240,0.08),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.03),transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.18)_0%,rgba(8,10,14,0.5)_52%,rgba(3,5,8,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_0%,transparent_18%,transparent_82%,rgba(255,255,255,0.03)_100%)] opacity-60" />
        </div>
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
