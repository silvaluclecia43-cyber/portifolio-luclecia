import styles from "./styles.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Sobre Mim</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit . Nobis,
          cumque. Minus architecto ullam eos delectus qui voluptatum, quidem aut
          pariatur at tenetur consequatur laborum asperiores perferendis beatae.
          Ab , repellat maiores?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit . Molestias
          animi , ex eos nemo corporis dolorem iusto maxime quaerat facere
          ratione sint dicta laborum aperiam incidunt , facilis optio minus rem
          odio!
        </p>
      </div>
    </section>
  );
}
