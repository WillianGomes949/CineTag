import Cabecalho from 'components/Cabecalho/Index';
import FavoritosProvider from 'contextos/Favoritos';
import Container from 'components/Container';
import { Outlet } from 'react-router-dom';
import Rodape from 'components/Rodape';

export default function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}
