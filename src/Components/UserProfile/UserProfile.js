import React, { useEffect, useState } from "react";
import {
  CoinHistoryList, CoinInfoBlock,
  UserAvatar,
  UserInfo,
  UserProfileMain,
  UserProfPic, UserTotal,
} from "./userProfileStyles";
import {Link} from "react-router-dom";
import Paginator from "../Pagination/Paginator";
import {CoinBlock} from "./userProfileStyles";

const UserProfile = () => {
  const [fullname, setFullname] = useState(true);
  const [inputName, setInputName] = useState("");
  const [email, setEmail] = useState(true);
  const [inputMail, setInputEmail] = useState("");
  const [age, setAge] = useState(true);
  const [inputAge, setInputAge] = useState("");
  const [history, setHistory] = useState([]);
  const name = window.localStorage.getItem("login");
  useEffect(() => {
    fetch(`http://localhost:3001/getUserHistory?username=${name}`)
      .then((data) => data.json())
      .then((data) => {
        if(data.length>0) {
          setHistory(data)
        }
      })

    fetch(`http://localhost:3001/userInfo?username=${name}`)
      .then((res) => res.json())
      .then((res) => {
        for (let key in res[0]) {
          if (res[0][key] === null || res[0][key] === "null") {
            res[0][key] = "";
          }
        }
        setInputName(res[0].fullName);
        setInputEmail(res[0].email);
        setInputAge(res[0].age);
      });
  }, []);

  const updateHandler = (e) => {
    const name = e.target.getAttribute("name");
    if (name === "FullName") setFullname(false);
    if (name === "email") setEmail(false);
    if (name === "age") setAge(false);
  };
  const confirmChanges = (e) => {
    const target = e.target.getAttribute("name");
    const value = e.target.previousSibling.value;
    if (target === "FullName") setFullname(true);
    if (target === "email") setEmail(true);
    if (target === "age") setAge(true);
    fetch(`http://localhost:3001/updateInfo`, {
      method: "PUT",
      body: JSON.stringify({
        username: name,
        target: target,
        value: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const Showistory = history?history.map(el =>{
    return (
        <Link
            key={el.id}
            to={{
              pathname: "/coinPage/?id="+el.id,
              state:{
                history:true
              }
            }}
        >
          <CoinBlock>
            <img src={el.imgFrontUrl} alt="" />
            <CoinInfoBlock>
              <p className={"coinName"}>{el.name}</p>
              <p className={"coinInfo"}>{el.short}</p>
            </CoinInfoBlock>
          </CoinBlock>
        </Link>
    );
  }):null;
  return (
    <UserProfileMain>
      <UserTotal>

        <UserAvatar>
          <UserProfPic>
            <p>{name.charAt(0).toUpperCase()}</p>
          </UserProfPic>
        </UserAvatar>
        <UserInfo>
          <h2>Personal Information</h2>
          <label>
            <input
                type="text"
                disabled={fullname}
                onChange={(e) => setInputName(e.target.value)}
                value={inputName}
            />
            {fullname ? (
                <button name={"FullName"} onClick={updateHandler}>
                  Update
                </button>
            ) : (
                <button name={"FullName"} onClick={confirmChanges}>
                  Ok
                </button>
            )}
          </label>
          <label>
            <input
                type="email"
                disabled={email}
                onChange={(e) => setInputEmail(e.target.value)}
                value={inputMail}
            />
            {email ? (
                <button name={"email"} onClick={updateHandler}>
                  Update
                </button>
            ) : (
                <button name={"email"} onClick={confirmChanges}>
                  Ok
                </button>
            )}
          </label>
          <label>
            <input
                type="text"
                disabled={age}
                onChange={(e) => setInputAge(e.target.value)}
                value={inputAge}
            />
            {age ? (
                <button name={"age"} onClick={updateHandler}>
                  Update
                </button>
            ) : (
                <button name={"age"} onClick={confirmChanges}>
                  Ok
                </button>
            )}
          </label>
        </UserInfo>
      </UserTotal>
      <CoinHistoryList>
        <h2>History</h2>
        {Showistory.length!==0?<Paginator rowElems={Showistory}/>:null}
      </CoinHistoryList>
    </UserProfileMain>
  );
};
export default UserProfile;
