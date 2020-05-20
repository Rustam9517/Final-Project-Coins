import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/actions";
import {
  CoinsMainDiv,
  CoinSelf,
  CoinInfo,
  CoinListBlock,
} from "./coinListStyle";
import { Loader } from "../spinner/Spinner";
import SearchBar from "../SearchBar/SearchBar";

const CoinsList = (props) => {
  const [byType, setByType] = useState(null);
  useEffect(() => {
    if (props.location.state) {
      const type = props.location.state.type;
      props.dispatch(fetchProducts(type));
      setByType(type);
    }
  }, []);
  const shortinfo = (value) => {
    const text = value;
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i > 70 && text[i] === ".") {
        break;
      }
      newText += text[i];
    }
    return newText;
  };

  const { coins, search } = props;
  const typedEl =
    byType && coins ? coins.filter((el) => el.type === byType) : null;
  let arr =
    !search && typedEl ? typedEl : !typedEl && search ? search : typedEl;
  let loading =
    !search && typedEl ? (
      <Loader> </Loader>
    ) : !typedEl && search ? (
      search
    ) : (
      <Loader> </Loader>
    );
  const coinBlock = arr
    ? arr.map((el) => {
        const newSentence = shortinfo(el.information);
        return (
          <Link
            key={el.id}
            to={{
              pathname: "/coinPage",
              state: {
                id: el.id,
                name: el.name,
                imgFront: el.imgFrontUrl,
                imgBack: el.imgBackUrl,
                country: el.country,
                composition: el.composition,
                quality: el.quality,
                denomination: el.denomination,
                date: el.date,
                weight: el.weight,
                price: el.price,
                information: el.information,
                type: byType,
              },
            }}
          >
            <CoinSelf>
              <img src={el.imgFrontUrl} alt="" />
              <CoinInfo>
                <p className={"coinName"}>{el.name}</p>
                <p className={"coinInfo"}>{newSentence}...</p>
              </CoinInfo>
            </CoinSelf>
          </Link>
        );
      })
    : loading;
  return (
    <CoinsMainDiv>
      <SearchBar />
      <CoinListBlock>{coinBlock}</CoinListBlock>
    </CoinsMainDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    coins: state.coins.items,
    search: state.search.items,
  };
};

export default connect(mapStateToProps)(CoinsList);
