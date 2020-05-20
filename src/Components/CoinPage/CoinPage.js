import React from "react";
import { CoinPageMain, ImageBlock, InformationBlock } from "./CoinPageStyle";
import { Link } from "react-router-dom";

class CoinPage extends React.Component {
  state = {
    id: null,
    name: null,
    imgFront: null,
    imgBack: null,
    country: null,
    composition: null,
    quality: null,
    denomination: null,
    date: null,
    weight: null,
    information: null,
    price: null,
    type: null,
  };
  componentDidMount() {
    const {
      id,
      name,
      imgFront,
      imgBack,
      country,
      composition,
      quality,
      denomination,
      date,
      weight,
      information,
      price,
      type,
    } = this.props.location.state;
    this.setState({
      id: id,
      name: name,
      imgFront: imgFront,
      imgBack: imgBack,
      country: country,
      composition: composition,
      quality: quality,
      denomination: denomination,
      date: date,
      weight: weight,
      information: information,
      price: price,
      type: type,
    });
  }

  render() {
    return (
      <CoinPageMain>
        <div>
          <ImageBlock>
            <img src={this.state.imgFront} alt="FrontSide" />
          </ImageBlock>
          <ImageBlock>
            <img src={this.state.imgBack} alt="BackSide" />
          </ImageBlock>
        </div>
        <InformationBlock>
          <h2>{this.state.name}</h2>
          <p>{this.state.information}</p>
          <table>
            <tbody>
              <tr>
                <th>Issuing Country</th>
                <td>{this.state.country}</td>
              </tr>
              <tr>
                <th>Composition</th>
                <td>{this.state.composition}</td>
              </tr>
              <tr>
                <th>Quality</th>
                <td>{this.state.quality}</td>
              </tr>
              <tr>
                <th>Denomination</th>
                <td>{this.state.denomination}</td>
              </tr>
              <tr>
                <th>Year</th>
                <td>{this.state.date}</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>{this.state.weight}</td>
              </tr>
              <tr>
                <th>Price</th>
                <td>{this.state.price}$</td>
              </tr>
            </tbody>
          </table>
          <Link
              to={{
                pathname: "/coinList",
                state: {
                  type:this.state.type
                },
              }}
          >Back to the list</Link>
        </InformationBlock>
      </CoinPageMain>
    );
  }
}
export default CoinPage;
