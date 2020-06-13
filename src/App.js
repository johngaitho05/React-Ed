import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tweet from "./Tweet";
import StateApp from "./States";

function App() {
  const [tweets, setTweet] = useState([
    { name: "John", message: "Programming is fun", likes: "500k" },
    { name: "Mosh", message: "Check out my react tutorial", likes: "25k" },
    { name: "Celeb", message: "What's you fav color", likes: "1M" },
    { name: "Hosea", message: "React is jsut awesome", likes: "11k" },
  ]);
  return (
    <div>
      <div className="app">
        {tweets.map((tweet) => (
          <Tweet
            name={tweet.name}
            message={tweet.message}
            likes={tweet.likes}
          />
        ))}
      </div>
      <StateApp />
    </div>
  );
}

export default App;
