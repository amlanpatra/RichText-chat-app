import { useState, useEffect } from "react";

function MessageArea() {
  const [message, setMessage] = useState("");
  const [style, setStyle] = useState({
    bold: "false",
  });

  const [boldText, setboldText] = useState("");

  const codeBlockStyle = {
    display: "block",
    "white-space": "pre",
  };

  // useEffect(() => {
  //   const msg = () => {
  //     console.log(userCode);
  //     // console.log(message);
  //     return (
  //       <span>
  //         <span>this is normal;</span>
  //         <span>
  //           {/* <pre>
  //               <code>{userCode}</code>
  //             </pre> */}

  //           {/* <blockquote>
  //               <p>{userCode}</p>
  //             </blockquote> */}

  //           <code style={codeBlock}>{userCode}</code>

  //           <span> and this is normal</span>
  //         </span>
  //       </span>
  //     );
  //   };
  //   setMessage(msg);
  // }, [userCode]);

  const selectStyleandChange = (e) => {
    if (style.bold == "true") {
      // const txt = e;
      // setboldText(txt);
      const newmsg = () => {
        return (
          <span>
            <span>{message}</span>
            <span>{boldText}</span>
          </span>
        );
      };
      setMessage(e);
    } else if (style.bold == "false") {
      setboldText("");
      setMessage(e);
    }
  };

  return (
    <div>
      <div className="input-block">
        <textarea
          rows="5"
          cols="60"
          type="text"
          onChange={(e) => selectStyleandChange(e.target.value)}
          placeholder="type..."
        />
      </div>
      <div>
        {/* <button onClick={() => setStyle("None")}>Normal</button> */}

        <button
          onClick={() => setStyle(style.bold == "true" ? "false" : "true")}
        >
          Bold
        </button>
        {/* <button onClick={() => setStyle("Italic")}>Italic</button>
        <button onClick={() => setStyle("StrikeThrough")}>StrikeThrough</button>

        <button onClick={() => setStyle("Hyperlink")}>Hyperlink</button>

        <button onClick={() => setStyle("UL")}>Unordered List</button>
        <button onClick={() => setStyle("OL")}>Ordered List</button>

        <button onClick={() => setStyle("BlockQuote")}>BlockQuote</button>
        <button onClick={() => setStyle("CodeSnippet")}>CodeSnippet</button>
        <button onClick={() => setStyle("CodeBlock")}>CodeBlock</button> */}
      </div>
      <div>bold : {style.bold}</div>
      <div className="output-block">{message}</div>
    </div>
  );
}

export default MessageArea;
