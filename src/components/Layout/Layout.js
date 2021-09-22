import React from "react";
import { SudokuProvider } from "../../contexts/SudokuContext";

// Layout makes sure that provider exist before rendering the rest of the DOM.
// For example if we are trying to useContext in the same function as the initial render of the provider we would get an error as the useContext would be called first.
function Layout({ children }) {
  return (
    <SudokuProvider>
      <LayoutNoProvider>{children}</LayoutNoProvider>
    </SudokuProvider>
  );
}

function LayoutNoProvider({ children }) {
  return <div className="h-screen w-screen bg-gray-200">{children}</div>;
}

export default Layout;
