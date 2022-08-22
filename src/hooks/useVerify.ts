import {useAppDispatch , useAppSelector} from "../redux"
import { setMessage } from "../redux/mapSlice";

const useVerify = (socket : WebSocket) => {
  const dispatch = useAppDispatch();

  const rotaionQueue = useAppSelector((state) => state.map.rotaionQueue);

  const verify = () => {
    if (socket.readyState !== socket.OPEN) {
      return;
    }

    if (rotaionQueue.length === 0) {
      dispatch(setMessage("Please make a move first"));
    } else {
      const finalRotations :string = [...rotaionQueue].join("\n");
      socket.send(`rotate ${finalRotations}`);
      socket.send("verify");

      socket.onmessage = (event) => {
        dispatch(setMessage(event.data));
        if (event.data.includes("Incorrect")) {
          socket.close();
        }
      };
    }
  };

  return { verify };
};

export default useVerify;
