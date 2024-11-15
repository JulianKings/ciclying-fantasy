import { AUTH_KEY, AuthState } from "./auth/auth.reducer";

export interface AppState {
  [AUTH_KEY]: AuthState;
}
