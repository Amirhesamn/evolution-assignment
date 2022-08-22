import { useEffect } from "react";
import { setInitialMap } from "../redux/mapSlice";
import { useAppDispatch } from "../redux";
const useMap = (socket: WebSocket, level: number) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    //SET CONNECTION
    socket.onopen = () => {
      socket.send(`new ${level}`);
      socket.send("map");
      socket.onmessage = (event) => {
        const map = event.data
          .split("\n")
          .slice(1, -1)
          .map((item: string) => item.split(""));
        dispatch(setInitialMap(map));
      };
    };

    socket.onerror = (event) => {
      console.log(event);
    };
  }, [dispatch, level, socket]);

  const reset = () => {
    setInitialMap([])
  }

  return {reset}
};

export default useMap;
