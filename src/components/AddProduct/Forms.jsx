import PropTypes from "prop-types";
import "./forms.scss";
import { Link } from "react-router-dom";
const Forms = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="add-form">
      <div className="main__sec">
        <Link to={"/"} className="back">
          Основные
        </Link>
        <div className="name">
          <label htmlFor="name">Название *</label>
          <input
            id="name"
            onChange={handleChange}
            name="name"
            type="text"
            required
          />
        </div>
        <div className="brand">
          <label htmlFor="brand">Бренд *</label>
          <input
            id="brand"
            onChange={handleChange}
            name="brand"
            type="text"
            required
          />
        </div>
        <div className="product-number">
          <label htmlFor="product-number">Артикул производителя *</label>
          <input
            id="product-number"
            onChange={handleChange}
            name="productNumber"
            type="text"
            required
          />
        </div>
        <div className="desc">
          <label htmlFor="desc">Описание *</label>
          <input
            id="desc"
            onChange={handleChange}
            name="description"
            type="text"
            required
          />
        </div>
        <div className="price">
          <label htmlFor="price">Цена</label>
          <input id="price" onChange={handleChange} name="price" type="text" />
        </div>
        <div className="discount">
          <label htmlFor="discount">Цена со скидкой</label>
          <input
            id="discount"
            onChange={handleChange}
            name="discountPercentage"
            type="text"
          />
        </div>
      </div>
      <div className="bottom">
        <button type="submit" className="save">
          Сохранить
        </button>
        <button
          onClick={() => (window.location.href = "/")}
          type="button"
          className="back"
        >
          Отмена
        </button>
      </div>
    </form>
  );
};

Forms.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default Forms;
