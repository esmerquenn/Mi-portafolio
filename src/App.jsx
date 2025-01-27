import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import './App.css'
import MainLayout from "./Layout/MainLayout";
function App() {

  return (
    <>
      <div >
        <Routes>
          <Route path="/" element={<MainLayout/>}>

          <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
