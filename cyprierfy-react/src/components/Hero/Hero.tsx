import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1>Baixe o Cyprierfy</h1>
        <p>Milhões de músicas e podcasts no seu dispositivo.</p>

        <a className={styles.button} href="#">
          <img src="/windowsstore-badge.png" alt="Microsoft Store" />
        </a>

        <a className={styles.direct} href="#">Baixar direto do Cyprierfy</a>
      </div>
    </section>
  );
}
