import { describe, expect, it } from "vitest";
import App from "./App";
import {
  fireEvent,
  render,
  screen,
  userEvent,
  waitFor,
} from "./test/test-utils";

describe("App component test", () => {
  it("It should render Level component", () => {
    const title = "Select the level";
    render(<App />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(title);
  });

  it("It should render Game component if level is selected", async () => {
    const level = "1";
    render(<App />);
    const button = screen.getByText(level);
    await userEvent.click(button);
    const heading = screen.getByText(/The current level/i);
    waitFor(() => expect(heading).toBeInTheDocument());
    expect(heading.textContent).toBe(`The current level: ${level}`);
  });
});
