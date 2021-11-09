import productData from "../Data/productData";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ProductPage(props) {
  const [value, setValue] = useState(3);
  const [size, setSize] = useState("");
  const [qty, setQty] = useState("");

  // console.log(props.isClicked);
  return productData
    .filter((data) => data.id === props.isClicked)
    .map((data) => (
      <div key={data.id} className="productpage">
        <div className="img_container">
          <img src={data.shoes} alt="Wahala" />
        </div>

        <div className="about">
          <h1>{data.name}</h1>
          <p className="productprice">
            <span> $</span>
            {data.price}
          </p>
          <p className="des"> {data.description}</p>

          <p className="location">
            <LocationOnIcon /> {data.location}
          </p>

          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <br />
          <TextField
            id="standard-number"
            label="Size"
            type="number"
            style={{ width: "5vw", marginRight: "20px", marginBottom: "10px" }}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <TextField
            style={{ width: "5vw", marginRight: "20px" }}
            id="standard-number"
            label="Quantity"
            type="number"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
          <br />
          <Button onClick={() => props.copyProduct(data)} variant="contained">
            Add to Cart
          </Button>
        </div>
      </div>
    ));
}

export default ProductPage;
