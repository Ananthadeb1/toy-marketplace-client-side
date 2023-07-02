import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id,name, image,price,rating,quantity } = toy;
  console.log(toy);
  return (
    <div>
      <div className="card card-compact  bg-gray-300 shadow-xl">
        <figure>
          <img className="max-h-64 w-full m-2 rounded-md"
            src={image}
            alt="toy"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h1><span className="font-semibold text-lg">price: </span><span>${price}</span></h1>
          <h1><span className="font-semibold text-lg">Available:  </span><span>{quantity} pieces</span></h1>
          <h1><span className="font-semibold text-lg">Rating: </span><span>{rating}</span></h1>
          <div className="card-actions justify-end">
            <Link to={`/toy/${_id}`}><button className="btn btn-primary">View details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
