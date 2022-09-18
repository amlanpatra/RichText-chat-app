import "./styles/messageLayout.css";
import { useState, useEffect } from "react";
function Messagelayout() {
  const [isBold, setisBold] = useState(false);
  const [isItalic, setisItalic] = useState(false);
  const [isStrikethrough, setisStrikethrough] = useState(false);

  const style = {
    "background-color": "black",
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="text-formatting">
          <span className="boldItaStr">
            <span
              className="bold formatter"
              onClick={() => setisBold(!isBold)}
              style={isBold ? style : {}}
            >
              <i class="bi bi-type-bold fa-sm"></i>
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
          </span>
          {/* <span className="divider"></span> */}
          <span className="hyperlink">
            <i class="bi bi-link-45deg"></i>
          </span>
          {/* <span className="divider"></span> */}

          <span className="list-menu">
            <span className="formatter">
              <i class="bi bi-list-ol"></i>
            </span>
            <span className="formatter">
              <i class="bi bi-list-ul"></i>
            </span>
          </span>

          {/* <span className="divider"></span> */}

          <span className="blockquote">
            <span className="formatter">
              <i class="bi bi-text-left"></i>
            </span>
          </span>

          {/* <span className="divider"></span> */}

          <span className="codes">
            <span className="code-snippt">
              <span className="formatter">
                <i class="bi bi-code-slash"></i>
              </span>
            </span>
            <span className="code-block">
              <span className="formatter">
                <i class="bi bi-file-code"></i>
              </span>
            </span>
          </span>
        </div>

        <div className="input-container">
          <div>
            <input
              type="text"
              className="messageArea"
              placeholder="Chat comes here..."
            />
          </div>
        </div>

        <div className="bottom-bar">
          <span className="plus">
            <span className="formatter">
              <i class="bi bi-plus-circle"></i>
            </span>
          </span>
          <span className="divider"></span>
          <span className="emojiSymbol">
            <span className="formatter">
              <i class="bi bi-emoji-smile"></i>
            </span>
          </span>
          <span className="mention">
            <span className="formatter">
              <i class="bi bi-at"></i>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Messagelayout;
