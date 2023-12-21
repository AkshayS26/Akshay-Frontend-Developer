// src/components/__tests__/Header.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";

describe("Header", () => {
  test("renders logo image", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logo = screen.getByAltText(/spacex/i);
    expect(logo).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText(/capsules/i)).toBeInTheDocument();
    expect(screen.getByText(/rockets/i)).toBeInTheDocument();
  });
});
