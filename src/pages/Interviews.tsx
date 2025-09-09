import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Headphones } from "lucide-react";
import Navigation from "@/components/Navigation";

const Interviews = () => {
  // Toggle this to show/hide the Featured Interviews section
  const showFeaturedInterviews = false;
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit font-body mx-auto">
                Media & Intervjuer
              </Badge>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-dark leading-tight">
                Intervjuer & Poddar
                <span className="block text-2xl md:text-3xl text-muted-navy-dark font-normal mt-2">
                  Viktor Grewe berättar sin historia
                </span>
              </h1>
              <p className="font-body text-lg text-navy-dark leading-relaxed max-w-3xl mx-auto">
                Lyssna på och titta på intervjuer där Viktor delar sina erfarenheter och 
                insikter om vägen från kriminalitet till ett konstruktivt liv.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        
        {/* Featured Interviews - Hidden (set showFeaturedInterviews = true to show) */}
        {showFeaturedInterviews && (
          <div className="space-y-8">
            <h2 className="font-display text-3xl font-bold text-foreground text-center">
              Senaste intervjuer
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Podcast Interview */}
              <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge variant="secondary" className="w-fit font-body">
                        <Headphones className="w-3 h-3 mr-1" />
                        Podcast
                      </Badge>
                      <CardTitle className="font-display text-xl text-foreground">
                        Från kriminalitet till hopp
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-body text-sm text-muted-foreground">
                    P4 Stockholm | 45 minuter
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Viktor berättar om sin bok "Avhopparen" och hur han gick från ett liv 
                    präglat av våld till att hjälpa andra som befinner sig i samma situation.
                  </p>
                  <Button variant="outline" className="w-full font-body" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Lyssna här (kommer snart)
                  </Button>
                </CardContent>
              </Card>

              {/* TV Interview */}
              <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge variant="secondary" className="w-fit font-body">
                        <Play className="w-3 h-3 mr-1" />
                        TV-intervju
                      </Badge>
                      <CardTitle className="font-display text-xl text-foreground">
                        Vägen ut ur gängkriminalitet
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-body text-sm text-muted-foreground">
                    SVT Aktuellt | 12 minuter
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Ett djupare samtal om KRIS arbete och vikten av förebyggande insatser 
                    för att motverka gängrekrytering bland unga.
                  </p>
                  <Button variant="outline" className="w-full font-body" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Se intervjun (kommer snart)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Upcoming Interviews */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-foreground">
              Kommande intervjuer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Viktor är tillgänglig för intervjuer och mediesamtal kring ämnen som 
                rör kriminalitet, förebyggande arbete, personlig utveckling och 
                återhämtning. Hans unika perspektiv som både tidigare kriminell 
                och nuvarande hjälpare ger värdefulla insikter.
              </p>
              
              <p>
                Kontakta oss för att boka Viktor för intervjuer, panelsamtal eller 
                andra mediearrangemang.
              </p>
            </div>
            
            <div className="pt-4">
              <Button className="font-body">
                Kontakta för medieanföranden
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Topics Viktor discusses */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-foreground">
              Ämnen Viktor talar om
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Personliga erfarenheter
                </h3>
                <ul className="font-body text-muted-foreground space-y-2">
                  <li>• Vägen in i kriminalitet som ung</li>
                  <li>• Livet i fängelse och dess konsekvenser</li>
                  <li>• Vändpunkten och beslutet att förändra</li>
                  <li>• Processen att bygga upp ett nytt liv</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Samhällsperspektiv
                </h3>
                <ul className="font-body text-muted-foreground space-y-2">
                  <li>• Gängrekrytering och hur den fungerar</li>
                  <li>• KRIS arbetssätt och filosofi</li>
                  <li>• Förebyggande arbete med ungdomar</li>
                  <li>• Samhällets roll i återintegrering</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Book Promotion */}
        <Card className="shadow-soft bg-gradient-cream border-accent/20">
          <CardContent className="py-8 space-y-6">
            <div className="text-center space-y-4">
              <h2 className="font-display text-2xl font-bold text-navy-dark">
                Läs hela historien i "Avhopparen"
              </h2>
              <p className="font-body text-navy-dark max-w-2xl mx-auto">
                För den fullständiga berättelsen om Viktors resa från kriminalitet 
                till återhämtning, läs hans självbiografiska bok.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="font-body">
                  <a href="/boken">Läs mer om boken</a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="font-body"
                >
                  <a 
                    href="https://www.akademibokhandeln.se/bok/avhopparen-en-sann-berattelse/9789180533805"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Köp boken
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Interviews;
