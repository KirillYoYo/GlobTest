import {createContext, Dispatch, SetStateAction} from "react";

interface IsLoginContext {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

// IsLoginContext
export default createContext<IsLoginContext>({isLogin: false, setIsLogin: () => {}})