import { Link } from "react-router-dom";

const Bottom = () => {
  return (
    <section id="bottom">
      <Link to={"/add"}>Новый товар</Link>
    </section>
  );
};

export default Bottom;
