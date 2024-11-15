import { createFeature, createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';
import { UserInterface } from '../../interfaces/user';

export interface AuthState {
  isLoggedIn: boolean;
  user: UserInterface | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null
};

export const AUTH_KEY = 'auth';

const authReducer = createReducer(
  initialState,
  on(login, (state, { user }) => ({
    ...state,
    isLoggedIn: true,
    user: user
  })),
  on(logout, (state) => ({
    ...state,
    isLoggedIn: false,
    user: null
  }))
);

export const authFeature = createFeature({
  name: AUTH_KEY,
  reducer: authReducer
});
