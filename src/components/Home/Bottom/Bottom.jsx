import { Link } from "react-router-dom";
import "./bottom.scss";
import plusLogo from "../../../assets/icons/plus.svg";
const Bottom = () => {
  return (
    <section id="bottom">
      <Link className="add-btn" to={"/add"}>
        {" "}
        <img src={plusLogo} alt="" />
        Новый товар
      </Link>
      <span>© Jurabek 2024</span>
    </section>
  );
};

export default Bottom;
