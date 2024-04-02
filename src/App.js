import React, { useState } from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";

function App() {
  const [showLogo, setShowLogo] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  setTimeout(() => {
    setShowLogo(true);
  }, 500);

  setTimeout(() => {
    setShowButtons(true);
  }, 1500);

  return (
    <div className="container">
      <CSSTransition
        in={showLogo}
        timeout={1000}
        classNames="logo"
        unmountOnExit
      >
        <img src={require("./solaCola1.png")} alt="Logo" />
      </CSSTransition>
      <CSSTransition
        in={showButtons}
        timeout={1000}
        classNames="buttons"
        unmountOnExit
      >
        <div className="button-container">
          <a
            href="https://twitter.com/solacolasolana"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Twitter</button>
          </a>
          <a
            href="https://t.me/solacolacto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Telegram</button>
          </a>
          <a
            href="https://dexscreener.com/solana/73xdr7mzayhsfga6qqig5u2m2u2htnwxtbyj2xawm4mt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Dexscreener</button>
          </a>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
