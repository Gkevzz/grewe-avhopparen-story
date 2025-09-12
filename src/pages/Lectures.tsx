import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";

const Lectures = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-navy-dark to-navy-medium">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit font-body mx-auto">
                Föreläsningar & Workshops
              </Badge>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream-light leading-tight">
                Boka Viktor Grewe
                <span className="block text-gold-bright mt-2">för Föreläsningar</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-cream-medium leading-relaxed max-w-3xl mx-auto">
                Inspirerande föreläsningar om utanförskap, kriminalitet och hur unga kan hitta en väg ut. Baseras på verkliga erfarenheter från Viktor 
                Grewes resa och hans arbete med KRIS.
              </p>
            </div>
            
            <Button 
              asChild
              size="lg" 
              className="font-body text-base px-12 py-4 bg-gradient-gold hover:opacity-90 transition-all duration-300 shadow-gold text-navy-dark"
            >
              <a href="/kontakt">Boka föreläsning nu</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        
        {/* About the Lectures */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-foreground">
              Om föreläsningarna
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
             Viktor Grewe delar sin egen resa från kriminalitet till ett konstruktivt liv och ger konkreta insikter om hur unga kan lämna destruktiva mönster. 
             Föreläsningarna kombinerar personliga erfarenheter med konkreta exempel från hans arbete på KRIS.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Topics Covered */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-foreground">
              Vad Viktor talar om
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Personlig utveckling & förändring
                </h3>
                <ul className="font-body text-muted-foreground space-y-2">
                  <li>• Hur man lämnar kriminalitet och destruktiva mönster bakom sig</li>
                  <li>• Att våga ta initiativ och fatta modiga beslut</li>
                  <li>• Vikten av stöd och mentorskap</li>
                  <li>• Hur unga kan ta ansvar för sina val och framtid</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Förebyggande arbete
                </h3>
                <ul className="font-body text-muted-foreground space-y-2">
                  <li>• Hur gängrekrytering fungerar och varför unga lockas</li>
                  <li>• Konkreta metoder för att stoppa unga från att gå fel väg</li>
                  <li>• Vägen ut ur destruktiva mönster</li>
                  <li>• KRIS arbetsmetoder och filosofi</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-foreground">
              Vad deltagarna säger
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <blockquote className="font-body text-muted-foreground leading-relaxed">
              <p className="mb-4">
                "Viktors berättelse gjorde stort intryck på eleverna. Hans ärlighet och autenticitet skapade en djup 
                reflektion kring val och konsekvenser."
              </p>
              <footer className="text-sm text-accent font-medium">
                — Rektor, Gymnasieskola Stockholm
              </footer>
            </blockquote>
            
            <Separator />
            
            <blockquote className="font-body text-muted-foreground leading-relaxed">
              <p className="mb-4">
                "En kraftfull föreläsning som visade att förändring alltid är möjlig. Viktors erfarenheter gav oss värdefulla insikter för 
                hur vi kan förbättra vårt sociala arbete."
              </p>
              <footer className="text-sm text-accent font-medium">
                — Socialsekreterare, Stockholms stad
              </footer>
            </blockquote>
            
            <Separator />
            
            <blockquote className="font-body text-muted-foreground leading-relaxed">
              <p className="mb-4">
                "Viktor levererade precis vad vi behövde - en ärlig berättelse utan 
                romantisering, men med hopp och konkreta exempel på förändring."
              </p>
              <footer className="text-sm text-accent font-medium">
                — Ungdomsorganisation
              </footer>
            </blockquote>
          </CardContent>
        </Card>

        {/* Target Audiences */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-foreground">
              Lämpligt för
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Skolor & Utbildning
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Gymnasieskolor, komvux, yrkesutbildningar, högskolor
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Myndigheter
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Socialtjänst, polis, kriminalvård
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Organisationer
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Ideella föreningar, företag som arbetar med ungdomar
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="shadow-elegant bg-gradient-to-r from-navy-dark to-navy-medium border-gold-bright/20">
          <CardContent className="py-12 text-center space-y-6">
            <h2 className="font-display text-3xl font-bold text-cream-light">
              Boka Viktor för din organisation
            </h2>
            <p className="font-body text-lg text-cream-medium max-w-2xl mx-auto">
              Kontakta oss för att boka Viktor Grewe till er organisation. 
              Anpassad föreläsning efter era behov och målgrupp.
            </p>
            <Button 
              asChild
              size="lg" 
              className="font-body text-base px-12 py-4 bg-gradient-gold hover:opacity-90 transition-all duration-300 shadow-gold text-navy-dark"
            >
              <a href="/kontakt">Kontakta Viktor för bokning</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Lectures;
