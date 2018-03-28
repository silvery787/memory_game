import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card";
import cat_list from "./cats.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cats: cat_list,
    wins: 0,
    total_wins: 0,
    total_loses: 0,
    message : "Click a Cat to begin!"
  };

  componentDidMount = () => {
    this.startGame();
    this.shuffleCats();
  };

  startGame = () => {
    const cats = this.state.cats.map( cat => {
      let new_cat = cat;
      new_cat.clicked = 0;
      return new_cat;
    });

    this.setState({ cats: cats });
    this.setState({ wins: 0 });
    this.shuffleCats();
  };

  shuffleCats = () => {
    let cats = this.state.cats;
    let n = cats.length - 1;
    for(let i=n; i>0; i--){
      let rand = Math.floor(Math.random()*i);
      let tmp = cats[i];
      cats[i] = cats[rand];
      cats[rand] = tmp; 
    }
    this.setState({ cats: cats });
  };

  clickCat = id => {
    let cats = this.state.cats;
    let n = cats.length;
    for(let i=0; i<n; i++){
      if( cats[i].id === id ){
        if( cats[i].clicked ){
          this.setState({ wins: 0 });
          this.setState({ message: "You loose!!!" });
          this.setState({ total_loses: this.state.total_loses + 1 });
          this.startGame();
        }
        else{
          let wins = this.state.wins;
          wins++;
          if( wins === 12 ) {
            this.setState({ message : "You win!!!" });
            this.setState({ total_wins: this.state.total_wins + 1 });
            this.startGame();
          }
          else{
            this.setState({ message : "Correct!" });
            this.setState({ wins: wins });
            cats[i].clicked++;
            this.setState({ cats: cats});
            this.shuffleCats();
          }
        }
        break;
      }
    }
  };

  render() {
    return (
      <Wrapper>
        <Title>{this.state.message} | Cats: {this.state.wins} | Total Wins: {this.state.total_wins} | Total total_loses:{this.state.total_loses} </Title>
        {this.state.cats.map(cat => (
          <Card
            clickCat={this.clickCat}
            id={cat.id}
            key={cat.id}
            image={require('../public'+cat.image)}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
