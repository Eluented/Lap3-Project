/** @jest-environment jsdom */

import { screen, render } from "@testing-library/react";
import TextField from ".";
import { MemoryRouter } from "react-router-dom";

describe("TextField", () => {
  test("Render", () => {
    render(<TextField />, { wrapper: MemoryRouter });
    const textField = screen.getByLabelText("Amount of Questions");
    expect(textField).toBeInTheDocument();
  });
});
