import { render } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  it("renders the Header component with the correct title", () => {
    const { getByText } = render(<Header />);
    const titleElement = getByText("Online Votes");
    expect(titleElement).toBeInTheDocument();
  });
});
