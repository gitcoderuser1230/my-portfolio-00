import Image from "next/image";
import {
  profile,
  skills,
  education,
  projects,
  contact,
} from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter, ArrowRight, Construction } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "@/components/animated-section";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export default function Home() {
  const profilePhoto = PlaceHolderImages.find((p) => p.id === "profile-photo");

  return (
    <div className="flex min-h-screen flex-col bg-image-container">
      <div className="bg-background/90 backdrop-blur-sm">
        <Header />
        <main className="flex-1">
          <section id="hero" className="container grid grid-cols-1 md:grid-cols-3 gap-8 py-20 md:py-32">
            <AnimatedSection direction="left" className="flex flex-col justify-center items-center md:items-start text-center md:text-left col-span-2">
              <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                {profile.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                {profile.title}
              </p>
              <p className="max-w-xl text-lg text-foreground/80 mb-8">
                {profile.introduction}
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <a href="#contact">
                    Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="#projects">View My Work</a>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="flex justify-center items-center">
              {profilePhoto && (
                <Image
                  src={profilePhoto.imageUrl}
                  alt={profilePhoto.description}
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-primary shadow-lg"
                  data-ai-hint={profilePhoto.imageHint}
                  priority
                />
              )}
            </AnimatedSection>
          </section>

          <Separator />

          <AnimatedSection>
            <section id="skills" className="container py-24">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <Card key={category} className="bg-card/80 backdrop-blur-sm hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </AnimatedSection>

          <Separator />

          <AnimatedSection direction="left">
            <section id="projects" className="container py-24 bg-muted/20">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
                Projects Showcase
              </h2>
              <div className="text-center text-muted-foreground">
                <Construction className="mx-auto h-16 w-16 mb-4 text-primary" />
                <h3 className="text-2xl font-semibold mb-2">Projects Coming Soon</h3>
                <p>I'm currently working on exciting new projects. Please check back later!</p>
              </div>
            </section>
          </AnimatedSection>

          <Separator />

          <AnimatedSection direction="right">
            <section id="education" className="container py-24">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
                Education
              </h2>
              <div className="max-w-3xl mx-auto">
                {education.map((edu, index) => (
                  <Card key={index} className="mb-8 bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="font-headline text-2xl">{edu.institution}</CardTitle>
                          <p className="text-primary font-semibold">{edu.degree}</p>
                        </div>
                        <Badge variant="outline">{edu.duration}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{edu.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </AnimatedSection>

          <Separator />

          <AnimatedSection>
            <section id="contact" className="container py-24">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">
                Contact Me
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out using the form below or through my social channels.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                  <ContactForm />
                </div>
                <div className="flex flex-col items-center justify-center space-y-6">
                  <h3 className="font-headline text-xl font-semibold">Or find me on</h3>
                  <TooltipProvider>
                    <div className="flex justify-center gap-6 text-foreground">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="hover:text-primary transition-colors cursor-pointer">
                            <Mail className="h-8 w-8" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Email coming soon!</p>
                        </TooltipContent>
                      </Tooltip>
                      <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                        <Linkedin className="h-8 w-8" />
                      </Link>
                      <Link href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
                        <Github className="h-8 w-8" />
                      </Link>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="hover:text-primary transition-colors cursor-pointer">
                            <Twitter className="h-8 w-8" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Twitter coming soon!</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
                </div>
              </div>
            </section>
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </div>
  );
}
