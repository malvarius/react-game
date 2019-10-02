import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import FriendInfo from "./friends.json";

function randomize(a, b) {  
  return 0.5 - Math.random();
}  
const trueFalseArray = FriendInfo.map((element,index)=>{
  element=false;
  return element
})
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      clicked: trueFalseArray,
      randomFriendInfo: FriendInfo.sort(randomize),
      score: 0
      }
      this.handleClick=this.handleClick.bind(this)
  }


handleClick(input){
  let temp = this.state.clicked.slice(); 
   if(this.state.clicked[input]===false){
    this.setState({score:this.state.score+1})
    temp[input-1] = true;
     this.setState({clicked:temp})
     console.log('Clicked'+this.state.clicked)
     this.setState({randomFriendInfo:FriendInfo.sort(randomize)})
   }
  else{
    temp[input-1] = false;
     this.setState({clicked:trueFalseArray})
    alert('This was already clicked you lose!')
    this.setState({score:0})
    this.setState({randomFriendInfo:FriendInfo.sort(randomize)})
  }
  
}


render() {
  return (
    <Wrapper>
      <Title>Warcraft Classes {this.state.score}</Title>
      
    {this.state.randomFriendInfo.map((person, index) => (
         <FriendCard name={person.name}
         image={person.image} 
         occupation={person.occupation}
         location={person.location}
         key={person.id}
         num={person.id}
         handleClick={()=>this.handleClick(person.id)}
         clickedState={this.state.clicked[person.id-1]}
         />     
    ))}
    
    </Wrapper>
  );
}
}

export default App;