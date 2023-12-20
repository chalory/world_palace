import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import Booking  from "../components/Booking";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => (
          <Route
            key={routeItem.component}
            path={routeItem.path}
            exact={routeItem.exact}
            component={lazy(() => import(`../pages/${routeItem.component}`))}
          />
        ))}
        <Route path="/book" component={Booking} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;