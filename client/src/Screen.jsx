import "./styles/Screen.css";
import { useState, useEffect } from "react";
function Screeen({ message, setMessage, sendMessage }) {
  const [isBold, setisBold] = useState(false);
  const [isItalic, setisItalic] = useState(false);
  const [isStrikethrough, setisStrikethrough] = useState(false);
  // const [isOrderedList, setisOrderedList] = useState(false);
  // const [isUnorderedList, setisisUnorderedList] = useState(false);
  // const [isBlockquote, setisisBlockquote] = useState(false);
  // const [isCodeSnippet, setCodeSnippet] = useState(false);
  // const [isCodeBlock, setCodeBlock] = useState(false);
  // const [message, setMessage] = useState("");

  const style = {
    backgroundColor: "black",
  };

  return (
    <>
      <div></div>

      <div className="main-container">
        <div className="container">
          <div className="text-formatting">
            <span
              className="bold formatter"
              onClick={() => setisBold(!isBold)}
              style={isBold ? style : {}}
            >
              <i class="bi bi-type-bold"></i>
            </span>
            <span
              className="italics formatter"
              onClick={() => setisItalic(!isItalic)}
              style={isItalic ? style : {}}
            >
              <i class="bi bi-type-italic"></i>
            </span>
            <span
              className="strikethrough formatter"
              onClick={() => setisStrikethrough(!isStrikethrough)}
              style={isStrikethrough ? style : {}}
            >
              <i class="bi bi-type-strikethrough"></i>
            </span>

            <span className="divider"></span>

            <span className="hyperlink formatter">
              <i class="bi bi-link-45deg"></i>
            </span>

            <span className="divider"></span>

            <span className="orderedlist formatter">
              <i class="bi bi-list-ol"></i>
            </span>

            <span className="unordered formatter">
              <i class="bi bi-list-ul"></i>
            </span>

            <span className="divider"></span>

            <span className="blockquote formatter">
              <i class="bi bi-text-left"></i>
            </span>

            <span className="divider"></span>

            <span className="code-snippet formatter">
              <i class="bi bi-code-slash"></i>
            </span>

            <span className="code-block formatter">
              <i class="bi bi-file-code"></i>
            </span>
          </div>

          <div className="input-container">
            <div>
              {" "}
              <textarea
                className="messageArea"
                rows="1"
                type="text"
                placeholder="Chat comes here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                // FIXME:onChange
                // must
                // be
                // active
              />
            </div>
          </div>

          <div className="bottom-bar">
            <span className="plus formatter">
              <i class="bi bi-plus-circle"></i>
            </span>

            <span className="divider"></span>

            <span className="emojiSymbol formatter">
              <i class="bi bi-emoji-smile"></i>
            </span>

            <span className="mention formatter">
              <i class="bi bi-at"></i>
            </span>

            <span className="send">
              <button
                className="sendButton"
                onClick={() => {
                  sendMessage();
                  setMessage("");
                }}
              >
                <i>
                  {" "}
                  <span class="sendMsgIcon material-symbols-outlined">
                    send
                  </span>
                </i>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Screeen;
