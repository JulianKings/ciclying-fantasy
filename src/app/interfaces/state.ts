import { UserInterface } from "./user";

export interface SSOState {
  token: string;
  user: UserInterface | null;
}
