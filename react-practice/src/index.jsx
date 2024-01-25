import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/Main.scss";
import Users from "./pages/Users";
import Main from "./pages/Main";
import NoPage from "./pages/NoPage";
import UserInfo from "./pages/UserInfo";
import ToDoPage from "./pages/ToDoPage";
import AlbumPage from "./pages/AlbumPage";

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
        <Route path="users/:id/todos" element={<ToDoPage />} />
        <Route path="albums/:id/photos" element={<AlbumPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
