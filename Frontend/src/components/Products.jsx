import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/allCoffees")
      .then((res) => res.json())
      .then((data) => {
        setCoffeeData(data);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-2 gap-2 ">
      {coffeeData.map((coffee) => (
        <Product key={coffee._id} coffee={coffee} />
      ))}
    </div>
  );
};

export default Products;
