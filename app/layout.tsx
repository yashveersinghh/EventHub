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
      className={cn("min-h-screen", "antialiased", schibstedGrotesk.variable, martianMono.variable, "font-sans", inter.variable)}
    >
      <body className="relative min-h-full overflow-x-hidden bg-transparent text-foreground">
        <NavBar />
        <div className="pointer-events-none absolute inset-0 z-[-1] min-h-screen">
          <LightRays
            raysOrigin="top-center"
            raysColor="#86d8ff"
            raysSpeed={0.18}
            lightSpread={0.6}
            rayLength={2.35}
            followMouse={true}
            mouseInfluence={0.03}
            noiseAmount={0.03}
            distortion={0.06}
            pulsating={false}
            fadeDistance={0.95}
            saturation={1}
            className="event-rays"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(114,194,255,0.14),transparent_36%),radial-gradient(circle_at_82%_18%,rgba(132,89,255,0.12),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.03),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(10,13,18,0.2)_50%,rgba(10,13,18,0.75)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_0%,transparent_16%,transparent_84%,rgba(255,255,255,0.04)_100%)] opacity-70" />
        </div>
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
