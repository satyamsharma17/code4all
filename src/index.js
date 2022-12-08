import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home";
import Team from "./pages/team";
import Testimonials from "./pages/testimonials";
import Blog from "./pages/blog";
import Recruitment from "./pages/recruitment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/recruitment" element={<Recruitment />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
