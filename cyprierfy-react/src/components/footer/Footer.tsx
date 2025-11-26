import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <img src="/vite.svg" />
        <span>Cyprierfy</span>
      </div>

      <p>© 2025 Cyprierfy AB — Todos os direitos reservados.</p>
    </footer>
  );
}
