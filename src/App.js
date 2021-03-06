import React, { useState } from "react";
import "./styles.css";

const emojiDb = {
  "π": "Grinning Face with Sweat",
  "π": "Upside-Down Face",
  "οΈβΊοΈ": "Smiling Face",
  "π€": "Hugging Face",
  "π": "Unamused Face"
};

const emojiList = Object.keys(emojiDb);

export default function App() {
  let [meaning, setMeaning] = useState(" ");

  function emojiHandler(event) {
    let emoji = event.target.value;
    if (emoji in emojiDb) {
      setMeaning((meaning = emojiDb[emoji]));
    } else {
      setMeaning((meaning = "Sorry, this is not in our database."));
    }
  }

  function clickHandler(emoji) {
    setMeaning(emojiDb[emoji]);
  }

  return (
    <div className="App">
      <h1>
        emoji-I
        <span role="img" aria-label="emoji">
          π
        </span>
      </h1>
      <input onChange={emojiHandler} placeholder="search by emoji..." />
      <div>
        <h3>{meaning}</h3>
        <h3>emojis we know</h3>

        {emojiList.map((emoji) => {
          return <span onClick={() => clickHandler(emoji)}>{emoji}</span>;
        })}
      </div>
    </div>
  );
}
