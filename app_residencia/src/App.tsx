import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { AutenticacaoProvider } from './context/AutenticacaoContext';
import { LoadingProvider } from './context/LoadingContext';
import { SearchProvider } from './context/SearchContext';
import { CategoriasProvider } from './context/CategoriaContext';
import { CarrinhoProvider } from './context/CarrinhoContext';

export default () => {

  return (
    <AutenticacaoProvider>
      <LoadingProvider>
        <SearchProvider>
          <CategoriasProvider>
            <CarrinhoProvider>
              <Routes />
            </CarrinhoProvider>
          </CategoriasProvider>
        </SearchProvider>
      </LoadingProvider>
    </AutenticacaoProvider>
  )
}