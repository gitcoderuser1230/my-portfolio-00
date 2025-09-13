
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
import { Github, Linkedin, Mail, Twitter, ArrowRight, Construction, GraduationCap, School, BookOpen, Calendar, Star } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "@/components/animated-section";
import { EducationChart } from "@/components/education-chart";

export default function PortfolioPage() {
  const profilePhoto = PlaceHolderImages.find((p) => p.id === "profile-photo");
  const { course, specialization, institution, duration, cgpa, cgpaNote, semesters } = education[0];
  const educationDetails = [
    { label: "Course", value: course, icon: GraduationCap },
    { label: "Specialization", value: specialization, icon: Star },
    { label: "College", value: institution, icon: School },
    { label: "Year", value: duration, icon: Calendar },
    { label: "CGPA", value: `${cgpa} ${cgpaNote}`, icon: BookOpen },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-image-container">
      <div className="bg-background/90 backdrop-blur-sm">
        <Header />
        <main className="flex-1">
          <section id="hero" className="container grid grid-cols-1 md:grid-cols-3 gap-8 py-20 md:py-32">
            <AnimatedSection direction="left" className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:col-span-2">
              <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                {profile.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                {profile.title}
              </p>
              <p className="max-w-xl text-lg text-foreground/80 mb-8">
                {profile.introduction}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  className="rounded-full border-4 border-primary shadow-lg w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
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
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-2">
                  <Card className="bg-card/80 backdrop-blur-sm h-full">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl">Academic Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {educationDetails.map((detail, index) => (
                        <AnimatedSection key={index} delay={index * 100}>
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 mt-1">
                              <detail.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">{detail.label}</p>
                              <p className="text-lg font-semibold text-foreground/90">{detail.value}</p>
                            </div>
                          </div>
                        </AnimatedSection>
                      ))}
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:col-span-3">
                  <Card className="bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl">Semester-wise Progress</CardTitle>
                      <CardDescription>CGPA progression throughout the course.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AnimatedSection delay={200}>
                        <div className="h-[300px]">
                           <EducationChart data={semesters} />
                        </div>
                      </AnimatedSection>
                    </CardContent>
                  </Card>
                </div>
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
                  <div className="flex justify-center gap-6 text-foreground">
                    <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                      <Mail className="h-8 w-8" />
                    </a>
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
