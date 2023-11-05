import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import OrderPage from "../pages/OrderPage";
import Homepage from "../pages/HomePage";

const PageContent = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/OrderPage" exact>
            <OrderPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default PageContent;
