import Category from "../../components/Category";
import Nominee from "../../components/Nominee";
import data from "../../data/data.json";
import styles from "./styles.module.css";

const CategoriesList = () => {
  return (
    <main className={styles.container}>
      {data?.map(({ id, title, nominees }) => {
        return (
          <Category key={id} title={title}>
            {nominees?.map(({ id: nomineeId, image, name }) => {
              return <Nominee key={nomineeId} name={name} image={image} />;
            })}
          </Category>
        );
      })}
    </main>
  );
};

export default CategoriesList;
