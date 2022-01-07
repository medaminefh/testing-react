import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

// a fun that type and click the add btn
const addTodo = (todos) => {
  const inputElem = screen.getByPlaceholderText(/add a new task here.../i);
  const addBtnElem = screen.getByRole("button", { name: "Add" });

  todos.forEach((todo) => {
    // Typing some text in the input
    fireEvent.change(inputElem, { target: { value: todo } });

    // clicking on the add btn
    fireEvent.click(addBtnElem);
  });
  expect(inputElem).toBeInTheDocument();
  expect(addBtnElem).toBeInTheDocument();
};

const Mockfun = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

describe("Integration Testing", () => {
  it("should render multiple todos", () => {
    render(<Mockfun />);
    addTodo(["Hello world!", "Go to the Gym", "Get a girlfriend", "Yeees"]);

    const divElems = screen.getAllByTestId("todos");

    expect(divElems.length).toBe(4);
  });

  it("No completed class in initial render", () => {
    render(<Mockfun />);
    addTodo(["Hello world!"]);

    const divElem = screen.getByTestId("todos");

    expect(divElem).not.toHaveClass("todo-item-active");
  });

  it("completed class render if the item elem is clicked", () => {
    render(<Mockfun />);
    addTodo(["Hello world!"]);

    const divElem = screen.getByTestId("todos");

    // clicking the item
    fireEvent.click(divElem);

    expect(divElem).toHaveClass("todo-item-active");
  });
});
