import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import OrderPage from "../pages/OrderPage";
import Homepage from "../pages/HomePage";
import OrderComplete from "../pages/OrderComplete";

const PageContent = ({ fetchorders, orders, setOrders }) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/pizza" exact>
            <OrderPage
              fetchorders={fetchorders}
              setOrders={setOrders}
              orders={orders}
            />
          </Route>
          <Route path="/order-complete" exact>
            <OrderComplete orders={orders} />
          </Route>

          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default PageContent;
