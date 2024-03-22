import PropTypes from "prop-types";
import editLogo from "../../../assets/icons/edit.svg";
import deleteLogo from "../../../assets/icons/delete.svg";
import "./product-list.scss";
const ProductList = ({ products, handleDelete, handleEdit }) => {
  return (
    <table id="product-list">
      <tr className="titles">
        <th>Наименование</th>
        <th>Артикул</th>
        <th>Бренд</th>
        <th>Цена</th>
        <th>Цена со скидкой</th>
      </tr>
      {products.map((pr, index) => (
        <tr className="product" key={index}>
          <td className="name" data-cell="name">
            Товар {pr.id}
          </td>
          <td className="product-number" data-cell="product-number">
            {pr.productNumber}
          </td>
          <td className="brand" data-cell="brand">
            {pr.brand}
          </td>
          <td className="price" data-cell="price">
            {pr.price ? `${pr.price}$` : "Price not available yet"}
          </td>
          <td className="discount" data-cell="discount">
            {pr.discountPercentage
              ? `${pr.discountPercentage}$`
              : "Discount not available yet"}
          </td>
          <td className="actions" data-cell="actions">
            <button onClick={() => handleEdit(pr.id)}>
              <img src={editLogo} alt="" />
            </button>
            <button onClick={() => handleDelete(pr.id)}>
              <img src={deleteLogo} alt="" />
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
};

export default ProductList;
