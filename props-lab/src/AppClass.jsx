import { Component } from "react";
import elephant from "../src/images/elephant.jpeg";
import "./App.css";

class images extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Kalvium Gallery</h1>
        <div className="imageStyle">
          {this.props.data.map((item) => (
            <img key={item.id} src={item.img} alt="" />
          ))}
        </div>
      </div>
    );
  }
}

export default images;
