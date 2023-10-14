import image from "../assets/images/1.png";

const Product = () => {
  return (
    <div className="mt-5 mb-5 mr-5">
      <div className="w-[550px] h-[250px] rounded-lg shadow-lg flex flex-row ">
        <div className="my-auto">
          <img src={image} alt="" />
        </div>
        <div className=" mx-auto my-auto ">
          <h3 className="mb-2">
            <span className="font-bold ">Name:</span> Americano Coffe
          </h3>
          <h3 className="mb-2">
            <span className="font-bold">Chef:</span> Mr. Matin Paul
          </h3>
          <h3 className="mb-2">
            <span className="font-bold">Price:</span> 600 Taka
          </h3>
        </div>
        <div className=" mx-auto my-auto flex flex-col ">
          <button className="btn btn-primary mb-2">View</button>
          <button className="btn btn-primary  mb-2">Edit</button>
          <button className="btn btn-primary  mb-2">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
