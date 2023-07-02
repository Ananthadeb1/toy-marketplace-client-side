import React from 'react';
import { Link } from 'react-router-dom';

const MySingleToy = ({ myToy,handleDelete }) => {
    const { _id, name, sub_category,price,  } = myToy;

    const deleteToy = (id) => {
        handleDelete(id);
    }
    return (
        <tr className='text-left'>
            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {name}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {sub_category}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {price}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <Link
                    to={`/mytoys/${_id}`}
                    className="text-green-500 hover:text-green-700"
                >
                    Edit
                </Link>
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <Link className="text-red-500 hover:text-red-700"
                    onClick={() => deleteToy(_id)}
                >
                    Delete
                </Link>
            </td>
        </tr>
    );
};

export default MySingleToy;