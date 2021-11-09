import productData from "../Data/productData";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

function MainContent(props) {
  // const {setCounter, couner} = UseContext

  // <Button onClick={setCounter}></Button>
  const carditems = productData
    .filter((val) => {
      if (props.searchterm === "") {
        return val;
      } else if (
        val.name
          .toLocaleLowerCase()
          .includes(props.searchterm.toLocaleLowerCase())
      ) {
        return val;
      } else {
        return props.searchterm === "";
      }
    })
    .map((item) => (
      <div className="card" key={item.id}>
        <div className="card_img">
          <Link
            onClick={() => props.changeState(item.id)}
            to="/product"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <img src={item.shoes} alt="error" />
          </Link>
        </div>

        <div className="card_header">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p className="price">
            {item.price}
            <span>{item.currency}</span>
          </p>

          <Button
            className="btn"
            variant="text"
            onClick={() => {
              props.copyProduct(item);
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    ));

  return (
    <div className="main_content">
      <h3>shoes</h3>
      {carditems}
    </div>
  );
}

export default MainContent;
