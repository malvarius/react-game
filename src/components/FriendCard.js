import React from "react";
import "./style.css";


function FriendCard(props) {
  return (
    <div className="card" onClick={props.handleClick} datanum={props.num} datastate={props.clickedState.toString()}>
      <div className="img-container">
        <img
          alt={props.name}
          src={props.image}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name} 
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Fighting Style:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
