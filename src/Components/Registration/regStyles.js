import styled from "styled-components";

export const RegBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  p {
    margin: 5px auto;
    text-align: left;
    width: 50%;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 109%;
    /* or 15px */
    color: #000000;
  }
  button {
    cursor: pointer;
    width: 120px;
    margin: 0 auto;
    background: #833ae0;
    border: none;
    outline: none;
    padding: 10px 20px;
    color: #ffffff;
    text-decoration: none;
    text-align: center;
  }
  input {
    margin: 0 auto;
    width: 50%;
    padding: 10px 0;
  }
  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 10px auto;
  }
`;
export const Regform = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
`;
export const RegConfirm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  img {
    display: inline-block;
    width: 30px;
    margin-bottom: 10px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 50px;
    margin: 10px auto;
    background: #833ae0;
    border: none;
    outline: none;
    padding: 5px 10px;
    color: #ffffff;
    text-decoration: none;
  }
  p {
    width: 100%;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 109%;
    /* or 15px */
    color: #000000;
    text-align: center;
    margin: 0 !important;
  }
`;