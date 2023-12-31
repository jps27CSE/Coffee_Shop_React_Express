import { useContext, useEffect } from "react";
import Product from "./Product";
import { CoffeeStateContext } from "../Context/CoffeeContext";

const Products = () => {
  const { allCoffees, setAllCoffees } = useContext(CoffeeStateContext);

  useEffect(() => {
    fetch("https://backend-9fe3gaoq2-jps27cses-projects.vercel.app/allCoffees")
      .then((res) => res.json())
      .then((data) => {
        setAllCoffees(data);
      });
  }, [setAllCoffees]);

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-2 gap-2 ">
      {allCoffees.map((coffee) => (
        <Product key={coffee._id} coffee={coffee} />
      ))}
    </div>
  );
};

export default Products;
