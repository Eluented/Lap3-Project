/** @jest-environment jsdom */

import { screen, render } from "@testing-library/react";
import ResultsPage from ".";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";

describe("ResultsPage button", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <MemoryRouter location={history.location} navigator={history}>
        <ResultsPage />
      </MemoryRouter>
    );
  });

  test("Play again button renders", () => {
    const playAgainBtn = screen.getByLabelText("play-again-button");
    expect(playAgainBtn).toBeInTheDocument();
  });

  test("Play again button on click", () => {
    const playAgainBtn = screen.getByLabelText("play-again-button");
    userEvent.click(playAgainBtn);
    expect(screen.getByTestId("location-display")).toHaveTextContent(
      "/settings"
    );
  });
});
