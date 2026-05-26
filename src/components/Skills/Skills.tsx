import styles from "./styles.module.css";
import { FaCode, FaLaptopCode, FaReact } from "react-icons/fa";
import Reveal from "../Reveal/Reveal";
import { BsTypescript } from "react-icons/bs";

const skills = [
  {
    title: "Frontend",
    description:
      "Desenvolvedora frontend focada em interfaces modernas, responsivas e experiência do usuário.",
    icon: <FaCode/>,
  },
  {
    title: "React",
    description:
      "Intefaces modernas, responsivas e focadas em experiência do usuário com React e vue.",
    icon: <FaReact />,
  },
  {
    title: "TypeScript",
    description:
      "Utilizando TypeScript para criar aplicações mais seguras, organizadas e escaláveis.",
    icon: <BsTypescript />,
  },
  {
    title: "Lógica de progamação",
    description:
      "Desenvolvendo soluções com lógica clara, eficiente e foco em boas práticas.",
    icon: <FaLaptopCode />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.grid}>
        {skills.map((item, index) => (
          <Reveal key={item.title} delay={index * 100}>
            <div className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
