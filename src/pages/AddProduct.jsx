import { useEffect, useState } from "react";
import axios from "axios";
import Forms from "../components/AddProduct/Forms";
import { Link } from "react-router-dom";
import "../sass/pages/_add-product.scss";

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    price: 0,
    discountPercentage: 0,
  });

  async function getProducts() {
    try {
      const response = await axios.get(`http://localhost:3000/products`);
      setProducts(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function handleSubmit() {
    try {
      const response = await axios.post("http://localhost:3000/products", {
        ...newProduct,
        id: `${products.length + 1}`,
      });
      window.location.href = "/";
      console.log("Data added successfully:", response.data);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section id="add-product">
      <header>
        <div className="container header__container">
          <h1>Новый товар</h1>
          <div className="path">
            <Link to={"/"}>Главная / </Link>
            <Link to={"/"}>Товары / </Link>
            <Link to={"/"}>Новый товар</Link>
          </div>
        </div>
      </header>
      <Forms handleChange={handleChange} handleSubmit={handleSubmit} />
    </section>
  );
};

export default AddProduct;
