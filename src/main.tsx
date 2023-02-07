import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  /* strict mode doesnt work correctly in localhost with supabasejs */
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
