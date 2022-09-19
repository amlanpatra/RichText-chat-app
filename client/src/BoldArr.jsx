import { useState, useEffect } from "react";
import Screen from "./Screen";
function BoldArr() {
  const [message, setMessage] = useState("");
  const [newmessage, setNewMessage] = useState("");
  const [boldArr, setBoldArr] = useState([]);
  const [isBold, setisBold] = useState(false);

  function formatStr(tagOpen, tagClose, arr, str) {
    let finalStr = "";
    str = str + " ";
    var tag = tagClose;
    function changeStrong() {
      if (tag === "<Strong>") {
        tag = tagOpen;
      } else {
        tag = tagClose;
      }
      return tag;
    }

    for (let i = 0; i < str.length; i++) {
      finalStr +=
        arr
          .filter((x) => x.includes(i))
          .reduce((total) => total + changeStrong(), "") + str[i];
    }
    console.log(finalStr); //TODO: comment this
    return finalStr;
  }

  useEffect(() => {
    if (isBold) {
      var last = message.length - 1;
      var newBoldarr = boldArr;
      newBoldarr[newBoldarr.length - 1][1] =
        newBoldarr[newBoldarr.length - 1][1] > last
          ? newBoldarr[newBoldarr.length - 1][1]
          : last;
      setBoldArr(newBoldarr);
    }
    console.log(boldArr);
    // renderMessage();
    const msg = formatStr("<strong>", "</strong>", boldArr, message);
    // setMessage(msg);
    // setBoldArr([]);
  });

  const renderMessage = () => {
    // var txt2 = txt1.slice(0, 3) + "bar" + txt1.slice(3);
    for (var i = 0; i < boldArr.length; i++) {}
  };

  const boldAction = () => {
    if (!isBold) {
      var arr = [message.length, message.length];
      var newBoldarr = boldArr;
      newBoldarr.push(arr);
      setBoldArr(newBoldarr);
      setisBold(true);
    } else {
      if (boldArr.length >= 1) {
        var leftValueOfLastIndex = boldArr[boldArr.length - 1][0];
        var rightValueOfLastIndex = boldArr[boldArr.length - 1][1];
        if (leftValueOfLastIndex == rightValueOfLastIndex) {
          const newBoldarr = boldArr;
          newBoldarr.pop();
          setBoldArr(newBoldarr);
        } else {
          const newBoldarr = boldArr;
          newBoldarr[newBoldarr.length - 1][1] = rightValueOfLastIndex + 1;
          setBoldArr(newBoldarr);
        }
      }
      setisBold(false);
    }
  };

  const italicAction = () => {};

  return (
    <div>
      {/* <div>
        <div className="input-block">
          <textarea
            rows="5"
            cols="60"
            type="text"
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="type..."
          />
          <button onClick={boldAction}>Bold</button>
        </div>

        <div>isBold : {isBold ? "True" : "False"}</div>
        <div>Message : {message}</div>
        <div>NewMessage : {newmessage}</div>
      </div> */}
      <Screen message={message} />
    </div>
  );
}

export default BoldArr;
