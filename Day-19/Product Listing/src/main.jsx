import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { makeServer } from "./server";
import "remixicon/fonts/remixicon.css";
import { FetchProvider } from "./Context/FetchContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import { FilterProvider } from "./Context/FilterContext.jsx";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FetchProvider>
      <CartProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </CartProvider>
    </FetchProvider>
  </React.StrictMode>
);
