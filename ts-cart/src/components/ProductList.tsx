import { ReactElement } from "react";
import useProducts from "../hooks/useProducts";
import useCart from "../hooks/useCart";
import { UseProductsContextType } from "../context/ProductsProvider";
import Product from "./Product";

const ProductList = () => {
  const { dispacht, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();
  let pageContent: ReactElement | ReactElement[] = <p>loading ...</p>;
  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);
      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispacht}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }
  const content = <main className="main main--products">{pageContent}</main>;
  return content;
};

export default ProductList;
