import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders greet message", () => {
  const { getByText } = render(<App />);
  const heaaderElement = getByText(/Hello React/i);
  expect(heaaderElement).toBeInTheDocument();
});
