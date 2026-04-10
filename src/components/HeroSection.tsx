"use client";

import localFont from 'next/font/local';

const drukWide = localFont({
  src: '../../public/fonts/Druk-Wide-Medium.ttf',
  display: 'swap',
});

const stretchPro = localFont({
  src: '../../public/fonts/StretchPro.otf',
  display: 'swap',
});

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-[100vh] flex items-center relative overflow-hidden pt-20"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/miller-hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      <div className="container-custom z-20 text-white relative w-full">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <div className="text-center max-w-5xl">
            <h1 className={`${drukWide.className} text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white tracking-tight leading-tight`}>
              YOUR PREMIUM<br />
              CONTENT <span className={`${stretchPro.className} italic text-[#FF6B35]`}>SOLUTION</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl font-medium text-white/90 tracking-wide mt-4">
            Your own 360° remote creative team
          </p>

          <a
            href="#contact"
            className="px-8 py-3 md:px-10 md:py-4 rounded-2xl font-semibold transition-all duration-300 bg-transparent border-2 border-[#04b9d6] text-[#fff] hover:bg-[#04b9d6] hover:text-white"
            aria-label="Get Started"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
