/** @jest-environment jsdom */

import { screen, render } from "@testing-library/react";
import Categories from ".";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

describe("Navbar", () => {
  test("Renders the Categories", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Categories />
        </MemoryRouter>
      </Provider>
    );
    const categories = screen.getByLabelText("Category");
    expect(categories).toBeInTheDocument();
  });
});
