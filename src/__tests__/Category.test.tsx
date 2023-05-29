import { render, screen } from "@testing-library/react";
import Category from "../components/Category";

describe("Category Component", () => {
  test("renders the category title", () => {
    render(<Category title="Best Actor">{/* Children */}</Category>);

    const categoryTitle = screen.getByText("Category: Best Actor");
    expect(categoryTitle).toBeInTheDocument();
  });

  test("renders the children components", () => {
    render(
      <Category title="Best Actor">
        <div>Child Component 1</div>
        <div>Child Component 2</div>
      </Category>
    );

    const childComponent1 = screen.getByText("Child Component 1");
    const childComponent2 = screen.getByText("Child Component 2");

    expect(childComponent1).toBeInTheDocument();
    expect(childComponent2).toBeInTheDocument();
  });
});
