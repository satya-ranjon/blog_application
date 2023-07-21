import { BrowserRouter } from "react-router-dom";
import Routers from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <div className=" bg-theme">
        <Routers />
      </div>
    </BrowserRouter>
  );
}
