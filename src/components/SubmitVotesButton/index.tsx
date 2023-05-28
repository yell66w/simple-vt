import { useAppDispatch, useAppSelector } from "../../app/hooks";
import data from "../../data/data.json";
import { showPopup } from "../../features/popup/popupSlice";
import { submitVotes } from "../../features/vote/voteSlice";
import { validateSubmitVotes } from "../../utils/validateSubmitVotes";
import Button from "../Button";

const SubmitVotesButton = () => {
  const dispatch = useAppDispatch();
  const submitted_votes = useAppSelector((state) => state.votes.submitted_data);
  const temp_votes = useAppSelector((state) => state.votes.temp_data);
  const submitVotesHandler = () => {
    const { message, errors } = validateSubmitVotes(
      submitted_votes,
      Object.keys(temp_votes)?.length,
      data?.length
    );
    if (!errors) {
      dispatch(submitVotes());
    }
    dispatch(showPopup(message));
  };
  return (
    <Button
      onClick={submitVotesHandler}
      variant="rounded"
      borderColor="black"
      textColor="black"
      bgColor="yellow"
    >
      Submit Your Votes
    </Button>
  );
};

export default SubmitVotesButton;
