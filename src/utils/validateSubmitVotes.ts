import { NomineeInterface } from "../features/vote/voteSlice";
export const validateSubmitVotes = (
  submitted_votes: { [key: number]: NomineeInterface },
  temporary_length: number,
  target_length: number
) => {
  const submitted_vote_names = Object.values(submitted_votes).map(
    ({ name }) => name
  );
  let message = "Thank you for your votes!";
  let errors = true;
  if (submitted_vote_names.length) {
    message = `You already voted for: ${submitted_vote_names.join(",")}.`;
  } else if (temporary_length !== target_length) {
    message = "You have to pick one nominee for each category";
  } else {
    errors = false;
  }

  return { message, errors };
};
