import { Button } from "@/components/ui/button";
import desktopHero from "@/assets/viktor-hero-desktop.webp";
import mobileHero from "@/assets/viktor-hero-mobile.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <img 
          src={desktopHero}
          alt="Viktor Grewe hero background"
          className="hidden md:block w-full h-full object-cover"
        />
        <img 
  src={mobileHero}
  alt="Viktor Grewe hero background mobile"
  className="block md:hidden w-full h-full object-cover object-center"
/>
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 pt-8 md:pt-4 lg:pt-8">
          {/* Main Heading */}
          <div className="space-y-2 md:space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Viktor Grewe
            </h1>
            <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-accent font-semibold">
              Författare & Föreläsare
            </p>
          </div>
          
          {/* Description */}
          <div className="mt-8 md:mt-16 lg:mt-20">
            <p className="font-body text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-lg mx-auto px-4">
              Inspirerande föreläsningar och en gripande självbiografi om vägen från kriminalitet till ett meningsfullt liv.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="font-body text-base px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 bg-transparent"
            >
              <a href="/boken">
                Läs mer om boken
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="font-body text-base px-8 py-3 bg-gradient-gold text-black hover:opacity-90 transition-all duration-300 shadow-gold"
            >
              <a href="/forelasningar">
                Boka föreläsning
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
