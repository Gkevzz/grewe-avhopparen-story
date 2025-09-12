import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6">
              <Badge variant="secondary" className="w-fit font-body mx-auto">
                Kontakt
              </Badge>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy-dark leading-tight">
                Kontakta Viktor Grewe
                <span className="block text-xl sm:text-2xl md:text-3xl text-navy-dark font-normal mt-2">
                  För föreläsningar och samarbeten
                </span>
              </h1>
              <p className="font-body text-base sm:text-lg text-navy-dark leading-relaxed max-w-3xl mx-auto px-4">
                Boka Viktor för föreläsningar, workshops eller andra arrangemang. 
                Kontakta mig för att diskutera era behov och hur Viktor kan bidra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12 lg:space-y-16">
        
        {/* Contact Information */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Contact Details */}
          <Card className="shadow-soft lg:col-span-1">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-foreground">
                Kontaktinformation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Email</h3>
                    <p className="font-body text-muted-foreground">
                      viktor.grewe@hotmail.com
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      För bokningar och allmänna frågor
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Plats</h3>
                    <p className="font-body text-muted-foreground">
                      Stockholm med omnejd
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      Reser över hela Sverige
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Information */}
          <Card className="shadow-soft lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-foreground">
                Bokning av föreläsningar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Viktor är tillgänglig för föreläsningar, workshops och panelsamtal 
                  för organisationer, skolor och myndigheter över hela Sverige.
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-display font-semibold text-foreground">
                    Vid bokning, ange gärna:
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Typ av organisation/skola</li>
                    <li>• Målgrupp och antal deltagare</li>
                    <li>• Önskat datum och tid</li>
                    <li>• Plats för arrangemanget</li>
                    <li>• Specifika ämnen ni vill fokusera på</li>
                  </ul>
                </div>
                
                <p className="text-sm">
                  Vi återkommer inom 24 timmar med information om tillgänglighet 
                  och anpassning av innehållet efter era behov.
                </p>
              </div>
              
              <div className="pt-4 border-t border-border/20">
                <p className="font-body text-foreground text-center">
                  Kontakta <a href="mailto:viktor.grewe@hotmail.com" className="text-accent hover:underline font-medium">viktor.grewe@hotmail.com</a> för bokningar
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What we offer */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-xl sm:text-2xl text-foreground">
              Vad vi erbjuder
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="space-y-3">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Föreläsningar
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  45-90 minuter anpassade efter er målgrupp och era behov
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Workshops
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Interaktiva sessioner med djupare diskussion och reflektion
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Panelsamtal
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Deltagande i diskussioner tillsammans med andra experter
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Media Contact */}
        <Card className="shadow-soft bg-gradient-cream border-accent/20">
          <CardContent className="py-8 space-y-6">
            <div className="text-center space-y-4">
              <h2 className="font-display text-2xl font-bold text-navy-dark">
                Media & Intervjuer
              </h2>
              <p className="font-body text-navy-dark max-w-2xl mx-auto">
                För medieanföranden, intervjuer och pressförfrågningar, 
                kontakta oss på samma sätt. Viktor är tillgänglig för 
                kommentarer kring ämnen som rör kriminalitet, förebyggande 
                arbete och personlig utveckling.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* KRIS Information */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-foreground">
              Om KRIS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="font-body text-muted-foreground leading-relaxed">
              <p>
                Viktor arbetar för KRIS (Kriminellas Revansch i Samhället), 
                en ideell organisation som hjälper människor att lämna kriminaliteten 
                bakom sig. KRIS grundades av tidigare kriminella som själva har 
                genomgått förändringen och arbetar nu för att hjälpa andra.
              </p>
            </div>
            
            <Button 
              asChild 
              variant="outline" 
              className="font-body"
            >
              <a 
                href="https://www.kris.a.se" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Läs mer om KRIS
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
