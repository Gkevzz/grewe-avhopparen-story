import { Button } from "@/components/ui/button";
import desktopHero from "@/assets/viktor-hero-desktop.webp";
import mobileHero from "@/assets/viktor-hero-mobile.webp";

const Hero = () => {
  return (
    <section className="relative h-[70vh] md:h-[100vh] flex items-center overflow-hidden">
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
  className="block md:hidden absolute inset-0 w-full h-full object-cover object-center"
/>
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-8 pt-4 md:pt-8 lg:pt-8">
          {/* Main Heading */}
          <div className="space-y-2 md:space-y-4">
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
  Viktor Grewe
</h1>
            <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-accent font-semibold">
              Författare & Föreläsare
            </p>
          </div>
          
          {/* Description */}
          <div className="mt-4 md:mt-16 lg:mt-20">
           <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-lg mx-auto px-4">
  Inspirerande föreläsningar och en gripande självbiografi om vägen från kriminalitet till ett meningsfullt liv.
           </p>
          </div>
         {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
      asChild 
      variant="outline" 
      className="font-body text-sm px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 bg-transparent md:text-base md:px-8 md:py-3"
    >
      <a href="/boken">Läs mer om boken</a>
    </Button>
    <Button 
      asChild 
      className="font-body text-sm px-6 py-2 bg-gradient-gold text-black hover:opacity-90 transition-all duration-300 shadow-gold md:text-base md:px-8 md:py-3"
    >
      <a href="/forelasningar">Boka föreläsning</a>
    </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
