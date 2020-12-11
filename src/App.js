import React from 'react';
import './App.css';
import axios from 'axios';
import PortfolioItem from './components/PortfolioItem';

const exampleEntries = [
    { 
        "id": 1,
        "title": "Everything is Gold",
        "decription": "Life is gold like a machine, buy a watch just to flex.",
        "background": "#ffd700",
        "published_at": "2020-12-11T11:53:34.872Z",
        "created_at": "2020-12-11T11:51:25.578Z",
        "updated_at": "2020-12-11T11:53:34.907Z"
    },
    {
        "id": 2,
        "title": "Red is Passion",
        "decription": "Passion is fire,\nFire is love",
        "background": "#e26a6a",
        "published_at": "2020-12-11T11:53:29.396Z",
        "created_at": "2020-12-11T11:53:26.245Z",
        "updated_at": "2020-12-11T11:53:29.433Z"
    }
];

class App extends React.Component {

  state ={
    data: []
  }

  async componentDidMount() {
    console.log("ComponentDidMount")
    const portfolio_response = await axios({
      method: 'GET',
      url: 'http://localhost:1337/portfolios?user=1'
    })

    const {data} = portfolio_response
    console.log("App.componentDidMount data", data)
    this.setState({data})
  }

  render() {
    return (
      <div className="App">
        {this.state.data.map(entry => {
          return (
            <PortfolioItem title={entry.title} decription={entry.decription} background={entry.background}/>
          )
        })}
      </div>
    );
  }
}

export default App;
