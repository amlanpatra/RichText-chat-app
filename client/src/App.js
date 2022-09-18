// import io from "socket.io-client";
import { useEffect, useState } from "react";
// import Screen from "./Screen";
import BoldArr from "./BoldArr";
// import FormatlikeWhatsapp from "./FormatlikeWhatsapp";

// const socket = io.connect("http://localhost:3001");

function App() {
  // const [message, setMessage] = useState("");
  // const [messageReceived, setMessageReceived] = useState("");
  // const sendMessage = () => {
  //   socket.emit("send_message", { message });
  // };

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     setMessageReceived(data.message);
  //   });
  // }, [socket]);

  return (
    <div>
      {/* <h1> */}
      <BoldArr />

      {/* </h1> */}
    </div>
    // <div>
    //   <input
    //     placeholder="type..."
    //     onChange={(e) => setMessage(e.target.value)}
    //   ></input>
    //   <button onClick={sendMessage}>Send</button>
    //   <h1>Message : {messageReceived}</h1>
    //   <div>
  );
}

export default App;
