import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import InfoIcon from "@mui/icons-material/Info";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Cart(props) {
  const [age, setAge] = React.useState("");
  const [size, setSize] = useState("");
  const [qty, setQty] = useState("");

  const stuff = props.isAdded;
  var priceTotal = 0;
  for (let i = 0; i < stuff.length; i++) {
    let price = stuff[i].price;
    priceTotal += price;
  }

  return (
    <div className="wrap">
      <div className="cart">
        {stuff.length > 0 ? (
          <div className="top">
            {" "}
            <h1> My Cart</h1>
            <ShoppingCartOutlinedIcon />
          </div>
        ) : (
          <p style={{ fontSize: "45px" }}>
            You haven't Added anything yet &#129335;
          </p>
        )}

        {stuff.map((item) => (
          <div className="food" key={item.id}>
            <hr />
            <div className="ans">
              <div className="cart_img">
                <img src={item.shoes} alt="wahala" />
              </div>
              <div className="each_product">
                <div className="clear">
                  {" "}
                  <h2> {item.name}</h2>
                  <ClearIcon
                    className="cancel"
                    onClick={() => props.cancel(item.id)}
                  />
                </div>
                <div className="details">
                  <h3 className="productprice">
                    <span>$</span>
                    {item.price}{" "}
                  </h3>
                </div>

                <div className="des"> {item.description}</div>

                <TextField
                  id="standard-number"
                  label="Size"
                  type="number"
                  style={{
                    width: "5vw",
                    marginRight: "20px",
                    marginBottom: "10px",
                  }}
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
              </div>
            </div>
          </div>
        ))}
      </div>
      {stuff.length > 0 ? (
        <div className="total">
          <h2>TOTAL</h2>
          <hr />
          <div className="sub-total">
            <h3>Sub-Total</h3>
            <h3 className="productprice">${priceTotal}</h3>
          </div>
          <div className="info">
            <h3>Delivery info</h3>
            <div>
              <InfoIcon />
            </div>
          </div>
          <hr />
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            style={{ marginBottom: "3vh" }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Delivery Option
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Door-Delivery">Door-Delivery</MenuItem>
              <MenuItem value="Standard-Delivery">Drone-Delivery</MenuItem>
              <MenuItem value="Pick-up">Pick-up</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained">CHECK-OUT</Button>
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
