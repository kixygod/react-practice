import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/Main.scss";
import Users from "./pages/Users";
import Main from "./pages/Main";
import NoPage from "./pages/NoPage";
import UserInfo from "./pages/UserInfo";

export default function App() {
  useEffect(() => {
    document.title = "Eremin's practice";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="users" element={<Users />} />
        <Route path="/users/:id" element={<UserInfo />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
