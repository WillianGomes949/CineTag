import styles from './Favoritos.module.css';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import Banner from 'components/Banners';
import { useFavoritoContext } from 'contextos/Favoritos';

export default function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Seus favoritos em um unico lugar</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}
