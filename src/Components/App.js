import React, { Fragment } from "react";
import Header from "./Header/header";
import MainPage from "./MainPage/MainPage";
import CoinsList from "./CoinList/CoinList";
import CoinPage from "./CoinPage/CoinPage";
import AdvanceSearch from "./SearchBar/AdvanceSearch";
import Login from "./Login/Login";
import AdminPanel from "./AdminPanel/Admin";
import EditCoin from "./EditCoin/EditCoin";
import AddCoin from "./AddCoin/AddCoin";
import { connect } from "react-redux";
import "../style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={"/login"} component={Login} />
          <Fragment>
            <Header />
            <Route path={"/"} exact component={MainPage} />
            <Route key={1} path={"/coinList"} component={CoinsList} />
            <Route key={2} path={"/coinListSearch"} component={CoinsList} />
            <Route path={"/coinPage"} component={CoinPage} />
            <Route path={"/advanceSearch"} component={AdvanceSearch} />
            <Route path={"/adminPanel"} component={AdminPanel} />
            <Route path={"/edit"} component={EditCoin} />
            <Route path={"/addCoin"} component={AddCoin} />
          </Fragment>
        </Switch>
      </Router>
    </div>
  );
};
export default connect()(App);
