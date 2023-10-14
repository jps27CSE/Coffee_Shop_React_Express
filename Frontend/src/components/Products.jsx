import Product from "./Product";

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-2 gap-2 ">
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default Products;
