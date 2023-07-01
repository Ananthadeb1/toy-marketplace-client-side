import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
  const { _id, name, seller_name ,sub_category,rating,quantity,price} = toy;
  return (
    <tr>
      <th></th>
      <td>{seller_name}</td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td><Link to={`/toy/${_id}`}><button className="btn my-2 btn-primary btn-sm"> Details</button></Link></td>
    </tr>
  );
};

export default Toy;
