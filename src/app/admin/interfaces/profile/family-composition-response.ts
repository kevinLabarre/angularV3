import { FamilyMember } from "./family-member.interface";

export interface FamilyCompositionResponse {
  success: number;
  message: string;
  content: FamilyMember[];
}
