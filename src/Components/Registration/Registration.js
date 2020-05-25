import React, { useState } from "react";
import { RegBlock, RegConfirm, Regform } from "./regStyles";
import { LoginConfirm } from "../Login/LoginStyle";
import { Link } from "react-router-dom";

const Registration = () => {
  const [available, setAvailable] = useState(false);
  const [reg, setReg] = useState(false);
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const confirmHandler = () => {
    if (username !== "" && pass !== "") {
      fetch(`http://localhost:3001/registration`, {
        method: "POST",
        body: JSON.stringify({
          login: username,
          pass: pass,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res === "Занято") setAvailable(false);
          else setAvailable(true);
          setReg(true);
        });
    } else {
      alert("Пожалуйста заполните все поля");
    }
  };
  return (
    <RegBlock>
      {!reg ? (
        <Regform>
          <label>
            <p>Username</p>
            <input
              type="text"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(event) => setPass(event.target.value)}
              value={pass}
            />
          </label>
          <button onClick={confirmHandler}>Confirm</button>
        </Regform>
      ) : available ? (
        <RegConfirm>
          <img
            src="https://image.flaticon.com/icons/svg/845/845646.svg"
            alt="success"
          />
          <p>Вы успешно Зарегестрированы</p>
          <Link to={"/"}>OK</Link>
        </RegConfirm>
      ) : (
        <RegConfirm>
          <img
            src="https://image.flaticon.com/icons/svg/752/752755.svg"
            alt="fail"
          />
          <p>Такое имя пользователя уже существует!Придумайте новое</p>
          <Link to={"/login"}>OK</Link>
        </RegConfirm>
      )}
    </RegBlock>
  );
};

export default Registration;
