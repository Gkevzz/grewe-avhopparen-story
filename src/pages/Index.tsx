import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Om Viktor Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Om Viktor Grewe
            </h2>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Efter en uppväxt kantad av våld, brottslighet och fängelsestraff beslutade Viktor 2021 att förändra sitt liv. Idag studerar han till socialpedagog, arbetar extra inom frivården och engagerar sig i KRIS. Genom föreläsningar och sin bok Avhopparen delar han med sig av sina erfarenheter för att inspirera unga bort från kriminalitet.
            </p>
           <Button
  asChild
  size="lg"
  className="bg-yellow-500 hover:bg-yellow-500 text-black font-body text-base px-8 py-3"
>
  <a href="/om-forfattaren">
    Mer om Viktor Grewe
  </a>
</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
