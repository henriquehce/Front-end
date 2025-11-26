import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="/logo.png" alt="Logo" />

      <p>© 2025 Cyprierfy AB • Todos os direitos reservados.</p>
    </footer>
  );
}
