import "./App.css";

import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductPage from "./Components/ProductPage";
import { useState } from "react";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import About from "./Components/About";

function App() {
  const [state, setState] = useState([]);
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const deletecart = (eve) => {
    setProduct(product.filter((item) => item.id !== eve));
  };

  const hook = (product) => setProduct((prevState) => [...prevState, product]);
  const book = (product) => setProduct((prevState) => [...prevState, product]);

  return (
    <BrowserRouter>
      <div className="container">
        <Header
          productAdded={product}
          inputFill={(search) => setSearch(search)}
        />
        <Switch>
          <Route exact path="/" component={MainContent}>
            <MainContent
              changeState={(state) => setState(state)}
              copyProduct={hook}
              searchterm={search}
            />
          </Route>
          <Route path="/product" component={ProductPage}>
            <ProductPage isClicked={state} copyProduct={book} />
          </Route>
          <Route path="/cart" component={Cart}>
            <Cart isAdded={product} cancel={deletecart} />
          </Route>
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
