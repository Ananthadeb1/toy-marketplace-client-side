import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import MySingleToy from "./MySingleToy";
import { AuthContext } from "../Provider/AuthProvider";

const MyToys = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/mytoys?email=${user?.email}`, {
        headers: {
          authorization: "Bearer",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
            console.log(data)
          setMyToys(data);
        });
    }
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        console.log(result)
          if (result.isConfirmed) {
              fetch(`http://localhost:5000/mytoys/${id}`, {
                  method: 'DELETE'
              })
                  .then(res => res.json())
                  .then(data => {
                      if (data.deletedCount) {
                          Swal.fire(
                              'Deleted!',
                              'Your review has been deleted.',
                              'success'
                          )
                      }
                      const remaining = myToys.filter(toy => id !== toy._id)
                      setMyToys(remaining);
                  });

          }
      })
  }
  return (
    <>
      <h1 className="text-center text-5xl font-bold underline text-orange-600 my-6">
        My Toys
      </h1>
      {myToys.length ? (
        <>
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="w-full border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          NAME
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Sub Category
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Edit
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {myToys.map((myToy) => (
                        <MySingleToy
                          key={myToy._id}
                          myToy={myToy}
                          handleDelete={handleDelete}
                        ></MySingleToy>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="font-bold text-3xl my-48">
            No toys Were Added By You. Please Add A Toy First.{" "}
          </h1>
        </>
      )}
    </>
  );
};
export default MyToys;
