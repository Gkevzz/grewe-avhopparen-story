import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import bookCover from "@/assets/avhopparen-en-sann-berattelse.jpg";
import authorPhoto from "@/assets/viktor-grewe.jpg";

const Hero = () => {
  const formatKrisLinks = (text: string) => {
    return text.split(/(KRIS)/g).map((part, index) => 
      part === 'KRIS' ? (
        <a 
          key={index}  
          href="https://www.kris.a.se" 
          target="_blank" 
          rel="noopener noreferrer"
          className="kris-link"
        >
          KRIS
        </a>
      ) : part
    );
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-navy min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Viktor Grewe
                <span className="block text-accent text-2xl sm:text-3xl md:text-4xl lg:text-5xl">– Författare och Föreläsare</span>
              </h1>
              
              <div className="space-y-4">
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed">
                  Inspirerande och ärliga föreläsningar om utanförskap, kriminalitet och hur unga kan hitta en väg ut, 
                  baserat på Viktors egna erfarenheter och arbete med {formatKrisLinks('KRIS')}.
                </p>
                
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Författare till 'Avhopparen – En sann berättelse', en gripande självbiografi om vägen från kriminalitet 
                  till ett meningsfullt liv.
                </p>
              </div>
            </div>

            <Card className="p-4 sm:p-6 shadow-soft bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <img 
                  src={authorPhoto}
                  alt="Viktor Grewe"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-soft mx-auto sm:mx-0"
                />
                <div className="space-y-3 flex-1 text-center sm:text-left">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Viktor Grewe
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
               Efter en uppväxt kantad av våld, brottslighet och fängelsestraff beslutade Viktor 2021 att förändra sitt liv. 
                    Idag studerar han till socialpedagog och arbetar extra som biträdande övervakare inom frivården. 
                    Genom sitt engagemang i KRIS – där han bland annat deltog i anstaltsgruppen och arbetade med motivationsinsatser 
                    på anstalter – samt genom sina föreläsningar, delar Viktor med sig av sina erfarenheter för att inspirera unga
                    bort från kriminalitet. Hans bok Avhopparen ger en unik inblick i vägen ut ur kriminalitet och visar att förändring
                    alltid är möjlig med rätt stöd och vilja.
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="font-body text-base px-8 py-3 bg-gradient-gold text-background hover:opacity-90 transition-all duration-300 shadow-gold"
              >
                <a href="/forelasningar">
                  Mer om föreläsningar
                </a>
              </Button>
            </div>
          </div>

          {/* Book Cover Side */}
          <div className="flex flex-col items-center lg:items-end order-1 lg:order-2 space-y-4 lg:space-y-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-full"></div>
              <img 
                src={bookCover}
                alt="Avhopparen - En sann berättelse bokomslag av Viktor Grewe"
                className="relative w-64 sm:w-80 md:w-96 h-auto shadow-elegant rounded-lg hover:scale-105 transition-transform duration-500 ease-elegant"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="font-body text-base px-8 py-3 border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300"
              >
                <a href="/boken">
                  Läs mer om boken
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="font-body text-base px-8 py-3 bg-gradient-gold text-background hover:opacity-90 transition-all duration-300 shadow-gold"
              >
                <a href="https://www.akademibokhandeln.se/bok/avhopparen-en-sann-berattelse/9789180533805" target="_blank" rel="noopener noreferrer">
                  Köp boken
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
