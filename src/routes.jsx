import Home from "./pages/Home";
import Map from "./pages/Map"
import RegisterCompany from "./pages/RegisterCompany";
import RegisterProduct from "./pages/RegisterProduct";
import { Routes, Route } from "react-router-dom";
import ListProducts from "./pages/ListProducts";

const Router = () => {
  return (
      <Routes>
        <Route exact path="/map" element={<Map />} />

        <Route exact path="/registercompany" element={<RegisterCompany />}/>

        <Route exact path="/registerproduct" element={<RegisterProduct />}/>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/listproducts" element={<ListProducts />}/>
      </Routes>
  );
};

export default Router;
