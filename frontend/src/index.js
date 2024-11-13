import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'select2/dist/js/select2.min.js';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import CookieConsent from "react-cookie-consent";
import Chatbot from "./components/Chatbot/Chatbot";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <CookieConsent
      location="bottom"
      buttonText="Sure man!!"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
</CookieConsent>
    <Chatbot />
  </>
);

reportWebVitals();
