import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CartDetailPage } from "./pages/CartDetailPage/CartDetailPage";
import { CreateProductPage } from "./pages/CreateProductPage/CreateProductPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { SelectProductPage } from "./pages/SelectProductPage/SelectProductPage";
export const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage text="Not found" />} />
          <Route path="/cart-detail" element={<CartDetailPage />} />
          <Route path="/custom-product" element={<CreateProductPage />} />
          <Route path="/add-product" element={<SelectProductPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};
