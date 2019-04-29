import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
         <p>
          <button className="btn btn-primary sm-lg">Restart</button>
        </p>
        <Title>Sesame Street Friends</Title>

        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            quote={friend.quote}
            firstappearancedate={friend.firstappearancedate}
          />
        ))}
        <footer>
<p>Created by: Eli Gonzalez <a href="https://github.com/evg7393">github</a>
</p>
</footer>
      </Wrapper>
    );
    
  }
  
}

export default App;
