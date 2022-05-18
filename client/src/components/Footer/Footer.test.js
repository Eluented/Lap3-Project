/** @jest-environment jsdom */

import { screen, render } from "@testing-library/react";
import Footer from ".";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
  test("Renders the Footer", () => {
    render(<Footer />, { wrapper: MemoryRouter });
    const footer = screen.getByLabelText("footer");
    expect(footer).toBeInTheDocument();
  });
});
