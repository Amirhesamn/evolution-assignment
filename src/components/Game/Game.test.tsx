import { describe, expect, it, vi } from "vitest";
import { render, screen } from "../../test/test-utils";
import Game from "./Game";

describe("Game component test", () => {
  const level = 1;
  const socket = new WebSocket("wss://hometask.eg1236.com/game-pipes/");

  it("It should render Game component", async () => {
    render(<Game socket={socket} level={level} onReset={vi.fn()} />);
  });
  it("When a cell gets rotated , the next pipe should be rendered correctly", async () => {
    const level = 1;
    const socket = new WebSocket("wss://hometask.eg1236.com/game-pipes/");
    render(<Game socket={socket} level={level} onReset={vi.fn()} />);

    const samplePipe = "┗"
    const renderedPipe = screen.queryAllByRole("button")
    console.log(renderedPipe);
    
  });
});
