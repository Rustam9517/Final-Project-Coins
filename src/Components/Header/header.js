import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  .homepage {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 50px;
    line-height: 59px;
    a {
      font-family: "Shrikhand", cursive;
      text-decoration: none;
      color: black;
    }
  }
  .admin {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 109%;
    a {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      padding: 10px 15px;
      color: black;
      border: 1px solid black;
      border-radius: 8px;
      margin-bottom: 5px;
      text-align: center;
      &:hover {
        background-color: blueviolet;
        color: white;
        border: 1px solid white;
      }
    }
    p {
      text-align: center;
      padding-top: 5px;
    }
  }
`;
const HeaderBlock = styled.div`
  width: 95%;
  padding-bottom: 50px;
  padding-top: 20px;
  margin: 0 auto;
`;
const Header = (props) => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const get = localStorage.getItem("access_token");
  const role =  window.localStorage.getItem('role');
  useEffect(() => {
    if (localStorage.getItem("access_token")) setIsLoggedOut(true);
  }, []);
  const logOutHandler = () => {
    localStorage.clear();
    setIsLoggedOut(false);
  };

  return (
    <HeaderBlock>
      <List>
        <li className={"homepage"}>
          <Link to="/">Coins Wiki</Link>
        </li>
        <li className={"admin"}>
          <Link
            to={{
              pathname: get ? role==='Admin'?"/adminPanel":"/profile": "/login",
            }}
          >
            {get ? localStorage.getItem("login") : "Log In"}
          </Link>
          {isLoggedOut ? (
            <Link to={"/"} onClick={logOutHandler}>
              Log Out
            </Link>
          ) : null}
        </li>
      </List>
    </HeaderBlock>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    login: state.user.item,
  };
};
export default connect(mapStateToProps)(Header);
