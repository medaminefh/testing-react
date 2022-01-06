import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter as Router } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
  <Router>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </Router>
);

// the TodoFooter component uses the <Link> tag from the react router dom lib
// so in order to make this test to pass is actually wrap the TodoFooter component
// inside the BrowserRouter in order to be the <Link> tag accessible

it("should render a number of incomplete todos", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

it("should render one task", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeVisible();
});

it("should render one task", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = await screen.getByTestId("para");
  expect(paragraphElement).toHaveTextContent("1 task left");
});

it("should render one task", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = await screen.getByTestId("para");
  expect(paragraphElement.textContent).toBe("1 task left");
});
