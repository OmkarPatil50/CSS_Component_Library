import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import { AlertDoc } from "./Documentation/Alert";
import { AvatarDoc } from "./Documentation/Avatar";
import { BadgeDoc } from "./Documentation/Badge";
import { ButtonDoc } from "./Documentation/Button";
import { CardDoc } from "./Documentation/Card";
import { HeadingDoc } from "./Documentation/Heading";
import { ImageDoc } from "./Documentation/Image";
import { TextDoc } from "./Documentation/Text";
import { Components } from "./Pages/Components/Components";
import { Home } from "./Pages/Home/Home";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const componentsArray = [
  "Alert",
  "Avatar",
  "Badge",
  "Button",
  "Card",
  "Heading",
  "Image",
  "Text"
];

export default function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/components" && (
        <Sidebar />
      )}
      <Topbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/avatar" element={<AvatarDoc />} />
        <Route path="/alert" element={<AlertDoc />} />
        <Route path="/card" element={<CardDoc />} />
        <Route path="/badge" element={<BadgeDoc />} />
        <Route path="/button" element={<ButtonDoc />} />
        <Route path="/heading" element={<HeadingDoc />} />
        <Route path="/text" element={<TextDoc />} />
        <Route path="/image" element={<ImageDoc />} />
      </Routes>
    </div>
  );
}
