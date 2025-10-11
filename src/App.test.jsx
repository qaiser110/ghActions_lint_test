import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders Vite and React logos", () => {
    render(<App />);
    expect(screen.getByAltText("Vite logo")).toBeInTheDocument();
    expect(screen.getByAltText("React logo")).toBeInTheDocument();
  });

  it("displays the correct heading", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it("updates count when button is clicked", () => {
    render(<App />);
    const button = screen.getByText("count is 0");
    fireEvent.click(button);
    expect(screen.getByText("count is 1")).toBeInTheDocument();
  });

  it("displays help text", () => {
    render(<App />);
    expect(
      screen.getByText(/Click on the Vite and React logos to learn more/)
    ).toBeInTheDocument();
  });
});
