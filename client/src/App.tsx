import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calender from "./pages/Calender";
import Documents from "./pages/Documents";
import FAQs from "./pages/FAQs";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
