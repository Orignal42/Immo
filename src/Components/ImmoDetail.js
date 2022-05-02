import React from "react";
import { render } from "@testing-library/react";
import "../App.css";
class Immo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:8000/api/property/detail/1`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          datas: json,
        });
      });
  }
  render() {
    let text = " ";
    const { datas } = this.state;
    console.log(this.state);
    return (
 
        <div className="appartement">
          <ol>
          
              <li>
                {datas.id} {text}  {datas.title} {text} {datas.size} {text}{" "}
                {datas.address}{text} {datas.description}{text} 
              </li>
         
          </ol>
        </div>
       
    );
  }
}

export default Immo;
