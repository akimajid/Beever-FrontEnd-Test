import React from "react";
import "./App.css";
import KanyeQuoteView from "./component/KanyeQuoteView";
import PersonalQuoteView from "./component/PersonalQuoteView";

function App() {
  return (
    <div className="App">
      <div className="api-links">
        <a href="https://kanye.rest">API SITE</a>
      </div>
      <KanyeQuoteView />
      <PersonalQuoteView />
    </div>
  );
}

export default App;
