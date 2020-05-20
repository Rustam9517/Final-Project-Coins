import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {loginFetch} from "../../redux/actions";
import {LoginMain, LoginBlock, LoginConfirm} from "./LoginStyle";
import Header from "../Header/header";
import {Link} from "react-router-dom";

const Login = (props) =>{
    const [login,setLogin] = useState('');
    const [pass,setPass] = useState('');
    const [loggedIn,setLoggedIn] = useState(false);
  useEffect(()=>{
      localStorage.clear();
  },[]);
  const loginHandler = () =>{
     props.dispatch(loginFetch(login, pass));
     setLoggedIn(true);
  }
  return(
      <LoginMain>
          <Header/>
          <LoginBlock>
              {!loggedIn?[<label key={'login'}>
                  <p>Login</p>
                  <input type="text" onChange={e => setLogin(e.target.value)} value={login}/>
              </label>,
                  <label key={'password'}>
                  <p>Password</p>
                  <input type="password" onChange={e => setPass(e.target.value)} value={pass} autoComplete="new-password"/>
                  </label>,
                  <button onClick={loginHandler} key={'signInButton'}>Sign in</button>]
                 :
                  <LoginConfirm>
                      <img src="https://image.flaticon.com/icons/svg/845/845646.svg" alt="success"/>
                      <p>Вы успешно Авторизованы</p>
                      <Link to={'/adminPanel'}>OK</Link>
                  </LoginConfirm>
              }
          </LoginBlock>
      </LoginMain>
  )
};
const mapStateToProps = (state) => {
    return {
        username: state.user.user,
    };
};
export default connect(mapStateToProps)(Login);