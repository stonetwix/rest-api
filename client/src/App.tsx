import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminEditDetails from "./componenets/Admin/AdminEditDetails";
import AdminList from "./componenets/Admin/AdminList";
import Footer2 from "./componenets/Footer";
import ProductDetails from "./componenets/ProductDetails/ProductDetails";
import ScrollToTop from "./componenets/ScrollToTop";
import AddNewProduct from "./componenets/Admin/AddNewProduct";

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
