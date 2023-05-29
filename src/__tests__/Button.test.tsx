import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../components/Button";
describe("Button Component", () => {
  test("renders with default props", () => {
    render(<Button>Vote</Button>);
    const button = screen.getByRole("button", { name: "Vote" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Vote");
    expect(button).toHaveClass("btn");
    expect(button).toHaveClass("btn-default");
    expect(button).toHaveClass("bg-gray");
    expect(button).toHaveClass("text-white");
    expect(button).not.toHaveClass("btn-rounded");
  });

  test("renders with custom text color", () => {
    render(<Button textColor="black">Vote</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("text-black");
  });

  test("renders with custom background color", () => {
    render(<Button bgColor="yellow">Vote</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("bg-yellow");
  });

  test("renders with custom variant", () => {
    render(<Button variant="rounded">Vote</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("btn-rounded");
  });

  test("handles click event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Vote</Button>);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
