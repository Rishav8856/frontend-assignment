import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import API from "./API.tsx";

// Mock the API
jest.mock("./API.tsx", () => ({
  getData: jest.fn(),
}));

describe("App Component - Basic Tests", () => {
  it("renders the title correctly", () => {
    render(<App />);
    expect(screen.getByText("SaaS Demo")).toBeInTheDocument();
  });

  it('should render the "Next" button', () => {
    render(<App />);
    expect(screen.getByText("Percentage")).toBeInTheDocument();
  });
});
