import React, { createContext, useContext } from "react";

export const cardContext = createContext({
     themeMode:"light",
     darkMode:()=>{},
     lightMode:()=>{},
})

export const  ThemProviders = cardContext.Provider;
  
 export default function useTheme(){
     return useContext(cardContext);
 }

 