import { IStoriesContext } from "./types.interface"
import { createContext } from "react";

export const StoriesContext = createContext<null | IStoriesContext>(null)