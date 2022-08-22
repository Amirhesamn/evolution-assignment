// import { useSelector, useDispatch } from "react-redux";
import { setMap } from "../../redux/mapSlice";
import { useState } from "react";
import useMap from "../../hooks/useMap";
import useVerify from "../../hooks/useVerify";
import PuzzleRow from "../PuzzleRow";
import PuzzleCell from "../PuzzleCell";
import { useAppDispatch, useAppSelector } from "../../redux";

type Props = {
  level: number;
  socket: WebSocket;
  onReset: () => void;
};

export default function Game({ level = 1, socket, onReset }: Props) {
  //Local state for handling the levels
  //hooks
  useMap(socket, level);
  const { verify } = useVerify(socket);
  const dispatch = useAppDispatch();
  //Global states
  const { map, message } = useAppSelector((state) => {
    const { map, message } = state.map;
    return { map, message };
  });

  const handleRotate = (rowIndex: number, colIndex: number, pipe: string) => {
    dispatch(setMap({ rowIndex, colIndex, pipe }));
  };

  const giveup = () => {
    onReset()
  };

  if (!map) {
    return null;
  }
  return (
    <>
      {socket.readyState === socket.CONNECTING && (
        <p className="text-center">LOADING ...</p>
      )}
      <div className="flex justify-center">
        <h3
          className={`${
            message?.includes("Incorrect") || message?.includes("Only")
              ? "text-red-900"
              : "text-green-900"
          } mb-3`}
        >
          {message}
        </h3>
      </div>
      <div className="w-auto h-auto outline-hidden flex flex-col items-center ">
        {map?.map((row, rowIndex) => (
          <PuzzleRow key={rowIndex}>
            {row.map((pipe, colIndex) => (
              <PuzzleCell
                pipe={pipe}
                key={colIndex}
                onRotate={() => handleRotate(rowIndex, colIndex, pipe)}
              />
            ))}
          </PuzzleRow>
        ))}
      </div>
      <div className="flex justify-center mt-3">
        <button
          onClick={verify}
          className="text-white rounded bg-green-800 p-2 text-center"
        >
          Verify
        </button>
        <button
          onClick={giveup}
          className="text-white rounded bg-red-800 p-2 mx-2 text-center"
        >
          Give Up :(
        </button>
      </div>
    </>
  );
}
