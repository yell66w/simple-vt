import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Nominee from "../components/Nominee";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);
describe("Nominee Component", () => {
  let store = mockStore({});

  beforeEach(() => {
    store = mockStore({
      votes: {
        temp_data: {
          1: { id: 3, name: "Smith Hans" },
        },
        submitted_data: {
          1: { id: 1, name: "John Doe" },
          2: { id: 2, name: "Jane Smith" },
        },
      },
    });
  });
  test("renders the nominee", () => {
    render(
      <Provider store={store}>
        <Nominee
          name="John Doe"
          image="john-doe.jpg"
          nominee_id={1}
          category_id={1}
        />
      </Provider>
    );

    const nomineeName = screen.getByText("John Doe");
    const nomineeImage = screen.getByAltText("John Doe");
    const nomineeVoteButton = screen.getByRole("button", { name: "Vote" });
    expect(nomineeName).toBeInTheDocument();
    expect(nomineeImage.getAttribute("src")).toBe("nominees/john-doe.jpg");
    expect(nomineeVoteButton).toBeInTheDocument();
  });

  test("renders gray background color when not voted", () => {
    render(
      <Provider store={store}>
        <Nominee
          name="John Doe"
          image="john-doe.jpg"
          nominee_id={2}
          category_id={1}
        />
      </Provider>
    );
    const voteButton = screen.getByRole("button", { name: "Vote" });
    expect(voteButton).toHaveClass("bg-gray");
    expect(voteButton).not.toHaveClass("bg-yellow");
  });

  test("renders yellow background color when voted", () => {
    render(
      <Provider store={store}>
        <Nominee
          name="Smith Hans"
          image="smith-hans.jpg"
          nominee_id={3}
          category_id={1}
        />
      </Provider>
    );
    const voteButton = screen.getByRole("button", { name: "Vote" });
    expect(voteButton).toHaveClass("bg-yellow");
  });
});
