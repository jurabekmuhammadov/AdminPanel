import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductList from "../components/Home/ProductList/ProductList";
import Modal from "../components/Modal/Modal";
import Top from "../components/Home/Top/Top";
import Pagination from "../components/Home/Pagination/Pagination";
import Bottom from "../components/Home/Bottom/Bottom";
import "../sass/pages/_home.scss";
import { Link } from "react-router-dom";

const Home = ({ setIsLoading }) => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editValues, setEditValues] = useState({});
  const [updatedValues, setUpdatedValues] = useState({
    productNumber: "",
    brand: "",
    price: 0,
    discountPercentage: 0,
  });
  const [editId, setEditId] = useState(0);
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const totalPages = Math.ceil(filteredProducts.length / 10);
  const multiplePages = totalPages > 1;
  const startIndex = (page - 1) * 10;
  const endIndex = startIndex + 10;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);
  const search = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchValue) ||
        product.brand.toLowerCase().includes(searchValue)
    );
    setFilteredProducts(filtered);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePage = (type) => {
    if (type === "prev" && page > 1) {
      setPage(page - 1);
    } else if (type === "next" && page < totalPages) {
      setPage(page + 1);
    }
  };

  const filter = (e) => {
    setPage(1);
    setFilterValue(e.target.value);
  };

  async function getProducts() {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/products`);
      setProducts(response.data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleEdit(id) {
    setIsModalOpen(!isModalOpen);
    setEditId(id);
    try {
      const response = await axios.get(
        `http://localhost:3000/products?id=${id}`
      );
      setEditValues(response.data[0]);
      setUpdatedValues(response.data[0]);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      setIsLoading(true);
      try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        getProducts();
        window.location.reload();
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      window.alert("Delete operation cancelled.");
    }
  }

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function submitChanges() {
    try {
      await axios.put(
        `http://localhost:3000/products/${editId}`,
        updatedValues
      );
      getProducts();
      setIsModalOpen(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filtered =
      filterValue !== "all"
        ? products.filter((product) => product.category === filterValue)
        : products;
    setFilteredProducts(filtered);
  }, [products, filterValue]);

  return (
    <section id="home">
      <Modal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        editValues={editValues}
        updatedValues={updatedValues}
        handleEditChange={handleEditChange}
        submitChanges={submitChanges}
      />
      <header>
        <div className="container header__container">
          <h1>Товары</h1>
          <div className="path">
            <Link to={"/"}>Главная / </Link>
            <Link to={"/"}>Товары</Link>
          </div>
        </div>
      </header>
      <div className="home__container">
        <Top
          productsLength={products.length}
          filter={filter}
          search={search}
          displayedProducts={displayedProducts}
        />
        <ProductList
          products={displayedProducts}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <Pagination
          multiplePages={multiplePages}
          page={page}
          handlePage={handlePage}
          totalPages={totalPages}
          setPage={setPage}
        />
      </div>
      <Bottom />
    </section>
  );
};

Home.propTypes = {
  setIsLoading: PropTypes.func,
};

export default Home;
