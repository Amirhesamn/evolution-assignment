import { describe, expect, it, vi } from "vitest";
import { render, screen } from "../../test/test-utils";
import Levels from "./Levels";

describe("Level component test", () => {
  it("It should render Level component and 6 buttons of level", async () => {
    const levels = ["1", "2", "3", "4", "5", "6"];

    render(<Levels onSelect={vi.fn()} />);
    const buttons = screen.queryAllByRole("button");

    buttons.forEach((btn: any, index: number) => {
      expect(btn).toHaveTextContent(levels[index]);
    });
    //
    // for (let i = 0; i <= levels.length; i++) {
    //   const actionButton = buttons.filter(
    //     (btn: any) => parseInt(btn.textContent) === levels[i]
    //   );
    //   fireEvent.click(actionButton[0]);
    //   const heading = screen.getByText(/The current level/i);
    //   await waitFor(() => expect(heading).toBeInTheDocument());
    //   expect(heading.textContent).toBe(`The current level: ${levels[i]}`);
    // }
  });
});
