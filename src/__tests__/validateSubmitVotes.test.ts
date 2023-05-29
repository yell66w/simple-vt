import { validateSubmitVotes } from "../utils/validateSubmitVotes";

describe("validateSubmitVotes", () => {
  it('returns "Thank you for your votes" when there are no errors', () => {
    const { errors, message } = validateSubmitVotes({}, 2, 2);
    expect(errors).toBe(false);
    expect(message).toBe("Thank you for your votes!");
  });
  it('returns "You already voted for: <first nominee>, <second nominee>" when already voted', () => {
    const submitted_votes = {
      1: { id: 1, name: "John" },
      2: { id: 2, name: "Jane" },
    };
    const { errors, message } = validateSubmitVotes(submitted_votes, 2, 2);
    const submitted_vote_names = Object.values(submitted_votes).map(
      ({ name }) => name
    );
    expect(errors).toBe(true);
    expect(message).toBe(
      `You already voted for: ${submitted_vote_names.join(",")}.`
    );
    expect(message).toContain("John");
    expect(message).toContain("Jane");
  });
  it('returns "You have to pick one nominee for each category" when one category is not selected', () => {
    const { errors, message } = validateSubmitVotes({}, 1, 2);

    expect(errors).toBe(true);
    expect(message).toBe(`You have to pick one nominee for each category`);
  });
});
