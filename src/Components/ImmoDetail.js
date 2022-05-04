import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";
class ImmoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    let { id } = this.props.params;
    console.log({ id });
    fetch(`http://127.0.0.1:8000/api/property/detail/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          datas: json,
        });
      });
  }

  render() {
    
    const { datas } = this.state;
        return (
      <div className="appartement">
        <ol>
          {datas.id}
          <h1> {datas.title}</h1>
          <p>{datas.description}</p>
          <p>{datas.size}</p>
          <p> {datas.floor}</p>
          <p>{datas.image}</p>
        </ol>
      </div>
    );
  }
}

export default (props) => <ImmoDetail {...props} params={useParams()} />;
