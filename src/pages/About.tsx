import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import authorPhoto from "@/assets/viktor-grewe.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit font-body">
                  Författare & Föreläsare
                </Badge>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Viktor Grewe
                  <span className="block text-2xl md:text-3xl text-muted-foreground font-normal mt-2">
                    Från utanförskap till engagemang
                  </span>
                </h1>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-full"></div>
                <div className="relative w-80 h-80 bg-muted rounded-full shadow-elegant flex items-center justify-center overflow-hidden">
                  <img
  src={authorPhoto}
  alt="Viktor Grewe"
  className="w-full h-full object-cover"
  loading="lazy"
/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        
        {/* Biography */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-foreground">
              Om Viktor Grewe
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Viktor Grewe</strong> (född 1999) är uppvuxen i Märsta och arbetar idag för KRIS. Efter att ha lämnat kriminaliteten bakom sig 2021, har Viktor ägnat sig åt att hjälpa andra unga att hitta en väg 
                ut ur destruktiva mönster.
              </p>
              
              <p>
                Hans egen resa från en uppväxt kantad av våld, brottslighet och fängelsestraff till ett konstruktivt liv som medarbetare på KRIS, ger honom 
                unika insikter i både problemets komplexitet och möjligheterna till förändring.
              </p>
              
              <p>
                Viktor arbetar med förebyggande insatser mot gängrekrytering och håller 
                föreläsningar på skolor och för myndigheter om sin egen resa från kriminalitet 
                till ett konstruktivt liv. Hans arbete fokuserar på att visa att förändring 
                alltid är möjlig, Genom min historia hoppas jag inspirera andra att ta steget mot ett bättre liv, och inte göra samma misstag.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* KRIS Work */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-foreground">
              Arbetet med KRIS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                KRIS (Kriminellas Revansch i Samhället) är en ideell organisation som arbetar 
                med att hjälpa människor att lämna kriminaliteten bakom sig. Organisationen 
                grundades av tidigare kriminella som själva har genomgått förändringen.
              </p>
              
              <p>
                Som medarbetare på KRIS använder Viktor sin egen erfarenhet för att hjälpa 
                andra som befinner sig i liknande situationer. Arbetet omfattar allt från 
                individuellt stöd till förebyggande insatser i skolor och andra sammanhang.
              </p>
              
              <p>
                Viktors arbete på KRIS har gett honom djupa insikter i vad som krävs för att 
                verkligen förändra ett liv präglat av kriminalitet. Denna erfarenhet är 
                grunden för både hans föreläsningar och hans bok.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* The Book */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-foreground">
              Boken "Avhopparen"
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                I oktober 2024 släppte Viktor sin självbiografiska bok <em>"Avhopparen – En sann berättelse"</em>. 
                Boken är en ärlig och rå skildring av vägen in i och ut ur kriminalitet, 
                utan att romantisera eller förenkla de komplexa processer som är involverade.
              </p>
              
              <p>
                Genom personliga berättelser och reflektion visar Viktor hur utanförskap och 
                våld kan forma en ung persons liv, men också hur det är möjligt att bryta 
                dessa mönster och skapa något nytt.
              </p>
              
              <p>
                "Avhopparen" är Viktors första bok, men representerar många års reflektion 
                över sin egen resa och arbete med andra som befinner sig i liknande situationer.
              </p>
            </div>
            
            <div className="pt-4">
              <Button asChild variant="outline" className="font-body">
                <a href="/boken">Läs mer om boken</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Mission */}
        <Card className="shadow-soft bg-gradient-cream border-accent/20">
          <CardContent className="py-8 space-y-6">
            <h2 className="font-display text-2xl font-bold text-foreground text-center">
              Viktors mission
            </h2>
            <blockquote className="font-body text-lg text-muted-foreground leading-relaxed text-center italic max-w-3xl mx-auto">
              "Mitt mål är att visa att förändring alltid är möjlig, oavsett var man kommer ifrån 
              eller vad man har gjort. Genom att dela min egen historia hoppas jag kunna hjälpa 
              andra att hitta modet att förändra sitt eget liv."
            </blockquote>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="shadow-elegant bg-gradient-to-r from-navy-dark to-navy-medium border-gold-bright/20">
          <CardContent className="py-12 text-center space-y-6">
            <h2 className="font-display text-3xl font-bold text-cream-light">
              Boka Viktor för din organisation
            </h2>
            <p className="font-body text-lg text-cream-medium max-w-2xl mx-auto">
              Viktor delar gärna sina erfarenheter och insikter med er organisation eller skola.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="font-body text-base px-8 py-3 bg-gradient-gold hover:opacity-90 transition-all duration-300 shadow-gold text-navy-dark"
              >
                Boka föreläsning
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg" 
                className="font-body text-base px-8 py-3 border-2 border-cream-light text-navy-dark hover:bg-cream-light hover:text-navy-dark transition-all duration-300"
              >
                <a href="/forelasningar">Läs mer om föreläsningarna</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
