import styles from "./Devices.module.css";

export default function Devices() {
  return (
    <section className={styles.devices}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h2>Uma só conta, em qualquer dispositivo</h2>
        <p>Celular • Tablet • TV • Computador • Console • Alto-falante</p>
      </div>
    </section>
  );
}
