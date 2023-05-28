import { useAppDispatch } from "../../app/hooks";
import { showPopup } from "../../features/popup/popupSlice";
import { submitVotes } from "../../features/vote/voteSlice";
import Button from "../Button";
import styles from "./styles.module.css";

const Footer = () => {
  const dispatch = useAppDispatch();
  const submitVotesHandler = () => {
    dispatch(submitVotes());
    dispatch(showPopup("Thank you for your votes!"));
  };

  return (
    <footer className={styles.footer}>
      <Button
        onClick={submitVotesHandler}
        variant="rounded"
        borderColor="black"
        textColor="black"
        bgColor="yellow"
      >
        Submit Your Votes
      </Button>
    </footer>
  );
};

export default Footer;
