import styled from "styled-components";

export const UserProfileMain = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95%;
  h2 {
    width: 100%;
    text-align: center;
    padding-bottom: 30px;
  }
`;
export const UserAvatar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  padding-bottom: 30px;
  padding-left: 40px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    input {
      margin: 0 auto;
      width: 60%;
      padding: 10px 0;
      border: none;
      background-color: transparent;
      text-align: center;
    }
    p {
      font-family: Roboto, sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 109%;
      /* or 15px */
      color: #000000;
      text-align: center;
      margin: 0 !important;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 50px;
      margin: 10px auto;
      background: #833ae0;
      border: none;
      outline: none;
      padding: 15px 20px;
      color: #ffffff;
      border-radius: 6px;
    }
  }
`;

export const UserProfPic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #833ae0;
  width: 112px;
  height: 112px;
  margin: 5px;
  p {
    font-size: 30px;
    color: white;
  }
`;
export const CoinHistoryList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    text-decoration: none;
    margin-bottom: 20px;
    .coinName {
      font-family: Roboto, sans-serif;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #833ae0;
      padding-bottom: 12px;
    }
    .coinInfo {
      font-family: Roboto, sans-serif;
      font-size: 12px;
      line-height: 125.5%;
      color: #000000;
    }
  }
`;
export const CoinBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  img {
    display: inline-block;
    margin-right: 30px;
    width: 120px;
  }
`;
export const CoinInfoBlock = styled.div`
  width: 50%;
`;
export const UserTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:  flex-start;
  width: 30%;
`;
