import React, { useEffect, useState } from "react";
import { Grid } from "react-loader-spinner";
import Toy from "./Toy";

const toys = () => {
  const [loading, setLoading] = useState(false);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-28 h-28 mx-auto my-60">
          <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <h1 className="text-center text-5xl font-bold underline text-orange-600 my-6">
            All toys
          </h1>
          <div className="overflow-x-auto ">
            <table className="table-zebra table-xs w-full text-center  ">
              <thead>
                <tr>
                  <th></th>
                  <th>Seller</th>
                  <th>Toy Name</th>
                  <th>sub Category</th>
                  <th>price</th>
                  <th>Available Quantity</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {toys.map((toy) => (
                  <Toy  key={toy._id} toy={toy}></Toy>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th ></th>
                  <th>Seller</th>
                  <th>Toy Name</th>
                  <th>sub Category</th>
                  <th>price</th>
                  <th>Quantity</th>
                  <th>Details</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default toys;
