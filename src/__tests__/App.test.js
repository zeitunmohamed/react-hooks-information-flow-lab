import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; // 🔧 Fix for .toBeInTheDocument
import App from "../components/App";

test("changes to 'dark' mode when the button is clicked", () => {
  const { container } = render(<App />);

  const appDiv = container.querySelector(".App");
  expect(appDiv).toBeInTheDocument(); // ✅ Will now work

  // Initially not dark
  expect(appDiv.classList.contains("dark")).toBe(false);

  // Click the button
  fireEvent.click(screen.getByText(/Mode/));
  expect(appDiv.classList.contains("dark")).toBe(true);
});

test("changes back to 'light' mode when the button is clicked twice", () => {
  const { container } = render(<App />);
  const appDiv = container.querySelector(".App");

  expect(appDiv.classList.contains("dark")).toBe(false);

  fireEvent.click(screen.getByText(/Mode/));
  expect(appDiv.classList.contains("dark")).toBe(true);

  fireEvent.click(screen.getByText(/Mode/));
  expect(appDiv.classList.contains("dark")).toBe(false);
});
