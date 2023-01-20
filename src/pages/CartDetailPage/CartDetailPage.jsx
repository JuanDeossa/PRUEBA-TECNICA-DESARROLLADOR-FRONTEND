import { CartList } from "../../components/CartList/CartList";
import { Header } from "../../components/Header/Header";
import { ProductDetailModal } from "../../components/Modals/ProductDetailModal/ProductDetailModal";

export const CartDetailPage = () => {
  return (
    <div>
      <Header />
      <CartList />
      <ProductDetailModal />
    </div>
  );
};
