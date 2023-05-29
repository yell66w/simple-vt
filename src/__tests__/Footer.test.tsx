import { render } from "@testing-library/react";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("Footer", () => {
  let store = mockStore({});
  beforeEach(() => {
    store = mockStore({
      votes: {
        temp_data: {},
        submitted_data: {},
      },
    });
  });

  it("renders the Footer component with submit button", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    const submitButton = getByRole("button", { name: "Submit Your Votes" });
    expect(submitButton).toBeInTheDocument();
  });
});
