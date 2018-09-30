import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import cards from "./cards.json";
import Title from "./components/Title";
import ModeSwitch from "./components/ModeSwitch";
import "./App.css";
var picked=[];
shuffle(friends);
shuffle(cards);
var hardMode =true;
class App extends Component {
  // Setting the initial state of the Counter component
  state = {
    friends,
    cards
  };
  removeFriend = id => {
    shuffle(friends);
    shuffle(cards);
   if(picked.indexOf(id)===-1)
    {
    picked.push(id);
    //console.log(picked)
    if(picked.length===12)
    {
      alert("You Won!");
      picked =[];
    }
  }
  else {
   alert("You Lose!");
    picked =[];
  }
    //const friends = this.state.friends.filter(friend => friend.id !== id);
   if(hardMode) this.setState({ cards });
   else  this.setState({ friends });
  };
  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };
  switchModes = (TF) => {
     // console.log("HERE")
    hardMode=!hardMode;
    picked =[];
    if(hardMode) this.setState({ cards });
    else  this.setState({ friends });
    shuffle(friends);
    shuffle(cards);
  };
  // The render method returns the JSX that should be rendered
  render() {

    return(hardMode === true ?
    (
      //return (
      <Wrapper>
        <ModeSwitch
        switchModes={this.switchModes}/>
        <h1 >Pick a card... any card... just not the same card twice!</h1>
        
        <Title>
          Score: {picked.length}</Title>
        {this.state.cards.map(card => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={card.id}
            key={card.id}
            image={card.image}
            />
        ))}
      </Wrapper>
    //);
    ): (
     // return (
      <Wrapper>
        <ModeSwitch
        switchModes={this.switchModes}/>
        <h1>Pick a card... any card... just not the same card twice!</h1>
        <Title>
          Score: {picked.length}</Title>
        {this.state.friends.map(card => (
          <FriendCard
            removeFriend={this.removeFriend}
            switchModes={this.switchModes}
            id={card.id}
            key={card.id}
            image={card.image}
           />
        )
        )}
      </Wrapper>
    //)
    ))
  }
}

function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
// 

export default App;
//onClick={()=> props.Function(stuff)}
