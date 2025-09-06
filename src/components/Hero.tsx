import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import bookCover from "@/assets/avhopparen-en-sann-berattelse.jpg";
import authorPhoto from "@/assets/ViktorGrewe.PNG";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-cream min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Boka Viktor Grewe
                <span className="block text-accent">för Föreläsningar</span>
              </h1>
              
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                Engagerande föreläsningar om resiliens, personlig utveckling och mod att förändra. 
                Få insyn i utanförskap och arbeta preventivt mot gängrekrytering.
              </p>
              
              <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg p-4">
                <p className="font-body text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Författare till</span> 'Avhopparen – En sann berättelse', 
                  en gripande berättelse om utanförskap och våldets konsekvenser.
                </p>
              </div>
            </div>

            <Card className="p-6 shadow-soft bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-start space-x-4">
                <img 
                  src={authorPhoto}
                  alt="Viktor Grewe"
                  className="w-16 h-16 rounded-full object-cover shadow-soft"
                />
                <div className="space-y-3 flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Viktor Grewe
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Efter en uppväxt kantad av våld, brottslighet och fängelsestraff beslutade Viktor Grewe 2021 
                    att förändra sitt liv. I oktober 2024 släpper han sin självbiografiska bok 'Avhopparen', 
                    en berättelse om utanförskap och våldets konsekvenser, samt hur unga kan lämna kriminalitet bakom sig.
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="font-body text-base px-8 py-3 bg-gradient-hero hover:opacity-90 transition-all duration-300 shadow-elegant"
              >
                <a href="/forelasningar">
                  Boka föreläsning
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="font-body text-base px-8 py-3 border-2 hover:bg-accent/10 transition-all duration-300"
              >
                <a href="/boken">
                  Läs mer om boken
                </a>
              </Button>
            </div>
          </div>

          {/* Book Cover Side */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-full"></div>
              <img 
                src={bookCover}
                alt="Avhopparen - En sann berättelse av Viktor Grewe"
                className="relative w-80 md:w-96 h-auto shadow-elegant rounded-lg hover:scale-105 transition-transform duration-500 ease-elegant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
