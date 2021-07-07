import { Component } from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      rockets: [] //our rockets will be retrieved by the API call. Thats why its an empty array.
    }
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then(res => res.json())
      .then(rockets => this.setState({ rockets: rockets }))
  }

  render() {

    return (
      <div className="container">
        <div className="row columns">
          {this.state.rockets.map((rocket) => (
          <div className="card column" key={rocket.id}>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={rocket.flickr_images[1]} alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                
                <div className="media-content">
                  <p className="title is-4">{rocket.name}</p>
                </div>
              </div>

              <div className="content">
                {rocket.description}
                <br />
                <time dateTime="2016-1-1">First Flight: {rocket.first_flight}</time>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
