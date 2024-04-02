import React, { useState } from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";

function App() {
  const [showLogo, setShowLogo] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const cryptoAddress = "CGQwZ8U3rLU1iWVZjm4hsJTSLbkT2eLKC5LWfaZuwRVP";

  setTimeout(() => {
    setShowLogo(true);
  }, 500);

  setTimeout(() => {
    setShowButtons(true);
  }, 1500);

  const handleCryptoAddressClick = () => {
    const raydiumSwapURL = `https://raydium.io/swap/?inputCurrency=sol&outputCurrency=${encodeURIComponent(
      cryptoAddress
    )}&fixed=in`;
    window.open(raydiumSwapURL, "_blank");
  };

  return (
    <div className="container">
      <CSSTransition
        in={showLogo}
        timeout={1000}
        classNames="logo"
        unmountOnExit
      >
        <div className="logo-wrapper">
          <img
            src={require("./solaCola1.png")}
            alt="Logo"
            className="logo-img"
          />
        </div>
      </CSSTransition>
      <div className="crypto-address" onClick={handleCryptoAddressClick}>
        <span className="crypto-address-label">Crypto Address:</span>
        <p>CGQwZ8U3rLU1iWVZjm4hsJTSLbkT2eLKC5LWfaZuwRVP</p>
      </div>
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
            className="link-button"
          >
            <button>
              <i className="fab fa-twitter"></i> Twitter
            </button>
          </a>
          <a
            href="https://t.me/solacolacto"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            <button>
              <i className="fab fa-telegram"></i> Telegram
            </button>
          </a>
          <a
            href="https://dexscreener.com/solana/73xdr7mzayhsfga6qqig5u2m2u2htnwxtbyj2xawm4mt"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            <button>
              <i className="fas fa-chart-line"></i> Dexscreener
            </button>
          </a>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
