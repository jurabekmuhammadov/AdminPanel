import PropTypes from "prop-types";
const Forms = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="name"
        type="text"
        placeholder="Название"
        required
      />
      <input
        onChange={handleChange}
        name="brand"
        type="text"
        placeholder="Бренд"
        required
      />
      <input
        onChange={handleChange}
        name="productNumber"
        type="text"
        placeholder="Артикул производителя"
        required
      />
      <input
        onChange={handleChange}
        name="description"
        type="text"
        placeholder="Описание"
        required
      />
      <input
        onChange={handleChange}
        name="price"
        type="text"
        placeholder="Цена"
      />
      <input
        onChange={handleChange}
        name="discountPercentage"
        type="text"
        placeholder="Цена со скидкой"
      />
      <button type="submit">Сохранить</button>
      <button
        onClick={() => (window.location.href = "http://localhost:5173")}
        type="button"
      >
        Отмена
      </button>
    </form>
  );
};

Forms.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default Forms;
