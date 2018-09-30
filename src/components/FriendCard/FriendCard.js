import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div class="jumbotron">
  <span onClick={() => props.removeFriend(props.id)} className="remove ">
  <div className="card">
    <div className="img-container">
    <img alt={props.name} src={props.image} />
    
    </div>
   
  </div>
  </span>
  </div>
);

export default FriendCard;
