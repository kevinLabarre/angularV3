import { Token } from "./token.interface";
import { User } from "./user.interface";

export interface AuthResponse {
  success: number;
  message: string;
  token: Token;
  content: User;
}
