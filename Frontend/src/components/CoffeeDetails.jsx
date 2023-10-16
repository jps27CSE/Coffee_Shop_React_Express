import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CoffeeDetails = () => {
  const params = useParams();
  const [coffee, setCoffee] = useState({});
  const [loading, setLoading] = useState(true);

  const { category, chef, details, name, photo, supplier, taste } = coffee;

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://backend-9fe3gaoq2-jps27cses-projects.vercel.app/coffee/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCoffee(data);
        setLoading(false);
      });
  }, [params]);

  return (
    <div className="max-w-6xl mx-auto mb-10 mt-10">
      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={photo} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <span className="font-bold">Name: </span>
              {name}
            </h2>
            <p>
              <span className="font-bold">Details: </span>
              {details}
            </p>
            <p>
              <span className="font-bold">Category: </span>
              {category}
            </p>
            <p>
              <span className="font-bold">Chef: </span>
              {chef}
            </p>
            <p>
              <span className="font-bold">Supplier: </span>
              {supplier}
            </p>
            <p>
              <span className="font-bold">Taste: </span>
              {taste}
            </p>
            <div className="card-actions justify-end">
              <Link to="/">
                <button className="btn btn-primary">Go Back</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoffeeDetails;
