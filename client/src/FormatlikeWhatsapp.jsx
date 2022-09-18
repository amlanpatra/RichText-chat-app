import { useState, useEffect } from "react";
function FormatlikeWhatsapp() {
  const [message, setMessage] = useState("");
  const [newmessage, setNewMessage] = useState("");
  const [isBold, setisBold] = useState(false);

  const boldAction = () => {
    if (!isBold) {
      const editmsg = message + "**";
      setMessage(editmsg);
    }
    setisBold(!isBold);
  };

  //   useEffect(() => {
  //     setMessage(newmessage);
  //   });

  return (
    <div>
      <div className="input-block">
        <textarea
          rows="5"
          cols="60"
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="type..."
        />
      </div>

      <button onClick={boldAction}>Bold</button>
      <div>isBold : {isBold ? "True" : "False"}</div>
      <div>Message : {message}</div>
    </div>
  );
}

export default FormatlikeWhatsapp;
