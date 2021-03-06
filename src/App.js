import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "🔥": "Fire",
  "😀": "Grinning face",
  "😂": "LOL",
  "✨": "Sparkles",
  "🐵": "Monkey",
  "⚽": "Football",
  "🍔": "Burger",
  "😴": "Slepping",
  "🐱": "Cat Face",
  "🐊": "Crocodile",
  "🦖": "T-Rex",
  "🧄": "Garlic",
  "🥦": "Broccoli",
  "🥚": "Egg",
  "🥪": "Sandwich",
  "🍳": "Cooking",
  "🍤": "Fried Shrimp",
  "🎂": "Birthday Cake",
  "🏝️": "Desert Island",
  "🏢": "Office Building",

  "🚈": "Light Rail",
  "🚜": "Tractor",
  "🚕": "Taxi",
  "🛺": "Auto Rickshaw"
};

var emojiKeys = Object.keys(emojiDict);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  //this function is used when the emoji are searched or enttered as an input
  function emojiMeaningChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDict[userInput];

    if (meaning === undefined) {
      meaning =
        "Sorry for in-convenience there is no such emoji in our database.";
    }

    setEmojiMeaning(meaning);
    // console.log(meaning);
  }

  //this function will be used when the emojis are clicked and it will dispplay the meaning of the emoji.

  function emojiClickhandler(emoji) {
    // emojiMeaningChangeHandler(emoji);
    var meaning = emojiDict[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        emoji with there{" "}
        <span style={{ color: "rgba(20,25,213,.7)" }}>meaning</span>
      </h1>

      <input
        onChange={emojiMeaningChangeHandler}
        placeholder="Enter your emoji here... "
      />

      <div id="meaning">
        {" "}
        Meaning <br />
        <span style={{ color: "rgba(20,25,213,.85)" }}>{emojiMeaning}</span>
      </div>

      {/* display the emojis usinf list */}
      {/* <ul style={{ listStyle: "none", cursor: "pointer" }}>
        {emojiKeys.map((emoji) => {
          return (
            <li
              onClick={() => emojiClickhandler(emoji)}
              style={{ display: "inline", padding: "0.5rem" }}
            >
              {emoji}
            </li>
          );
        })}
      </ul> */}

      {/* {displays emojis using span} */}

      <div
        style={{
          margin: "auto",
          width: "60%",
          display: "block",
          height: "70%",
          position: "relative"
          // paddingBottom:"1rem"
        }}
      >
        {emojiKeys.map((emoji) => {
          return (
            <span
              onClick={() => emojiClickhandler(emoji)}
              key={emoji}
              style={{
                padding: "0.5rem",
                cursor: "pointer",
                backgroundColor: "rgba(20,25,213,0.3)",
                margin: "4px",
                borderRadius: "0.2rem",
                display: "inline-block"
              }}
            >
              {" "}
              {emoji}
            </span>
          );
        })}
      </div>
      <div class="connect">
        <hr />

        <p style={{ fontSize: "1.5rem" }}>
          <strong>Connect with me</strong>
        </p>
        {/* <hr /> */}
        <ul id="connect-links" style={{ listStyle: "none" }}>
          <li>
            <a href="https://www.linkedin.com/in/ajith-v-billava-571b5318b/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ajitvbillava/">Instagram</a>
          </li>
          <li>
            <a href="https://github.com/Ajithbillava">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

/**
 * things to notice
 * class --> className
 * style --> takes an object instead of ""
 */
