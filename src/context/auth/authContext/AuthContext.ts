import { createContext } from 'react';

import { AuthStateContextType, AuthDispatchContextType } from './AuthContext.types';

export const AuthStateContext = createContext<AuthStateContextType | undefined>(undefined);
export const AuthDispatchContext = createContext<AuthDispatchContextType | undefined>(undefined);
