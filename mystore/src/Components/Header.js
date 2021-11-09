import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function Header(props) {
  const [showinput, setShowinput] = useState(false);
  const [searchterm, setSearchTerm] = useState("");
  return (
    <nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logo">EtuShoes</div>
      </Link>

      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Our Products</li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li> About us </li>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          {" "}
          <li>contact Us </li>
        </Link>
      </ul>

      <div className="search">
        {showinput ? (
          <TextField
            id="input-with-icon-textfield"
            value={searchterm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              props.inputFill(searchterm);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setSearchTerm("");
                      setShowinput(!showinput);
                    }}
                  />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        ) : (
          <SearchIcon className="sear" onClick={() => setShowinput(true)} />
        )}

        <Link to="/cart" style={{ textDecoration: "none" }}>
          <ShoppingCartIcon
            style={{
              cursor: "pointer",
              marginLeft: "15px",
              color: "rgb(212, 208, 208)",
            }}
          />
          {props.productAdded.length > 0 ? (
            <sup
              style={{
                color: "white",
                position: "absolute",
                padding: "2px",
                borderRadius: "50%",
                backgroundColor: "rgb(228, 179, 88)",
                height: "20px",
                width: "20px",
                textAlign: "center",
                top: "1.6vh",
              }}
            >
              {props.productAdded.length}
            </sup>
          ) : null}
        </Link>
      </div>
    </nav>
  );
}

export default Header;
