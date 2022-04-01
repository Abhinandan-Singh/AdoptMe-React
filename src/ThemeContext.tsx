import { createContext } from "react";

const ThemeContext = createContext<[string, (theme:string) => void]>(["green", function (){}]);

export default ThemeContext;