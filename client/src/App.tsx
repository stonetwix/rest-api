import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminEditDetails from "./components/Admin/AdminEditDetails";
import AdminList from "./components/Admin/AdminList";
import Footer2 from "./components/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";
import AddNewProduct from "./components/Admin/AddNewProduct";

function App() {
  return (
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={AdminList} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/add-product" component={AddNewProduct} />
          <Route path="/edit-product/:id" component={AdminEditDetails} />
        </Switch>
        <Footer2 />
      </Router>
  );
}

export default App;
