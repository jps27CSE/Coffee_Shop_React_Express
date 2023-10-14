import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffeeData = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch("http://localhost:3000/addCoffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          Swal.fire("Saved!", "Added SuccessFully", "success");
        }

        form.reset();
      });
  };
  return (
    <div className="max-w-6xl mx-auto mt-5">
      <div className="w-full h-[878px] bg-[#F4F3F0]">
        <div>
          <h1 className="text-4xl font-bold p-10 text-center">
            Add New Coffee
          </h1>
        </div>
        {/* field  */}
        <div>
          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-2 gap-2 ">
              <div>
                <p className="text-xl font-bold p-5">Name</p>
                <input
                  type="text"
                  name="name"
                  className="input p-5 ml-3  w-[500px]"
                  placeholder="Name"
                />
              </div>
              <div>
                <p className="text-xl font-bold p-5">Chef</p>
                <input
                  type="text"
                  name="chef"
                  className="input p-5 ml-3  w-[500px]"
                  placeholder="Chef"
                />
              </div>
              <div>
                <p className="text-xl font-bold p-5">Supplier</p>
                <input
                  type="text"
                  name="supplier"
                  className="input p-5 ml-3  w-[500px]"
                  placeholder="Supplier"
                />
              </div>
              <div>
                <p className="text-xl font-bold p-5">Taste</p>
                <input
                  type="text"
                  name="taste"
                  className="input p-5 ml-3  w-[500px]"
                  placeholder="Taste"
                />
              </div>
              <div>
                <p className="text-xl font-bold p-5 ">Category</p>
                <input
                  type="text"
                  name="category"
                  className="input p-5 ml-3  w-[500px]"
                  placeholder="Category"
                />
              </div>
              <div>
                <p className="text-xl font-bold p-5 ">Details</p>
                <input
                  type="text"
                  name="details"
                  className="input p-5 ml-3  w-[500px]"
                  placeholder="Details"
                />
              </div>
              <div>
                <p className="text-xl font-bold p-5">Photo URL</p>
                <input
                  type="text"
                  name="photo"
                  className="input p-5 ml-3  w-[500px]"
                  placeholder="URL"
                />
              </div>
            </div>
            <input
              type="submit"
              className="btn btn-primary mt-10 ml-28  w-10/12  "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
