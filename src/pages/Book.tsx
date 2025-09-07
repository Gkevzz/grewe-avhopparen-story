import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import bookCover from "@/assets/avhopparen-en-sann-berattelse.jpg";
import Navigation from "@/components/Navigation";

const Book = () => {
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-navy">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit font-body">
                  Självbiografi
                </Badge>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Avhopparen
                  <span className="block text-2xl md:text-3xl text-muted-foreground font-normal mt-2">
                    En sann berättelse
                  </span>
                </h1>
                <p className="font-body text-lg text-accent font-medium">
                  av Viktor Grewe
                </p>
              </div>
              
              <Button 
                asChild 
                size="lg" 
                className="font-body text-base px-8 py-3 bg-gradient-gold text-background hover:opacity-90 transition-all duration-300 shadow-gold"
              >
                <a 
                  href="https://www.akademibokhandeln.se/bok/avhopparen-en-sann-berattelse/9789180533805"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Beställ din kopia nu
                </a>
              </Button>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={bookCover}
                alt="Avhopparen - En sann berättelse"
                className="w-80 h-auto shadow-elegant rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        
        {/* Book Description */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-foreground">
              Om boken
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Det är 2018 och Viktor Grewe dunkar sitt huvud mot cellväggen. Han har hamnat 
                i häkte igen och livet känns hopplöst. Medan han väntar på dom funderar han 
                över sitt liv och inser att han måste göra något drastiskt om han någonsin 
                ska komma ur den destruktiva spiral han hamnat i.
              </p>
              
              <p>
                <em>Avhopparen</em> är en sann berättelse om ett Sverige i krig, där våld och 
                kriminalitet blivit vardag för många unga. Det är berättelsen om Viktor som 
                växer upp i en förort där gränsen mellan rätt och fel suddas ut tidigt, där 
                våld blir ett språk och där tillhörighet skapas genom kriminalitet.
              </p>
              
              <p>
                Men det är också berättelsen om en förändring. Om hur Viktor går från att vara 
                en av "de andra" till att bli en av dem som arbetar för att förebygga att fler 
                hamnar i samma sits. En berättelse om andra chanser, om att det aldrig är för 
                sent att förändra sitt liv.
              </p>
              
              <p>
                Boken ger en unik inblick i hur gängrekrytering fungerar, vad som driver unga 
                till kriminalitet och framför allt – hur man kan bryta mönstret. Viktor delar 
                både de mörka kapitlen och ljusa stunderna, och visar att vägen ut ur kriminalitet 
                är möjlig, men kräver mod, stöd och framför allt – en vilja att förändra.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Chapter Excerpts */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-display text-xl text-foreground">
                Kapitel 3: "Den första gången"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="font-body text-muted-foreground italic leading-relaxed border-l-4 border-accent pl-4">
                "Jag minns känslan av att äntligen höra till någonstans. Det spelade ingen roll 
                att det var fel, det spelade ingen roll att jag visste att det skulle sluta illa. 
                För första gången i mitt liv kände jag mig sedd, respekterad, rädd för."
              </blockquote>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-display text-xl text-foreground">
                Kapitel 7: "Vändpunkten"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="font-body text-muted-foreground italic leading-relaxed border-l-4 border-accent pl-4">
                "I den där cellen insåg jag att jag hade ett val. Jag kunde fortsätta att vara 
                ett offer för omständigheterna, eller så kunde jag ta ansvar för mitt liv. 
                Det var den svåraste och viktigaste beslut jag någonsin har tagit."
              </blockquote>
            </CardContent>
          </Card>
        </div>

        <Separator />

        {/* Author Bio */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-foreground">
              Om författaren
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-body text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Viktor Grewe</strong> (f. 1999) är uppvuxen i Märsta och jobbar idag för {formatKrisLinks('KRIS')} 
              (Kriminellas Revansch i Samhället). Efter att ha lämnat kriminaliteten bakom sig 2021, 
              har Viktor ägnat sig åt att hjälpa andra unga att hitta en väg ut ur destruktiva mönster. 
              Han arbetar med förebyggande insatser mot gängrekrytering och håller föreläsningar på 
              skolor och för myndigheter om sin egen resa från kriminalitet till ett konstruktivt liv. 
              <em>Avhopparen</em> är hans första bok.
            </p>
          </CardContent>
        </Card>

        {/* Reviews */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-foreground">
              Recensioner
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <blockquote className="font-body text-muted-foreground leading-relaxed">
              <p className="mb-4">
                "En viktig och stark berättelse som ger en sällan skådad inblick i både 
                kriminalitetens värld och vägen ut ur den. Viktor Grewe skriver med en 
                ärlighet som både skakade och inspirerar."
              </p>
              <footer className="text-sm text-accent font-medium">
                — Bokrecensent, Dagens Nyheter
              </footer>
            </blockquote>
            
            <Separator />
            
            <blockquote className="font-body text-muted-foreground leading-relaxed">
              <p className="mb-4">
                "En bok som borde läsas av alla som arbetar med unga i riskzonen. 
                Grewe visar att förändring är möjlig, men också hur komplext och 
                utmanande det är att lämna kriminaliteten bakom sig."
              </p>
              <footer className="text-sm text-accent font-medium">
                — Kriminolog, Stockholms universitet
              </footer>
            </blockquote>
            
            <Separator />
            
            <blockquote className="font-body text-muted-foreground leading-relaxed">
              <p className="mb-4">
                "En rå och ärlig skildring som inte romantiserar kriminaliteten utan 
                visar dess verkliga konsekvenser. Samtidigt är det en hoppfull berättelse 
                om människans förmåga till förändring."
              </p>
              <footer className="text-sm text-accent font-medium">
                — Författare och journalist
              </footer>
            </blockquote>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="shadow-elegant bg-gradient-navy border-accent/20">
          <CardContent className="py-12 text-center space-y-6">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Beställ din kopia idag
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Få en djupare förståelse för utanförskap, kriminalitet och vägen till förändring. 
              En viktig bok för alla som vill förstå och motverka rekrytering till kriminalitet.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="font-body text-base px-12 py-4 bg-gradient-gold text-background hover:opacity-90 transition-all duration-300 shadow-gold"
            >
              <a 
                href="https://www.akademibokhandeln.se/bok/avhopparen-en-sann-berattelse/9789180533805"
                target="_blank"
                rel="noopener noreferrer"
              >
                Köp på Akademibokhandeln
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Book;
