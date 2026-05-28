import styles from "./styles.module.css";
import { FaInstagram, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          Feito com
          <span className={styles.heart}> ❤ </span>
          por <strong>Luclecia Silva</strong>
        </p>

        <div className={styles.socials}>
          <a href="https://www.instagram.com/luclecia_s20?igsh=cXVwODRnOG04MGJ2" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://github.com/silvaluclecia43-cyber" target="_blank">
            <FaGithub />
          </a>
          <a href="https://w.app/lucleciasilva" target="_blank">
            <FaWhatsapp />
          </a>
          <a href="mailto:silvaluclecia43@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} - todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
