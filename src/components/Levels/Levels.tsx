type Props = {
    onSelect: (level: number) => void;
  };
  
  export default function Levels({ onSelect }: Props) {
    return (
      <div className="flex flex-col justify-center items-center ">
        <h1 className="font-bold mb-4 text-4xl">Select the level</h1>
        <div className="flex justify-center items-center">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <button
                key={index}
                className="mx-1 p-6 outline-none  m-0 cursor-pointer border-[0.5px] hover:border-emerald-900  w-9 h-9 text-4xl border-solid inline-flex items-center justify-center"
                onClick={() => onSelect(index + 1)}
              >
                <span>{index + 1}</span>
              </button>
            ))}
        </div>
      </div>
    );
  }
  