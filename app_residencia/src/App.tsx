import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { AutenticacaoProvider } from './context/AutenticacaoContext';
import { LoadingProvider } from './context/LoadingContext';
import { SearchProvider } from './context/SearchContext';
import { CategoriasProvider } from './context/CategoriaContext';

export default () => {

  return (
    <AutenticacaoProvider>
      <LoadingProvider>
        <SearchProvider>
          <CategoriasProvider>
            <Routes />
          </CategoriasProvider>
        </SearchProvider>
      </LoadingProvider>
    </AutenticacaoProvider>
  )
}