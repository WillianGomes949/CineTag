import Banner from 'components/Banners';
import Cabecalho from 'components/Cabecalho/Index';
import Rodape from 'components/Rodape';
import Titulo from 'components/Titulo';

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar videos e filmes!</h1>
      </Titulo>
      <Rodape />
    </>
  );
}

export default Inicio;
