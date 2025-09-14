
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Briefcase } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen flex-col bg-image-container">
      <div className="bg-background/90 backdrop-blur-sm">
        <Header />
        <main className="flex-1">
          <AnimatedSection>
            <section id="experience" className="container py-24 md:py-32">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
                My Experience
              </h2>
              <div className="text-center text-muted-foreground max-w-2xl mx-auto">
                <Briefcase className="mx-auto h-16 w-16 mb-4 text-primary" />
                <h3 className="text-2xl font-semibold mb-2">Experience Coming Soon</h3>
                <p className="text-lg">
                  I am actively seeking opportunities to apply my skills and gain real-world experience. 
                  My professional journey and a detailed list of roles and responsibilities will be updated here as I progress in my career. 
                  Please check back soon!
                </p>
              </div>
            </section>
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </div>
  );
}
