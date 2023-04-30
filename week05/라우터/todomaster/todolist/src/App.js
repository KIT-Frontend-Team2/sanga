import logo from "./logo.svg";
import "./App.css";
import router from "./routes/routing";
import { BrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import WebPage from "./pages/main";
import WebToonPage from "./pages/webtoon/webtoon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebPage />} />
        <Route path="/web/:webId" element={<WebToonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
