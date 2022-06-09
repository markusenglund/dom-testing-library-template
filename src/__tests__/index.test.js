import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../";

test("increments the count", () => {
  const { debug } = render(<Counter />);
  debug();
});
