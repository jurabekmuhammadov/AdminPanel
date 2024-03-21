import { useEffect, useState } from "react";
import axios from "axios";
import Forms from "../components/AddProduct/Forms";

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
      console.log("Data added successfully:", response.data);
      window.location.href = "http://localhost:5173";
    } catch (error) {
      console.error("Error adding data:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);
  
  return (
    <div>
      <Forms handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddProduct;
