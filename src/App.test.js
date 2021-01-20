import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Form from "./components/Form";

it("says Hello World", () => {
  render(<App />);
  expect(screen.getByText("Hello World", { exact: false })).toBeInTheDocument();
});

it("says Form", () => {
  const { getByText } = render(<Form />);
  expect(getByText("Form")).toBeInTheDocument();
});

// test("types inside text input", () => {
//   render(<Form />);

//   const input = screen.getByPlaceholderText("type here!");

//   userEvent.type(input, "Luke");
//   expect(input.toHaveValue("Luke"));
//   // expect(screen.getAllByTestId("person").toHaveTextContent("Luke Skywalker"));
// });
