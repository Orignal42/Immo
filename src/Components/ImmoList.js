import React from "react";
import "../App.css";
import { Link } from "react-router-dom";


class ImmoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }


  componentDidMount() {
    fetch(`http://127.0.0.1:8000/api/property/all`)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        this.setState({
          datas: json,
        });
      });
  }

  render() {
    let text = " ";
    const { datas } = this.state;
    // console.log(this.state);
    return (
      <div className="appartement">
        <ol>
          {datas.map((dat) => (
            <li key={dat.id}>
        
                {dat.id} {text} {dat.title} {text} {dat.size}m² {text}{" "}
                {dat.room} pièces {text}
                {dat.address} {text} {dat.city} {text} {dat.description} {text}{" "}
                {dat.price}€
               <Link to ={`ImmoDetail/${dat.id}`}>Cliquer ici</Link>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ImmoList;
