import React, { createContext, useState } from "react";
import { CategoriaType } from "../models/CategoriaType";

export const CategoriasContext = createContext({});

export const CategoriasProvider = ({ children }) => {
   const [categorias, setCategorias] = useState<CategoriaType[]>([]);

   return (
      <CategoriasContext.Provider value={{
         categorias,
         setCategorias
      }}>
         {children}
      </CategoriasContext.Provider>
   )
}