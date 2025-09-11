'use server';

/**
 * @fileOverview A project skill analyzer AI agent.
 *
 * - analyzeProjectSkills - A function that analyzes the skills showcased in a project description.
 * - AnalyzeProjectSkillsInput - The input type for the analyzeProjectSkills function.
 * - AnalyzeProjectSkillsOutput - The return type for the analyzeProjectSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeProjectSkillsInputSchema = z.object({
  projectDescription: z.string().describe('The description of the project.'),
});
export type AnalyzeProjectSkillsInput = z.infer<typeof AnalyzeProjectSkillsInputSchema>;

const AnalyzeProjectSkillsOutputSchema = z.object({
  skills: z
    .array(z.string())
    .describe('The list of skills highlighted in the project description.'),
});
export type AnalyzeProjectSkillsOutput = z.infer<typeof AnalyzeProjectSkillsOutputSchema>;

export async function analyzeProjectSkills(
  input: AnalyzeProjectSkillsInput
): Promise<AnalyzeProjectSkillsOutput> {
  return analyzeProjectSkillsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeProjectSkillsPrompt',
  input: {schema: AnalyzeProjectSkillsInputSchema},
  output: {schema: AnalyzeProjectSkillsOutputSchema},
  prompt: `You are an AI expert that can analyze project descriptions and identify the skills that were used in each project.

  Analyze the following project description and extract the list of skills highlighted in the project description.

  Project Description: {{{projectDescription}}}

  Skills:`,
});

const analyzeProjectSkillsFlow = ai.defineFlow(
  {
    name: 'analyzeProjectSkillsFlow',
    inputSchema: AnalyzeProjectSkillsInputSchema,
    outputSchema: AnalyzeProjectSkillsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
