import Image from "next/image";
import AnimatedWave from '@/components/lightswind/animated-wave'

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center">
      {/* The animated sky background */}
      <AnimatedWave className=""/>

      {/* Your content sits on top of the background */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          Your Name
        </h1>
        <p className="mt-4 text-xl text-white/80 drop-shadow">
          Cloud & DevOps Engineer · Software Developer
        </p>
      </div>
    </main>
  );
}
