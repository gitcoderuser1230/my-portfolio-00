"use server";

import {
  analyzeProjectSkills,
  type AnalyzeProjectSkillsInput,
} from "@/ai/flows/project-skill-analyzer";

export async function analyzeProjectSkillsAction(
  input: AnalyzeProjectSkillsInput
) {
  return await analyzeProjectSkills(input);
}
