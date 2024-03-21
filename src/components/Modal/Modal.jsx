import PropTypes from "prop-types";
import "./modal.scss";
const Modal = ({
  isModalOpen,
  editValues,
  handleEditChange,
  submitChanges,
}) => {
  return (
    <div className={`modal ${isModalOpen ? "modal-open" : "modal-close"}`}>
      <form onSubmit={submitChanges}>
        <input
          type="text"
          placeholder="Артикул"
          name="productNumber"
          defaultValue={editValues.productNumber}
          onChange={handleEditChange}
        />
        <input
          type="text"
          placeholder="Бренд"
          name="brand"
          defaultValue={editValues.brand}
          onChange={handleEditChange}
        />
        <input
          type="text"
          placeholder="Цена"
          name="price"
          defaultValue={editValues.price}
          onChange={handleEditChange}
        />
        <input
          type="text"
          placeholder="Цена со скидкой"
          name="discountPercentage"
          defaultValue={editValues.discountPercentage}
          onChange={handleEditChange}
        />
        <button type="submit">Submit changes</button>
      </form>
      <button onClick={() => !isModalOpen} className="close-btn">
        Close
      </button>
    </div>
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool,
  editValues: PropTypes.object,
  handleEditChange: PropTypes.func,
  submitChanges: PropTypes.func,
};

export default Modal;
