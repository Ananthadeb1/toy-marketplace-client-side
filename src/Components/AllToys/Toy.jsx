const Toy = ({ toy }) => {
  const { image, name, seller_name ,sub_category,rating,quantity,price} = toy;
  return (
    <tr>
      <th></th>
      <td>{seller_name}</td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td><button className="btn my-2 btn-primary btn-sm"> Details</button></td>
    </tr>
  );
};

export default Toy;
