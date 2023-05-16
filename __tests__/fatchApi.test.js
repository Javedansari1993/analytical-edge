import React from "react";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../src/App";
import Pagination from "../src/components/Pagination";

const setCurrentPageMock = jest.fn()

//Default Selection
it("Pagination renders properly", () => {
  render(<Pagination currentPage={1} setCurrentPage={setCurrentPageMock} totalPage={1} />);
});

