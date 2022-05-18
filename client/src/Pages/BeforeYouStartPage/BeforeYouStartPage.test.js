/** @jest-environment jsdom */

import { screen, render } from "@testing-library/react";
import BeforeYouStartPage from ".";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";

describe("BeforeYouStartPage button", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <MemoryRouter location={history.location} navigator={history}>
        <BeforeYouStartPage />
      </MemoryRouter>
    );
  });

  test("Agree button renders", () => {
    const agreeBtn = screen.getByLabelText("agree-button");
    expect(agreeBtn).toBeInTheDocument();
  });

  test("Agree button on click", () => {
    const agreeBtn = screen.getByLabelText("agree-button");
    userEvent.click(agreeBtn);
    expect(screen.getByTestId("location-display")).toHaveTextContent(
      "/settings"
    );
  });
});
