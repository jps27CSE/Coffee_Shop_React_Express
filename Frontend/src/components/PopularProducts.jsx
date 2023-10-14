import { Link } from "react-router-dom";
import Products from "./Products";

const PopularProducts = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mt-5">Our Popular Products</h1>
      <Link to="/addCoffee">
        <button className="btn btn-primary mt-3">Add Products</button>
      </Link>
      <Products />
    </div>
  );
};

export default PopularProducts;
