import React, { useState } from "react";
import "./styles.css";

/**
 * concept notes: styling in react
 */

/**
 * concept of hashmap (object as hashmap)
 * O(1) and why we are doing this.
 */
const emojiDictionary = {
  "🙉": " Hear-No-Evil-Monkey",
  "🙊": " Speak-No-Evil-Monkey",
  "🐵": " Monkey-Face",
  "🐒": " Monkey",
  "🦍": " Gorilla",
  "🦧": " Orangutan",
  "🐶": " Dog-Face",
  "🐕": " Dog",
  "🦮": " Guide-Dog",
  "🐕‍🦺": "‍ Service-Dog",
  "🐩": " Poodle",
  "🐺": " Wolf",
  "🦊": " Fox",
  "🦝": " Raccoon",
  "🐱": " Cat Face",
  "🐈": " Cat",
  "🦁": " Lion",
  "🐯": " Tiger Face",
  "🐅": " Tiger",
  "🐆": " Leopard",
  "🐴": " Horse Face",
  "🐎": " Horse",
  "🦄": " Unicorn",
  "🦓": " Zebra",
  "🦌": " Deer",
  "🐮": " Cow Face",
  "🐂": " Ox",
  "🐃": " Water Buffalo",
  "🐄": " Cow",
  "🐷": " Pig Face",
  "🐖": " Pig",
  "🐗": " Boar",
  "🐽": " Pig Nose",
  "🐏": " Ram",
  "🐑": " Ewe",
  "🐐": " Goat",
  "🐪": " Camel",
  "🐫": " Two Hump Camel",
  "🦙": " Llama",
  "🦒": " Giraffe",
  "🐘": " Elephant",
  "🐸": "Frog",
  "🐊": "Crocodile",
  "🐢": "Turtle",
  "🦎": "Lizard",
  "🐍": "Snake",
  "🐲": "Dragon Face",
  "🐉": "Dragon",
  "🦕": "Sauropod",
  "🦖": "T-Rex",
  "🐳": "Spouting Whale",
  "🐋": "Whale",
  "🐬": "Dolphin",
  "🐟": " Fish",
  "🐠": " Tropical Fish",
  "🐡": " Blowfish",
  "🦈": " Shark",
  "🐙": " Octopus",
  "🐚": " Spiral Shell",
  "🐌": " Snail",
  "🦋": " Butterfly",
  "🐛": " Bug",
  "🐜": " Ant",
  "🐝": " Honeybee",
  "🦔": "Hedgehog",
  "🦇": "Bat",
  "🐻": "Bear",
  "🐨": "Koala",
  "🐼": "Panda",
  "🦥": "Sloth",
  "🦦": "Otter",
  "🦨": "Skunk",
  "🦘": "Kangaroo",
  "🦡": "Badger",
  "🐾": "Paw Prints",
  "🦃": "Turkey",
  "🐔": "Chicken",
  "🐓": "Rooster",
  "🐣": "Hatching Chick",
  "🐤": "Baby Chick",
  "🐥": "Front-Facing Baby Chick",
  "🐦": "Bird",
  "🐧": "Penguin",
  "🕊️": " Dove",
  "🦅": "Eagle",
  "🦆": "Duck",
  "🦢": "Swan",
  "🦉": "Owl",
  "💐": "Bouquet",
  "🌸": "Cherry Blossom",
  "💮": "White Flower",
  "🏵️": " Rosette",
  "🌹": "Rose",
  "🥀": "Wilted Flower",
  "🌺": "Hibiscus",
  "🌻": "Sunflower",
  "🌼": "Blossom",
  "🌷": "Tulip",
  "🌱": "Seedling",
  "🌲": "Evergreen Tree",
  "🌳": "Deciduous Tree",
  "🌴": "Palm Tree",
  "🌵": "Cactus",
  "🌾": "Sheaf of Rice",
  "🌿": "Herb",
  "☘️": " Shamrock",
  "🍀": "Four Leaf Clover",
  "🍁": "Maple Leaf",
  "🍂": "Fallen Leaf",
  "🍃": "Leaf Fluttering in Wind",
  "🍄": "Mushroom",
  "🌰": "Chestnut",
  "🦀": "Crab",
  "🦞": "Lobster",
  "🦐": "Shrimp",
  "🦑": "Squid",
  "🐭": "Mouse Face",
  "🐁": "Mouse"

  /** add some more to show how the app now expands when there's new data */
};

/**
 * Bonus feature
 * converting an object to array of keys
 */
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    /** concept 3 is onchange */
    <div className="App">
      <header id="logo">
        <h1>Find your Emoji</h1>
      </header>

      <section id="hero">
        <div id="heading">🐻 Animals & Nature 🌻</div>
        <input
          className="search"
          onChange={changeHandler}
          value={emoji}
          placeholder={"Search your emoji"}
          style={{
            padding: "1em",
            minWidth: "80%"
          }}
        />
        <h2> {emoji} </h2> {/** Concept 1: JSX */}
        <h3> {meaning} </h3> {/** how much part is re-rendered. */}
        <div id="icon">Emojis for animals and nature.</div>
        <div id="list">
          {emojis.map((emoji) => (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "4rem", padding: "1rem", cursor: "pointer" }}
            >
              {" "}
              {emoji}{" "}
            </span>
          ))}
        </div>
      </section>

      <footer class="end">
        <h1>
          Made by{" "}
          <a href="https://utsav-kumar.netlify.app/" target="_blank">
            Utsav kumar
          </a>
        </h1>
      </footer>
    </div>
  );
}
