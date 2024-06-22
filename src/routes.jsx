import Cabecalho from 'components/Cabecalho/Index';
import Rodape from 'components/Rodape';
import FavoritosProvider from 'contextos/Favoritos';
import Favoritos from 'pages/Favoritos';
import Inicio from 'pages/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <FavoritosProvider>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
        </Routes>
      </FavoritosProvider>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
