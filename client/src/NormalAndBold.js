import { useState, useEffect } from "react";

function NormalandBold() {
  const [message, setMessage] = useState("");
  const [isBold, setisBold] = useState(false);
  const [newMsg, setnewMsg] = useState("");
  //   const [oldmsg, setOldmsg] = useState("");
  //   const [newPart, setnewPart] = useState("");
  const [formattingState, setformattingState] = useState(false);

  useEffect(() => {
    const oldMsg = message;

    console.log("oldMsg: " + oldMsg);

    const lenOld = oldMsg.length;
    console.log("oldMsg length: " + lenOld);

    console.log("newMsg: " + newMsg);

    const lenNew = newMsg.length;
    console.log("newMsg length: " + lenNew);

    const newPart = oldMsg.slice(lenOld - 1);
    console.log("newpart: " + newPart);

    // console.log(newMsg);

    // if (oldmsg.length === "") {
    // }

    setMessage(newMsg);
  });

  return (
    <div>
      <div className="input-block">
        <textarea
          rows="5"
          cols="60"
          type="text"
          onChange={(e) => setnewMsg(e.target.value)}
          placeholder="type..."
        />
        <button
          onClick={() => {
            setisBold(!isBold);
            setformattingState(!formattingState);
          }}
        >
          Bold
        </button>
      </div>

      <div>isBold : {isBold ? "True" : "False"}</div>
      <div>Message : {message}</div>
    </div>
  );
}

export default NormalandBold;
