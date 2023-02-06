import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RankingProvider } from "./context/ranking";
import { AppRouter } from "./router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RankingProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </RankingProvider>
  </React.StrictMode>
);
