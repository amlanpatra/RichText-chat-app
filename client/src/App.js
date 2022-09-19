import io from "socket.io-client";
import { useEffect, useState } from "react";
import Screen from "./Screen";
// import BoldArr from "./BoldArr";
// import FormatlikeWhatsapp from "./FormatlikeWhatsapp";

const socket = io.connect("http://localhost:3001");

function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div>
      <h1>
        <div>Message Received : {messageReceived}</div>
      </h1>
      <Screen
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default App;
