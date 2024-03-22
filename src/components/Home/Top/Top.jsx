import PropTypes from "prop-types";
import searchLogo from "../../../assets/icons/search.svg";
import "./top.scss";
const Top = ({ displayedProducts, productsLength, filter, search }) => {
  return (
    <div className="home__top">
      <span
        className={`found__products ${
          displayedProducts.length === 10 ? "none" : "block"
        }`}
      >
        Найденные товары ({displayedProducts.length})
      </span>
      <div className="length">
        <span className="pr__length">Все товары ({productsLength})</span>
      </div>
      <div className="actions">
        <div className="filter">
          <select name="filter" id="filter" onChange={filter}>
            <option value="all" defaultValue>
              All
            </option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragrances</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">Home decoration</option>
          </select>
        </div>
        <div className="search">
          <span className="search__logo">
            <img src={searchLogo} alt="" />
          </span>
          <input type="text" placeholder="Поиск" onChange={search} />
        </div>
      </div>
    </div>
  );
};

Top.propTypes = {
  productsLength: PropTypes.number,
  filter: PropTypes.func,
  search: PropTypes.func,
  displayedProducts: PropTypes.array,
};
export default Top;
