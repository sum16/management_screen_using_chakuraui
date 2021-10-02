import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

import { UserType } from "../types/api/user";

type LoginUser = UserType & {isAdmin: boolean} ;

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<UserType | null>(null)
  return(
    <LoginUserProvider.Provider value={{loginUser, setLoginUser}}>
    {children}
    </LoginUserProvider.Provider>;
  )
};
