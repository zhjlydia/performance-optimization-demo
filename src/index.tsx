import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.less";
import App from "./App";
import reportWebVitals from "@/utils/reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
reportWebVitals();
