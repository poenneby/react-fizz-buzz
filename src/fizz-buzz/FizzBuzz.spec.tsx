import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FizzBuzz from "./FizzBuzz";

describe("Fizz Buzz", () => {
  it("should render 1", () => {
    const component = <FizzBuzz />;
    render(component);
    expect(screen.getByRole("heading")).toHaveTextContent("1");
  });

  it("should render Fizz when multiple of 3", () => {
    const component = <FizzBuzz startAt={6} />;
    render(component);
    expect(screen.getByRole("heading")).toHaveTextContent("Fizz");
  });

  it("should render Buzz when multiple of 5", () => {
    const component = <FizzBuzz startAt={10} />;
    render(component);
    expect(screen.getByRole("heading")).toHaveTextContent("Buzz");
  });

  it("should render FizzBuzz when multiple of 3 and 5", () => {
    const component = <FizzBuzz startAt={15} />;
    render(component);
    expect(screen.getByRole("heading")).toHaveTextContent("FizzBuzz");
  });

  it("should increment every second", async () => {
    render(<FizzBuzz />);
    expect(screen.getByRole("heading")).toHaveTextContent("1");
    await new Promise((r) => setTimeout(r, 1000));
    expect(screen.getByRole("heading")).toHaveTextContent("2");
  })
});
