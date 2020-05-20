import React, {useState} from "react";
import {EditLeft, EditMain, EditMid, EditRight} from "../EditCoin/EditCoinStyle";
import {ControlButtons} from "../AdminPanel/adminStyles";
import {Link} from "react-router-dom";


const AddCoin = () =>{
    const [name, setName] = useState("");
    const [face, setFace] = useState("");
    const [year, setYear] = useState("");
    const [price, setPrice] = useState("");
    const [country, setCountry] = useState("");
    const [metal, setMetal] = useState("");
    const [short, setShort] = useState("");
    const [long, setLong] = useState("");
    const [quality, setQuality] = useState("");
    const [weight, setWeight] = useState("");
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");
    const [type, setType] = useState("");

    const addHandler = (e)=>{
        e.preventDefault();
        fetch(`http://localhost:3001/add`,{
            method:'POST',
            body:JSON.stringify({
                name:name,
                denomination:face,
                date:year,
                price:price,
                country:country,
                composition:metal,
                short:short,
                information:long,
                quality:quality,
                weight:weight,
                imgFrontUrl:front,
                imgBackUrl:back,
                type:type
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
  return(
      <EditMain>
          <EditLeft>
              <p>Coin name</p>
              <input
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
              />
              <p>Face value</p>
              <input
                  type="text"
                  onChange={(event) => setFace(event.target.value)}
                  value={face}
              />
              <p>Year of issue</p>
              <input
                  type="text"
                  onChange={(event) => setYear(event.target.value)}
                  value={year}
              />
              <p>Price</p>
              <input
                  type="text"
                  onChange={(event) => setPrice(event.target.value)}
                  value={price}
              />
              <p>Country</p>
              <input
                  type="text"
                  onChange={(event) => setCountry(event.target.value)}
                  value={country}
              />
              <p>Metal</p>
              <input
                  type="text"
                  onChange={(event) => setMetal(event.target.value)}
                  value={metal}
              />
          </EditLeft>
          <EditMid>
              <p>Short description</p>
              <textarea
                  cols="30"
                  rows="10"
                  onChange={(event) => setShort(event.target.value)}
                  value={short}
              />
              <p>Long description</p>
              <textarea
                  cols="30"
                  rows="10"
                  onChange={(event) => setLong(event.target.value)}
                  value={long}
              />
              <p>Quality of the coin</p>
              <input
                  type="text"
                  onChange={(event) => setQuality(event.target.value)}
                  value={quality}
              />
              <p>Weight</p>
              <input
                  type="text"
                  onChange={(event) => setWeight(event.target.value)}
                  value={weight}
              />
          </EditMid>
          <EditRight>
              <p>Type</p>
              <input
                  type="text"
                  onChange={(event) => setType(event.target.value)}
                  value={type}
              />
              <p>Link to obverse image</p>
              <input
                  type="text"
                  onChange={(event) => setFront(event.target.value)}
                  value={front}
              />
              <p>Link to reverse image</p>
              <input
                  type="text"
                  onChange={(event) => setBack(event.target.value)}
                  value={back}
              />
              <ControlButtons className={"editButtons"}>
                  <a href=" #" onClick={addHandler} >Add</a>
                  <Link to={'/adminPanel'}>Cancel</Link>
              </ControlButtons>
          </EditRight>
      </EditMain>
  )
};
export default AddCoin;