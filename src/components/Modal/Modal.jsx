import PropTypes from "prop-types";
import "./modal.scss";
import closeLogo from "../../assets/icons/close.svg";
const Modal = ({
  closeModal,
  isModalOpen,
  editValues,
  handleEditChange,
  submitChanges,
}) => {
  return (
    <div className={`modal ${isModalOpen ? "modal-open" : "modal-close"}`}>
      <form onSubmit={submitChanges}>
        <div className="product-number">
          <label htmlFor="product-number">Артикул</label>
          <input
            id="product-number"
            type="text"
            // placeholder="Артикул"
            name="productNumber"
            defaultValue={editValues.productNumber}
            onChange={handleEditChange}
          />
        </div>
        <div className="brand">
          <label htmlFor="brand">Бренд</label>
          <input
            id="brand"
            type="text"
            // placeholder="Бренд"
            name="brand"
            defaultValue={editValues.brand}
            onChange={handleEditChange}
          />
        </div>
        <div className="price">
          <label htmlFor="price">Цена</label>
          <input
            id="price"
            type="text"
            // placeholder="Цена"
            name="price"
            defaultValue={editValues.price}
            onChange={handleEditChange}
          />
        </div>
        <div className="discount">
          <label htmlFor="discount">Цена со скидкой</label>
          <input
            type="text"
            id="discount"
            // placeholder="Цена со скидкой"
            name="discountPercentage"
            defaultValue={editValues.discountPercentage}
            onChange={handleEditChange}
          />
        </div>
        <div className="submit">
          <button type="submit">Сохранить</button>
        </div>
        <button onClick={() => closeModal} className="close-btn">
          <img src={closeLogo} alt="" />
        </button>
      </form>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  isModalOpen: PropTypes.bool,
  editValues: PropTypes.object,
  handleEditChange: PropTypes.func,
  submitChanges: PropTypes.func,
};

export default Modal;
