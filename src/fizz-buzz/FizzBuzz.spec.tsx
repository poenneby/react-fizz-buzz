import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FizzBuzz from "./FizzBuzz";

describe("FizzBuzz", () => {
  it("should render 1", () => {
    render(<FizzBuzz />);
  });

  it("should render 2", () => {
    render(<FizzBuzz startAt={2} />);
    expect(screen.getByRole("heading")).toHaveTextContent("2");
  });
  
  it("should render Fizz", () => {
    const { rerender } = render(<FizzBuzz startAt={3} />);
    expect(screen.getByRole("heading")).toHaveTextContent("Fizz");
    rerender(<FizzBuzz startAt={6} />);
    expect(screen.getByRole("heading")).toHaveTextContent("Fizz");
  });
  
  it("should render Buzz", () => {
    const { rerender } = render(<FizzBuzz startAt={5} />);
    expect(screen.getByRole("heading")).toHaveTextContent("Buzz");
    rerender(<FizzBuzz startAt={10} />);
    expect(screen.getByRole("heading")).toHaveTextContent("Buzz");
  });
  
  it("should render FizzBuzz", () => {
    const { rerender } = render(<FizzBuzz startAt={15} />);
    expect(screen.getByRole("heading")).toHaveTextContent("FizzBuzz");
    rerender(<FizzBuzz startAt={30} />);
    expect(screen.getByRole("heading")).toHaveTextContent("FizzBuzz");
  });
  
  it("should increment every second", async () => {
    render(<FizzBuzz />);
    expect(screen.getByRole("heading")).toHaveTextContent("1");
    await new Promise((r) => setTimeout(r, 1000));
    expect(screen.getByRole("heading")).toHaveTextContent("2");
  });
});
