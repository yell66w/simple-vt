import { ReactNode } from "react";
import styles from "./styles.module.css";
interface Props {
  title: string;
  children: ReactNode;
}
const Category = ({ title, children }: Props) => {
  return (
    <section className={styles.category}>
      <header className={styles.header}>
        <h5>Category: {title}</h5>
      </header>
      <main className={styles.content}>
        <div className={styles.cards}>{children}</div>
      </main>
    </section>
  );
};

export default Category;
