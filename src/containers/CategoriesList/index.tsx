import Category from "../../components/Category";
import Nominee from "../../components/Nominee";
import data from "../../data/data.json";
import styles from "./styles.module.css";

const CategoriesList = () => {
  return (
    <main className={styles.container}>
      {data?.map(({ id: category_id, title, nominees }) => {
        return (
          <Category key={category_id} title={title}>
            {nominees?.map(({ id: nominee_id, image, name }) => {
              return (
                <Nominee
                  nominee_id={nominee_id}
                  category_id={category_id}
                  key={nominee_id}
                  name={name}
                  image={image}
                />
              );
            })}
          </Category>
        );
      })}
    </main>
  );
};

export default CategoriesList;
