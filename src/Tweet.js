import React from "react";

const Tweet = ({ name, likes, message }) => {
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <p>{message}</p>
      <p>{likes}</p>
    </div>
  );
};

export default Tweet;
