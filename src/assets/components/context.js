import { createContext } from "react";
import { PersonalInfo } from "../../App";

export const Person = createContext<PersonalInfo | undefined>(undefined)