// Next
import Head from "next/head";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";

const Map = dynamic(
  () => import("../../components/map"), // replace '@components/map' with your component's location
  { ssr: false }
);

// Components
import Carousel from "../../components/carousel";
import ExhibitionCard from "../../components/exhibition-card";
import styles from "./style.module.scss";
import ImageWrapper from "../../components/image-wrapper";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [scrollExhibitions, setScrollExhibitions] = useState<number>(0);

  function handleArrowLeft() {
    const numberOfExhibitionsCards = 8 + 1.2;
    const widthOfOneCard = 23.9375 * 16;
    const listWidth = numberOfExhibitionsCards * widthOfOneCard;

    let x = scrollExhibitions - Math.round(window.innerWidth / 2);

    console.log(window.innerWidth - listWidth, x);

    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth;
    }
    setScrollExhibitions(x);
  }

  function handleArrowRight() {
    let x = scrollExhibitions + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0;
    }

    setScrollExhibitions(x);
  }

  return (
    <div>
      <Head>
        <title>Museu Tronco, Ramos e Raízes | Início</title>
      </Head>
      <Carousel />

      <main>
        <section className={styles.recentExhibitions}>
          <div className="content">
            <h2>EXPOSIÇÕES MAIS RECENTES</h2>
          </div>
          <div className={styles.exhibitionContainer} style={{ marginLeft: scrollExhibitions }}>
            <img
              src="/assets/icons/arrow_left.svg"
              alt="Passar exibições para esquerda"
              className={`${styles.arrowLeft} ${styles.arrowIcon}`}
              onClick={handleArrowRight}
              onKeyDown={handleArrowRight}
            />
            <div className={styles.exhibitionArea}>
              <ExhibitionCard pathToExhibition="/exhibition" />
              <ExhibitionCard pathToExhibition="/exhibition" />
              <ExhibitionCard pathToExhibition="/exhibition" />
              <ExhibitionCard pathToExhibition="/exhibition" />
              <ExhibitionCard pathToExhibition="/exhibition" />
              <ExhibitionCard pathToExhibition="/exhibition" />
              <ExhibitionCard pathToExhibition="/exhibition" />
              <ExhibitionCard pathToExhibition="/exhibition" />
            </div>
            <img
              src="/assets/icons/arrow_left.svg"
              alt="Passar exibições para direita"
              className={`${styles.arrowRight} ${styles.arrowIcon}`}
              onClick={handleArrowLeft}
              onKeyDown={handleArrowLeft}
            />
          </div>
        </section>

        <section className={`content ${styles.logoArea}`}>
          <img src="/assets/img/expanded_logo.png" alt="Logo do museu" />
        </section>

        <section>
          <div className="content">
            <h2>Mapa de exposições</h2>
          </div>

          <Map />
        </section>

        <section className={`content ${styles.galleryArea}`}>
          <h2>Galeria</h2>

          <div className={styles.galleryGrid}>
            <ImageWrapper
              className={styles.firstImageWrapper}
              alt="Teste"
              imageUrl="https://www.cultura.sp.gov.br/wp-content/uploads/2018/04/Capturar.png"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://www.cultura.sp.gov.br/wp-content/uploads/2018/04/Capturar.png"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://www.cultura.sp.gov.br/wp-content/uploads/2018/04/Capturar.png"
            />

            <ImageWrapper
              className={styles.fourthImageWrapper}
              alt="Teste"
              imageUrl="https://www.cultura.sp.gov.br/wp-content/uploads/2018/04/Capturar.png"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://www.cultura.sp.gov.br/wp-content/uploads/2018/04/Capturar.png"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://www.cultura.sp.gov.br/wp-content/uploads/2018/04/Capturar.png"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://www.cultura.sp.gov.br/wp-content/uploads/2018/04/Capturar.png"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
