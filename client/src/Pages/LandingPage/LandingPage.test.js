/** @jest-environment jsdom */

import { screen, render } from "@testing-library/react";
import LandingPage from ".";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";

describe("LandingPage button", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <MemoryRouter location={history.location} navigator={history}>
        <LandingPage />
      </MemoryRouter>
    );
  });

  test("Play button renders", () => {
    const playBtn = screen.getByLabelText("play-button");
    expect(playBtn).toBeInTheDocument();
  });

  test("Play button on click", () => {
    const playBtn = screen.getByLabelText("play-button");
    userEvent.click(playBtn);
    expect(screen.getByTestId("location-display")).toHaveTextContent("/agree");
  });

  test("Rules button renders", () => {
    const rulesBtn = screen.getByLabelText("how-to-play-button");
    expect(rulesBtn).toBeInTheDocument();
  });

  test("Rules button on click", () => {
    const rulesBtn = screen.getByLabelText("how-to-play-button");
    userEvent.click(rulesBtn);
    expect(screen.getByTestId("location-display")).toHaveTextContent("/rules");
  });
});
