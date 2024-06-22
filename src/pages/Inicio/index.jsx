import Banner from 'components/Banners';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import videos from 'json/db.json';
import styles from './Inicio.module.css';
import Container from 'components/Container';

export default function Inicio() {
  return (
    <Container>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar videos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </Container>
  );
}
