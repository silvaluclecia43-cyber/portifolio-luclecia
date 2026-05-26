import styles from "./styles.module.css";
import { useTypewriter } from "../../hooks/useTypewriter";
import minhaImagem from "../../assets/img/about-us.svg";

export default function Hero() {
  const typedText = useTypewriter(["Node", "React", "TypeScript"]);

  return (
    <section className={styles.section}>
      <div>
        <h2 className={styles.title}>
          Desenvolvedora
          <br />
          <span className={styles.highlight}>{typedText}</span>
        </h2>
        <p className={styles.text}>
          Transformando ideias em soluções digitais.
        </p>
      </div>
      <div>
        <img src={minhaImagem} alt="Minha imagem" className={styles.image} />
      </div>
    </section>
  );
}
