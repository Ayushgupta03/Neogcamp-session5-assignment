import React from "react";
import "./styles.css";
import { useState } from "react";

const foodDB = {
  chinese: [
    { name: "Hakka noodles", rating: "4/5" },
    { name: "Machurian", rating: "3.5/5" },
    { name: "Momos", rating: "3/5" },
    { name: "Manchao soup", rating: "5/5" }
  ],

  Italian: [
    {
      name: "Mac n Cheese",
      rating: "5/5"
    },
    {
      name: "Spaghetti",
      rating: "4.5/5"
    }
  ],
  Indian: [
    { name: "Chole Bhature", rating: "4/5" },
    { name: "Rajma Chawal", rating: "5/5" },
    { name: "Kadhai Paneer", rating: "3/5" },
    { name: "Butter Chicken", rating: "5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("chinese");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Food Recommendation app </h1>
      <p style={{ fontSize: "smaller" }}> View different variety of food </p>

      <div>
        {Object.keys(foodDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedGenre].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid grey",
                width: "80%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
