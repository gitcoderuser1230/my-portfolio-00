"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, ExternalLink } from "lucide-react";
import { analyzeProjectSkillsAction } from "@/app/actions";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveDemoLink: string | null;
};

export function ProjectCard({ project }: { project: Project }) {
  const [analyzedSkills, setAnalyzedSkills] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function getSkills() {
      try {
        setIsLoading(true);
        const result = await analyzeProjectSkillsAction({
          projectDescription: project.description,
        });
        setAnalyzedSkills(result.skills);
      } catch (error) {
        console.error("Failed to analyze project skills:", error);
        toast({
          variant: "destructive",
          title: "AI Analysis Failed",
          description: "Using fallback to display tech stack. To see AI-analyzed skills, please ensure the Generative Language API is enabled in your Google Cloud project.",
        });
        setAnalyzedSkills(project.techStack);
      } finally {
        setIsLoading(false);
      }
    }
    getSkills();
  }, [project.description, project.techStack, toast]);

  return (
    <Card className="flex flex-col h-full bg-card/80 backdrop-blur-sm hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="mb-4">{project.description}</CardDescription>
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2 text-foreground/80">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="default">{tech}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-2 text-foreground/80">AI-Analyzed Skills:</h4>
          {isLoading ? (
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {analyzedSkills.length > 0 ? (
                analyzedSkills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No specific skills identified.</p>
              )}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild variant="outline" size="sm">
          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </Button>
        {project.liveDemoLink && (
          <Button asChild size="sm">
            <Link href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
