import "./App.css";
import Login from "./pages/login";
import Reading from "./pages/reading";
import Vocabulary from "./pages/vocabulary";
import Statistics from "./pages/statistics";
import Ebook from "./pages/ebook";
import Upgrade from "./pages/upgrade";
import Video from "./pages/video";
import Articles from "./pages/articles";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Index from "./pages";
import Setting from "./pages/setting";
import OnBoardScreen from "./pages/onboardscreen";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff5733",
          colorTextDisabled: "#ff5733",
          colorText: "#fff",
        },
        components: {
          Pagination: {
            itemActiveColorDisabled: "#000",
          },
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="onboard" element={<OnBoardScreen />} />
          <Route path="/home" element={<Index />}>
            <Route index element={<Ebook />} />
            <Route path="reading" element={<Reading />} />
            <Route path="vocabulary" element={<Vocabulary />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="articles" element={<Articles />} />
            <Route path="upgrade" element={<Upgrade />} />
            <Route path="video" element={<Video />} />
            <Route path="flashcard/setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
