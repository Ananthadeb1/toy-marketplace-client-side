import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const seller_name = user?.displayName;
  const seller_email = user?.email;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const product_description = form.product_description.value;
    const priceText = form.price.value;
    const ratingText = form.rating.value;
    const price = parseFloat(priceText);
    const rating = parseFloat(ratingText);
    const image = form.image.value;
    const sub_category = form.sub_category.value;
    const quantity = form.quantity.value;
    const service = {
      image,
      name,
      seller_name,
      seller_email,
      sub_category,
      quantity,
      price,
      rating,
      product_description,
    };
    fetch("http://localhost:5000/addtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("toy added successfully");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Helmet>
        <title>Toy Land - Add A Toy</title>
      </Helmet>
      <h1 className="text-center text-5xl font-bold underline text-orange-600 my-6">
        Add Service
      </h1>
      <form onSubmit={handleFormSubmit}>
        <div className="relative z-0 mb-6 w-[80%] md:w-[50%] mx-auto group border-gray-400">
          <input
            type="text"
            name="name"
            id="ToyName"
            className="block mb-2 py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Toy Name"
            required
          />

          <textarea
            rows="10"
            cols="20"
            type="text"
            name="product_description"
            id="product_description"
            className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent mb-2 border-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Write Something About Your toy"
            required
          />

          <input
            type="text"
            name="image"
            id="photoURL"
            className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent mb-2 border-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Toy Photo URL Here"
            required
          />

          <div className="flex justify-between">
            <input
              type="text"
              name="sub_category"
              id="sub-category"
              className="block py-2.5 px-2 w-[45%] text-sm text-gray-900 bg-transparent border-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Input the sub-category of the toy"
              required
            />

            <input
              type="number"
              name="quantity"
              id="quantity"
              className="block py-2.5 px-2 w-[45%] text-sm text-gray-900 bg-transparent border-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Available quantity"
              required
            />
          </div>
          <div className="flex justify-between mt-2">
            <input
              type="text"
              name="rating"
              id="rating"
              className="block py-2.5 px-2 w-[45%] text-sm text-gray-900 bg-transparent border-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Input Rating Out Of 5"
              required
            />

            <input
              type="text"
              name="price"
              id="price"
              className="block py-2.5 px-2 w-[45%] text-sm text-gray-900 bg-transparent border-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Toy price"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddAToy;
