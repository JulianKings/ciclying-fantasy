import { createAction, props } from '@ngrx/store'
import { UserInterface } from '../../interfaces/user';

export const login = createAction('[Auth] Login', props<{ user: UserInterface, token: string }>());
export const logout = createAction('[Auth] Logout');
export const loadUser = createAction('[Auth] Load User');
