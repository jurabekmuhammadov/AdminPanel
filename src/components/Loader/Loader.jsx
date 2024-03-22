import { css } from "@emotion/react";
import { ClockLoader } from "react-spinners";
import PropTypes from "prop-types";
import "./loader.scss";

const override = css`
  display: "block",
  margin: "0 auto",
  borderColor: "red",
`;
const Loader = ({ isLoading }) => {
  return (
    <div
      className={`${isLoading ? "loading-true" : "loading-false"}`}
      id="loader"
    >
      <ClockLoader
        color="#5B5CE2"
        loading={isLoading}
        cssOverride={override}
        size={80}
        speedMultiplier={1}
      />
      <span>Loading...</span>
    </div>
  );
};
Loader.propTypes = {
  isLoading: PropTypes.bool,
};

export default Loader;
