import PropTypes from "prop-types";
import editLogo from "../../../assets/icons/edit.svg";
import deleteLogo from "../../../assets/icons/delete.svg";
const ProductList = ({ products, handleDelete, handleEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Артикул</th>
          <th>Бренд</th>
          <th>Цена</th>
          <th>Цена со скидкой</th>
        </tr>
      </thead>
      <tbody>
        {products.map((pr, index) => (
          <tr key={index}>
            <th>Товар {pr.id}</th>
            <th>{pr.productNumber}</th>
            <th>{pr.brand}</th>
            <th>{pr.price ? `${pr.price}$` : "Price not available yet"}</th>
            <th>
              {pr.discountPercentage
                ? `${pr.discountPercentage}$`
                : "Discount not available yet"}
            </th>
            <th>
              <button onClick={() => handleEdit(pr.id)}>
                <img src={editLogo} alt="" />
              </button>
              <button onClick={() => handleDelete(pr.id)}>
                <img src={deleteLogo} alt="" />
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
};

export default ProductList;
