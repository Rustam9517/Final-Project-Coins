import React, { useEffect, useState } from "react";
import {
  AddButton,
  AdminBlock,
  AdminCoins,
  AdminMain,
  CoinContent,
  CoinsListMain,
  CoinText,
  ControlButtons,
} from "./adminStyles";
import { connect } from "react-redux";
import { Search } from "../SearchBar/SearchBarStyles";
import { Link } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";
import { fetchFilterCoins, fetchProducts } from "../../redux/actions";

const AdminPanel = (props) => {
  const [tokenCheck, setTokenCheck] = useState(false);
  const [input, setInput] = useState("");
  useEffect(() => {
    props.dispatch(fetchFilterCoins(input));
    props.dispatch(fetchProducts());
    const get = localStorage.getItem("access_token");
    const login = localStorage.getItem("login");
    fetch(`http://localhost:3001/checkToken?login=${login}`)
      .then((res) => res.json())
      .then((res) => {
        if (get === res[0].token && res[0].role === "Admin") {
          setTokenCheck(true);
        }
      });
  }, []);
  const searchHandler = (e) => {
    e.preventDefault();
    props.dispatch(fetchFilterCoins(input));
  };
  const deleteHandler = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("id");
    fetch(`http://localhost:3001/delete`, {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(props.dispatch(fetchProducts()));
  };
  const { coins, search } = props;
  const coinSearch = search || search === [] ? search : coins;
  const CoinsBlock = tokenCheck
    ? coinSearch
      ? coinSearch.map((el) => {
          return (
            <AdminCoins key={el.id}>
              <img src={el.imgFrontUrl} alt="" />
              <CoinText>
                <h3>{el.name}</h3>
                <p>{el.short}</p>
              </CoinText>
              <ControlButtons>
                <Link
                  to={{
                    pathname: "/edit",
                    state: {
                      id: el.id,
                      coinName: el.name,
                      faceValue: el.denomination,
                      year: el.date,
                      price: el.price,
                      country: el.country,
                      metal: el.composition,
                      shortDesc: el.short,
                      description: el.information,
                      quality: el.quality,
                      weight: el.weight,
                      imgFront: el.imgFrontUrl,
                      imgBack: el.imgBackUrl,
                    },
                  }}
                >
                  Edit
                </Link>
                <a href={" #"} id={el.id} onClick={deleteHandler}>
                  Delete
                </a>
              </ControlButtons>
            </AdminCoins>
          );
        })
      : null
    : null;
  return (
    <AdminMain>
        <AdminBlock>
          <h2>Admin panel</h2>
          <Search>
            <input
              type="search"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <a href={" #"} onClick={searchHandler}>
              Search
            </a>
          </Search>
          <AddButton>
            <Link to={"/addCoin"}>
              <span>+</span> Add a new coin
            </Link>
          </AddButton>
          <CoinsListMain>
            <CoinContent>{CoinsBlock}</CoinContent>
          </CoinsListMain>
        </AdminBlock>
    </AdminMain>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.user.user,
    coins: state.coins.items,
    search: state.search.items,
  };
};
export default connect(mapStateToProps)(AdminPanel);
