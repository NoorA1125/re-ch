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
        <div className="row">
          {this.state.rockets.map((rocket) => (
          <div class="card" key={rocket.id}>
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{rocket.name}</p>
                </div>
              </div>

              <div class="content">
                {rocket.description}
                <br />
                <time datetime="2016-1-1">First Flight: {rocket.first_flight}</time>
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
