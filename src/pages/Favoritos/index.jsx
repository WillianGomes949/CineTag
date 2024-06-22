import Container from 'components/Container';
import styles from './Favoritos.module.css';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import Banner from 'components/Banners';

export default function Favoritos() {
  return (
    <Container>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Seus favoritos em um unico lugar</h1>
      </Titulo>
      <section className={styles.container}>
        <Card
          id="1"
          titulo="Gato bonifacio"
          capa="https://thecatapi.com/api/images/get?format=src&type=png"
        />
      </section>
    </Container>
  );
}
