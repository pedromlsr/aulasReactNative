import React, { createContext, useState } from "react";
import { CategoriaType } from "../models/CategoriaType";

export const CategoriasContext = createContext({});

export const CategoriasProvider = ({ children }) => {
   const [categorias, setCategorias] = useState<CategoriaType[]>([]);
   const [categoriasInitial, setCategoriasInitial] = useState<CategoriaType[]>([]);

   return (
      <CategoriasContext.Provider value={{
         categorias,
         setCategorias,
         categoriasInitial,
         setCategoriasInitial
      }}>
         {children}
      </CategoriasContext.Provider>
   )
}