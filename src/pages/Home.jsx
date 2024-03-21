import axios from "axios";
import ProductList from "../components/Home/ProductList/ProductList";
import { useEffect, useState } from "react";
import Modal from "../components/Modal/Modal";
import Top from "../components/Home/Top/Top";
import Pagination from "../components/Home/Pagination/Pagination";
import Bottom from "../components/Home/Bottom/Bottom";

const Home = () => {
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
  const [isLoading, setIsLoading] = useState(false);

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

  // const handleSort = (e) => {
  //   const criteria = e.target.value;
  //   let sortedProductsEndpoint = "http://localhost:3000/products?";
  //   switch (criteria) {
  //     case "priceAsc":
  //       sortedProductsEndpoint += "_sort=rating";
  //       break;
  //     case "priceDesc":
  //       sortedProductsEndpoint += "_sort=rating&_order=desc";
  //       break;
  //     default:
  //       break;
  //   }
  //   axios
  //     .get(sortedProductsEndpoint)
  //     .then((response) => {
  //       setFilteredProducts(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

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
    setIsLoading(true);
    try {
      await axios.put(
        `http://localhost:3000/products/${editId}`,
        updatedValues
      );
      getProducts();
      setIsModalOpen(false);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const filtered =
      filterValue !== "all"
        ? products.filter((product) => product.category === filterValue)
        : products;
    setFilteredProducts(filtered);
  }, [products, filterValue]);

  return (
    <section>
      <Modal
        isModalOpen={isModalOpen}
        editValues={editValues}
        updatedValues={updatedValues}
        handleEditChange={handleEditChange}
        submitChanges={submitChanges}
      />
      <Top
        productsLength={products.length}
        filter={filter}
        search={search}
        displayedProducts={displayedProducts}
        // handleSort={handleSort}
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
      <Bottom />
    </section>
  );
};

export default Home;
