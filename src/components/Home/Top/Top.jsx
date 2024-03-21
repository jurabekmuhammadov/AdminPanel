import PropTypes from "prop-types";
const Top = ({
  // handleSort,
  displayedProducts,
  productsLength,
  filter,
  search,
}) => {
  return (
    <div className="top">
      <div className="length">
        <span>Все товары {productsLength}</span>
      </div>
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
      {/* <div className="sort">
        <select name="sort" id="sort" onChange={handleSort}>
          <option value="" defaultValue>
            Default
          </option>
          <option value="priceAsc">Asc</option>
          <option value="priceDesc">Cheap</option>
        </select>
      </div> */}
      <div className="search">
        <input type="text" placeholder="Поиск" onChange={search} />
        <span
          className={`found__products ${
            displayedProducts.length === 10 ? "none" : "block"
          }`}
        >
          Найденные товары {displayedProducts.length}
        </span>
      </div>
    </div>
  );
};

Top.propTypes = {
  productsLength: PropTypes.number,
  filter: PropTypes.func,
  // handleSort: PropTypes.func,
  search: PropTypes.func,
  displayedProducts: PropTypes.array,
};
export default Top;
