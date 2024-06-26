import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { AppRouter } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <AppRouter />
  </>
);
