import styles from "./Stores.module.css";

export default function Stores() {
  return (
    <section id="download" className={styles.stores}>
      <h2>Ouça em celulares e tablets também</h2>
      <p>Curtir o Cyprierfy no celular é rápido, fácil e grátis!</p>

      <div className={styles.buttons}>
        <img src="/app-store-botao.png" />
        <img src="/googleplay-badge.png" />
        <img src="/windowsstore-badge.png" />
      </div>
    </section>
  );
}
