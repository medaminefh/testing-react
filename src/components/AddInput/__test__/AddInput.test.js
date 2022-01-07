import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockfun = jest.fn();

describe("AddInput", () => {
  it("Testing the input element", () => {
    render(<AddInput todos={[]} setTodos={mockfun} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("Testing the typing event", () => {
    render(<AddInput todos={[]} setTodos={mockfun} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);

    // firing an event (the change event), change the input value to Hello world
    fireEvent.change(inputElement, { target: { value: "Hello world" } });

    // testing the value input
    expect(inputElement.value).toBe("Hello world");
  });

  it("when clicking the btn, the input will go empty", () => {
    render(<AddInput todos={[]} setTodos={mockfun} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    const addBtn = screen.getByRole("button");

    // firing an event (the change event), change the input value to Hello world
    fireEvent.change(inputElement, { target: { value: "Hello world!" } });

    // firing the click event
    fireEvent.click(addBtn);

    // testing the value input
    expect(inputElement.value).toBe("");
  });
});
