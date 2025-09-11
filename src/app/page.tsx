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
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const profilePhoto = PlaceHolderImages.find((p) => p.id === "profile-photo");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section id="hero" className="container grid grid-cols-1 md:grid-cols-3 gap-8 py-20 md:py-32">
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left col-span-2">
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
          </div>
          <div className="flex justify-center items-center">
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
          </div>
        </section>

        <Separator />

        <section id="skills" className="container py-24">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
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

        <Separator />

        <section id="projects" className="container py-24 bg-muted/20">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            Projects Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <Separator />

        <section id="education" className="container py-24">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            Education
          </h2>
          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="mb-8">
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

        <Separator />

        <section id="contact" className="container py-24">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">
            Contact Me
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
          </p>
          <div className="flex justify-center gap-6 text-foreground">
             <Link href={`mailto:${contact.email}`} aria-label="Email" className="hover:text-primary transition-colors">
              <Mail className="h-8 w-8" />
            </Link>
            <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <Linkedin className="h-8 w-8" />
            </Link>
            <Link href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
              <Github className="h-8 w-8" />
            </Link>
            <Link href={contact.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors">
              <Twitter className="h-8 w-8" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
