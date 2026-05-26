import styles from "./styles.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Sobre Mim</h2>
        <p className={styles.text}>
          Sou desenvolvedora web focada na criação de interfaces modernas,
          responsivas e intuitivas. Tenho interesse em desenvolver experiências
          digitais que unam estética, funcionalidade e desempenho, sempre
          buscando escrever códigos organizados e manter uma boa experiência
          para o usuário em diferentes dispositivos.
        </p>
        <p className={styles.text}>
          Estou constantemente aprendendo novas tecnologias e aprimorando minhas
          habilidades no desenvolvimento frontend. Gosto de transformar ideias
          em projetos reais, explorando criatividade, atenção aos detalhes e
          soluções que tornem cada aplicação mais dinâmica, acessível e
          eficiente.
        </p>
      </div>
    </section>
  );
}
