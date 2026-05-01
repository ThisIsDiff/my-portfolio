import Image from "next/image";
// import AnimatedWave from '@/components/lightswind/animated-wave'
// import { CoolThemeToggle } from "@/components/lightswind/cool-theme-toggle";
import IntroScreen  from "@/components/introscreen/introscreen";
import Background from "@/components/background/background";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center">
      {/* The animated sky background */}
      <IntroScreen name="Chongze Peng" holdDuration={2000} fadeDuration={1000} />
      <Background />
      {/* Your content sits on top of the background */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl font-bold text-black drop-shadow-lg">
          Chongze Peng
        </h1>
        <p className="mt-4 text-xl text-black/80 drop-shadow">
          Cloud & DevOps Engineer · Software Developer
        </p>
      </div>
    </main>
  );
}
