import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("renders learn react link", () => {
  render(<Header title={"Hello"} />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

it("getting by role", () => {
  render(<Header title={"Hello"} />);
  const linkElement = screen.getByRole("heading");
  expect(linkElement).toBeInTheDocument();
});

// find by (is async)

it("find by role", async () => {
  render(<Header title={"Hello"} />);
  const linkElement = await screen.findByRole("heading");
  expect(linkElement).toBeInTheDocument();
});

// query by with not (is async)

it("insure that the element is not in document", () => {
  render(<Header title={"Hello"} />);
  const linkElement = screen.queryByText(/regt/i);
  expect(linkElement).not.toBeInTheDocument();
});
