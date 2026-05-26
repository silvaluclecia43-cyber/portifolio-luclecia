import { FaInstagram, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import styles from "./styles.module.css";

export default function Contact() {
  return (
    <section id="Contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>vamos conversar?</h2>

          <p className={styles.text}>
            Entre em contato comigo através das redes sociais abaixo. seja para
            projetos ,dúvidas ou trocar ideias.
          </p>

          <div className={styles.links}>
            <a
              href="#"
              target="_blank"
              className={`${styles.button} ${styles.instagram}`}
            >
              <FaInstagram /> Instagran
            </a>

            <a
              href="#"
              target="blank"
              className={`${styles.button} ${styles.github}`}
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="#"
              target="blank"
              className={`${styles.button} ${styles.whatsapp}`}
            >
              <FaWhatsapp /> whatsapp
            </a>

            <a href="#" className={`${styles.button} ${styles.email}`}>
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
