import {Component} from 'react';
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
      .then(rockets => this.setState({rockets: rockets}))
  }

  render() {
    
  return (
    <div className="App">
      {this.state.rockets.map((rocket) =>(
      <h1>{rocket.name}</h1>
      ))}
    </div>
  );
}
}

export default App;
