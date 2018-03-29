import React, { Component } from "react";
import Score from "./components/Score";
import Card from "./components/Card";
import CardBox from "./components/CardBox";
import Footer from "./components/Footer";
import cat_list from "./cats.json";
import "./App.css";

class App extends Component {
  state = {
    cats: cat_list,
    score: 0,
    wins: 0,
    loses: 0,
    message : ""
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
    this.setState({ score: 0 });
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
          this.setState({ score: 0 });
          this.setState({ message: "You Loose!" });
          this.setState({ loses: this.state.loses + 1 });
          this.startGame();
        }
        else{
          let score = this.state.score;
          score++;
          if( score === 12 ) {
            this.setState({ message : "You Win!" });
            this.setState({ wins: this.state.wins + 1 });
            this.startGame();
          }
          else{
            this.setState({ message : "Correct!" });
            this.setState({ score: score });
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
      <div>
        <Score
          msg={this.state.message}
          score={this.state.score}
          wins={this.state.wins}
          loses={this.state.loses} 
        />
        <CardBox>
          {this.state.cats.map(cat => (
            <Card
              clickCat={this.clickCat}
              id={cat.id}
              key={cat.id}
              image={require('../public'+cat.image)}
            />
          ))}
        </CardBox>
        <Footer />
      </div>
    );
  }
}

export default App;
