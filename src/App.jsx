import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import MainLayout from "./Layout/MainLayout";
import Work from "./Pages/Work";
import Services from "./Pages/Services";
import About from "./Pages/About";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/:slug" element={<Services />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
