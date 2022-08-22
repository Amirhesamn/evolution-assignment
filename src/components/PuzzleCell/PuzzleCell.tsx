type Props = {
  onRotate: () => void;
  pipe: string;
};

export default function PuzzleCell({ onRotate, pipe }: Props) {
  return (
    <button
      className="flex-wrap outline-none !leading-[1] m-0 cursor-pointer border-[0.05rem] hover:border-emerald-900 p-0 w-10 h-10 text-[2.5rem] border-solid !inline-flex items-center  justify-center"
      onClick={onRotate}
    >
      {pipe}
    </button>
  );
}
