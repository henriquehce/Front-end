import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="download" className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Baixe o Cyprierfy</h1>
        <p>Milhões de músicas e podcasts no seu dispositivo.</p>

        <a
          className={styles.storeButton}
          href="https://www.microsoft.com/store"
          target="_blank"
        >
          <img src="/windowsstore-badge.png" />
          Baixar na Microsoft Store
        </a>
      </div>
    </section>
  );
}
