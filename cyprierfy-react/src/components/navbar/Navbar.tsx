import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoArea}>
        <img src="/vite.svg" className={styles.logo} />
        <span>Cyprierfy</span>
      </div>

      <ul className={styles.links}>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/planos">Planos Premium</Link></li>
        <li><a href="#download">Download</a></li>
        <li><Link to="/criar-conta">Criar Conta</Link></li>
        <li><Link to="/login">Acessar Conta</Link></li>
      </ul>
    </nav>
  );
}
