import { createContext } from "react";
import { IAppContext } from "./types.interface"

export const AppContext = createContext<null | IAppContext>(null)