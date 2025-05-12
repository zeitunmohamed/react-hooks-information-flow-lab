import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; // 🔧 Fix for DOM matchers
import ShoppingList from "../components/ShoppingList";

const testData = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Carrots", category: "Produce" },
  { id: 3, name: "Cake", category: "Dessert" },
];

test("displays all items when initially rendered", () => {
  render(<ShoppingList items={testData} />);
  const itemList = screen.getByRole("list"); // 🔄 Better than .querySelector(".Items")

  expect(itemList.children).toHaveLength(testData.length);
});

test("displays only items that match the selected category", () => {
  render(<ShoppingList items={testData} />);

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Dessert" },
  });

  const itemList = screen.getByRole("list");
  expect(itemList.children).toHaveLength(1);
  expect(screen.getByText("Cake")).toBeInTheDocument();
});
