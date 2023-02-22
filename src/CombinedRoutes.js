import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import TablePage from "./Components/pages/TablePage";
import ChartsPage from "./Components/pages/ChartsPage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import DashboardPage from "./Components/pages/DashboardPage";
import Dash2Page from "./Components/pages/Dash2Page";
import ContactPage from "./Components/pages/ContactPage";
import CardPage from "./Components/pages/CardPage";
class CombinedRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={`/`} exact component={Login} key={`/login`} />
          <Route
            path={`/register`}
            exact
            component={Register}
            key={`/register`}
          />
          <Route
            path={`/dashboard`}
            exact
            component={DashboardPage}
            key={`/dashboard`}
          />
          <Route path={`/table`} exact component={TablePage} key={`/table`} />
          <Route
            path={`/charts`}
            exact
            component={ChartsPage}
            key={`/charts`}
          />
          <Route path={`/dash2`} exact component={Dash2Page} key={`/dash2`} />
          <Route
            path={`/contact`}
            exact
            component={ContactPage}
            key={`/contact`}
          />
          <Route path={`/card`} exact component={CardPage} key={`/card`} />
          
        </Switch>
      </Suspense>
    );
  }
}

export default CombinedRoutes;
