// src/components/App.js
import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const appClass = isDarkMode ? "App dark" : "App";

  function handleDarkModeClick() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
