import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Product = ({ coffee }) => {
  const { chef, name, photo, _id } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="mt-5 mb-5 mr-5">
      <div className="w-[550px] h-[250px] rounded-lg shadow-lg flex flex-row ">
        <div className="my-auto">
          <img src={photo} alt="" />{" "}
        </div>
        <div className=" mx-auto my-auto ">
          <h3 className="mb-2">
            <span className="font-bold ">Name:</span> {name}
          </h3>
          <h3 className="mb-2">
            <span className="font-bold">Chef:</span> {chef}
          </h3>
          <h3 className="mb-2">
            <span className="font-bold">Price:</span> 600 Taka
          </h3>
        </div>
        <div className=" mx-auto my-auto flex flex-col ">
          <Link to={`/coffee/${_id}`}>
            <button className="btn btn-primary mb-2">View</button>
          </Link>
          <button className="btn btn-primary  mb-2">Edit</button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-primary  mb-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {
  coffee: PropTypes.object,
};
