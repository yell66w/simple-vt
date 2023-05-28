import styles from "./styles.module.css";
import Button from "../Button";

interface Props {
  name: string;
  image: string;
  voted?: boolean;
}
const Nominee = ({ name, image, voted = false }: Props) => {
  return (
    <article className={`${styles.card}`}>
      <header className={`${styles.header}`}>{name}</header>
      <main>
        <img
          className={`${styles.image}`}
          src={`nominees/gentlemen/${image}`}
          alt={name}
        />
      </main>
      <footer>
        <Button bgColor={voted ? "yellow" : "gray"}>Vote</Button>
      </footer>
    </article>
  );
};

export default Nominee;
