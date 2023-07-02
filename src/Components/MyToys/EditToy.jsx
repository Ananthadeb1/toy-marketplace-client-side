import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditToy = () => {
  const toy = useLoaderData();
  console.log("toy" ,toy)
  const {
    _id,
    image,
      name,
      seller_name,
      seller_email,
      sub_category,
      quantity,
      price,
    product_description,
  } = toy;
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newDescription = form.product_description.value;
    const priceText = form.price.value;
    const newPrice = parseFloat(priceText);
    const newQuantity = form.quantity.value;
    const newData = {
      quantity : newQuantity,
      price:newPrice,
      product_description: newDescription,
    };
    fetch(`https://toy-house-server-site-assignment-11-fucdnm1z5-ananthadeb1.vercel.app/mytoys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>=0) {
          toast.success("Update Successful", {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });
          navigate("/mytoys");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 className="font-bold text-4xl underline text-orange-600 my-3">
        Edit Your Toy
      </h1>
      <form onSubmit={handleFormSubmit}>
        <label className="font-semibold" htmlFor="">
            Description: 
        </label>
        <textarea
          name="product_description"
          defaultValue={product_description}
          id=""
          cols="30"
          rows="10"
          className="border border-gray-400 block w-2/4 mx-auto px-3"
        ></textarea>
        <div className="flex justify-between mt-2">
            <label className="font-semibold" htmlFor="">
                Quantity:
            </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            defaultValue={quantity}
            className="block py-2.5 px-2 w-[45%] text-sm text-gray-900 bg-transparent border-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          <label htmlFor="" className="font-semibold">
            price:
          </label>
          <input
            type="text"
            name="price"
            id="price"
            defaultValue={price}
            className="block py-2.5 px-2 w-[45%] text-sm text-gray-900 bg-transparent border-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Edit Price"
            required
          />
        </div>
        <button
          type="submit"
          className="my-3 inline-block px-6 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditToy;
