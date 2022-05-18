/** @jest-environment jsdom */

import { screen, render } from "@testing-library/react";
import Navbar from ".";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";

describe("Navbar", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <MemoryRouter location={history.location} navigator={history}>
        <Navbar />
      </MemoryRouter>
    );
  });

  test("Render Navbar", () => {
    const navbar = screen.getByLabelText("header");
    expect(navbar).toBeInTheDocument();
  });

  test("Navigate to home on Logo click", () => {
    const navbarLogo = screen.getByLabelText("navbar-logo");
    userEvent.click(navbarLogo);
    expect(screen.getByTestId("navbar-location-display")).toHaveTextContent(
      "/"
    );
  });
});
