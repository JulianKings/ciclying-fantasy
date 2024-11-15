import { createFeature, createReducer, on } from '@ngrx/store';
import { login, logout, loadUser } from './auth.actions';
import { UserInterface } from '../../interfaces/user';
import LocalStorageManager from '../../util/localStorageManager';
import { SSOState } from '../../interfaces/state';

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
  on(login, (state, { user, token}) => {
    LocalStorageManager.setItemObject('sso', {
      token: token,
      user: user
    });

    return {
      ...state,
      isLoggedIn: true,
      user: user
    }
  }),
  on(logout, (state) => {
    LocalStorageManager.removeItem('sso');

    return {
      ...state,
      isLoggedIn: false,
      user: null
    }
  }),
  on(loadUser, (state) => {

    const sso: SSOState | null = (LocalStorageManager.getItemObject('sso') as SSOState);
    const user: UserInterface | null = sso ? sso.user : null;

    if(user === null) {
      return state;
    } else {
      return {
        ...state,
        isLoggedIn: true,
        user: user
      };
    }
  })
);

export const authFeature = createFeature({
  name: AUTH_KEY,
  reducer: authReducer
});
