import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import SideBar from "./components/SideBar";
import { useState } from "react";
import Loader from "./components/Loader/Loader";

import "./sass/base/_reset.scss"
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <BrowserRouter>
      <SideBar />
      <Loader isLoading={isLoading} />
      <Routes>
        <Route path="/" element={<Home setIsLoading={setIsLoading} />} />
        <Route
          path="/add"
          element={<AddProduct setIsLoading={setIsLoading} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
