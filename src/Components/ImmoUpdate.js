import React from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import "../App.css";
import { Link } from "react-router-dom";
class ImmoUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      size: "",
      floor: "",
      image: null,
      price: "",
      address: "",
      postcode: "",
      city: "",
      room: "",
      // selectedFile: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onFileChange = event => {
    this.setState({ image: event.target.files[0] });
        };

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
     
    });
  }

  handleSubmit = () => {
    let { id } = this.props.params;
    console.log(id);
    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "image",
      this.state.image,
      this.state.image.name,
      )
      formData.append(
      'title',this.state.title
      )
      formData.append(
      'description',this.state.description
      )
      formData.append(
      'floor',this.state.floor
      )
      formData.append(
      'size',this.state.size
      )
      formData.append(
        'room',this.state.room
        )
      formData.append(
      'price',this.state.price
      )
      formData.append(
      'address',this.state.address
      )
      formData.append(
      'postcode',this.state.postcode
      )
      formData.append(
      'city',this.state.city
    );
    console.log(this.state.image.name);
    console.log(this.state);
      // Details of the uploaded file
      // Request made to the backend api
      // Send formData object
      axios.post(`http://127.0.0.1:8000/api/property/modify/${id}`, formData);
    console.log("c'est fait");
    console.log(formData);
  };
  
  // File content to be displayed after
  // file upload is complete

  // handleSubmit(e) {
  //   fetch(`http://127.0.0.1:8000/api/property/add`, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //     body: 
  //     // JSON.stringify(this.state),
  //      this.state,

  //   }).then((result) => {
  //     result
  //       .json()
  //       .then((res) => {
  //         console.warn("res", res);
  //         console.log(JSON.stringify(this.state));
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });
  //   this.setState({
  //     title: "",
  //     description: "",
  //     size: "",
  //     floor: "",
  //     image: "",
  //     price: "",
  //     address: "",
  //     postcode: "",
  //     city: "",
  //     room: "",
  //   });
  // }



  render() {
    return (
      <div>
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          id="title"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <label htmlFor="floor">Etage</label>
        <input
          type="number"
          id="floor"
          name="floor"
          value={this.state.floor}
          onChange={this.handleChange}
        />
        <label htmlFor="size">Surface</label>
        <input
          type="number"
          id="size"
          name="size"
          value={this.state.size}
          onChange={this.handleChange}
        />
        <label htmlFor="image">Image</label>
        {/* Input pour telecharger l'image */}
        <input type="file" onChange={this.onFileChange} />
        <label htmlFor="room">Piece</label>
        <input
          type="number"
          id="room"
          name="room"
          value={this.state.room}
          onChange={this.handleChange}
        />
        <label htmlFor="price">Prix</label>
        <input
          type="number"
          id="price"
          name="price"
          min="100"
          max="1000"
          value={this.state.price}
          onChange={this.handleChange}
        />
        <label htmlFor="address">Adresse</label>
        <input
          type="text"
          id="address"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
        />

        <label htmlFor="postcode">Code postale</label>
        <input
          type="number"
          id="postcode"
          name="postcode"
          min="1000"
          max="9999"
          value={this.state.postcode}
          onChange={this.handleChange}
        />

        <label htmlFor="city">Ville</label>
        <input
          type="text"
          id="city"
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Soumettre</button>

        {JSON.stringify(this.state)}
        <li>
          <Link to="/">Accueil</Link>
        </li>
      </div>
    );
  }
}
export default (props) => <ImmoUpdate {...props} params={useParams()} />;
