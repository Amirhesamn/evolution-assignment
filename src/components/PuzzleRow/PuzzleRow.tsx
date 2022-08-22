import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function PuzzleRow({ children }: Props) {
  return <div className="flex">{children}</div>;
}
