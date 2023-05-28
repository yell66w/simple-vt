import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { showPopup } from "../../features/popup/popupSlice";
import { submitVotes } from "../../features/vote/voteSlice";
import Button from "../Button";
import styles from "./styles.module.css";
import data from "../../data/data.json";
import { getObjectCommonValues } from "../../utils/getObjectCommonValues";
import { getPopupValue } from "../../utils/getPopupValue";
const Footer = () => {
  const dispatch = useAppDispatch();
  const submitted_votes = useAppSelector((state) => state.votes.submitted_data);
  const temp_votes = useAppSelector((state) => state.votes.temp_data);
  const submitVotesHandler = () => {
    const alreadyVotedNames: string[] = getObjectCommonValues(
      submitted_votes,
      temp_votes,
      "id",
      "name"
    );
    const { popupValue, errors } = getPopupValue(
      alreadyVotedNames,
      Object.keys(temp_votes)?.length,
      data?.length
    );
    if (!errors) {
      dispatch(submitVotes());
    }
    dispatch(showPopup(popupValue));
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
