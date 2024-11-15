import { AbstractItemInterface } from "./abstractions";

export interface UserInterface extends AbstractItemInterface {
  username: string;
  email: string;
  password: string;
}
