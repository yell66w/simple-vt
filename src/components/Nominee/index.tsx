import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addTempVote,
  selectSubmittedVoted,
  selectTempVoted,
} from "../../features/vote/voteSlice";
import Button from "../Button";
import styles from "./styles.module.css";

interface Props {
  name: string;
  image: string;
  nominee_id: number;
  category_id: number;
}
const Nominee = ({ category_id, nominee_id, name, image }: Props) => {
  const dispatch = useAppDispatch();
  const temp_voted_nominee = useAppSelector((state) =>
    selectTempVoted(state, category_id)
  );
  const submitted_voted_nominee = useAppSelector((state) =>
    selectSubmittedVoted(state, category_id)
  );
  const voted = temp_voted_nominee
    ? temp_voted_nominee?.id === nominee_id
    : submitted_voted_nominee?.id === nominee_id;

  const handleAddTempVote = () => {
    dispatch(addTempVote({ category_id, nominee: { id: nominee_id, name } }));
  };

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
        <Button onClick={handleAddTempVote} bgColor={voted ? "yellow" : "gray"}>
          Vote
        </Button>
      </footer>
    </article>
  );
};

export default Nominee;
