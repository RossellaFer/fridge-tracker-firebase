import "../App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import App from "../App";

function PrivateRouter() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<App />} />
        </Routes>
      </Router>
    </div>
  );
}
export default PrivateRouter;
