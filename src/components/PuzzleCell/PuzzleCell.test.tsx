import { describe, expect, it, vi } from "vitest";
import { render, screen } from "../../test/test-utils";
import PuzzleCell from "./PuzzleCell";

describe("PuzzleCell component test", () => {
  it("It should render PuzzleCell component", async () => {
    const char: string = "Sample";

    render(<PuzzleCell onRotate={vi.fn()} pipe={char} />);
    const buttons = screen.getByRole("button");
    expect(buttons).toHaveTextContent(char);
  });
});
