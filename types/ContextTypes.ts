// Modules imports
import { createContext } from "react";

// Local imports
import { UserProps } from "./GlobalTypes";

// interface for context
export interface GlobalContextProps {
    User: UserProps | null;
    SetUser: React.Dispatch<React.SetStateAction<UserProps | null>>
    showSnack: (text: string, color?: string) => void
}

// Context
const GlobalContext = createContext<GlobalContextProps>({ User: null, SetUser: () => { }, showSnack: () => { } });

// exports
export default GlobalContext;
