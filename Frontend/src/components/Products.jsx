import { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { CoffeeStateContext } from "../Context/CoffeeContext";

const Products = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  const { allCoffees } = useContext(CoffeeStateContext);

  console.log(allCoffees);

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
