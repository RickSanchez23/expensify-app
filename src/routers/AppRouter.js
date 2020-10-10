import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashboard from "../component/ExpenseDashboard";
import AddExpense from "../component/AddExpense";
import EditExpense from "../component/EditExpense";
import Help from "../component/Help";
import NotFound from "../component/NotFound";
import Header from "../component/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
