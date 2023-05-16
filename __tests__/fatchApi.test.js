import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SearchBar } from "../components/SearchBar";
import App from "../src/App";
import Pagination from "../src/components/Pagination";

const setCurrentPageMock = jest.fn()

it("App renders without crash", () => {
  render(<App />);
});

//Default Selection
it("Pagination renders properly", () => {
  render(<Pagination currentPage={1} setCurrentPage={setCurrentPageMock} totalPage={1} />);
});

