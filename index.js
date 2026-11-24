"use strict";

const express = require("express");
const app = express();

let categories = ["funnyJoke", "lameJoke"];

let funnyJoke = [
  {
    joke: "Dlaczego komputer poszedł do lekarza?",
    response: "Bo złapał wirusa!",
  },
  {
    joke: "Dlaczego komputer nie może być głodny?",
    response: "Bo ma pełen dysk!",
  },
  {
    joke: "Co mówi jeden bit do drugiego?",
    response: "„Trzymaj się, zaraz się przestawiamy!”",
  },
];

let lameJoke = [
  {
    joke: "Dlaczego programiści preferują noc?",
    response: "Bo w nocy jest mniej bugów do łapania!",
  },
  {
    joke: "Jak nazywa się bardzo szybki programista?",
    response: "Błyskawiczny kompilator!",
  },
];

const jokesData = {
  funnyJoke: funnyJoke,
  lameJoke: lameJoke,
};

app.get("/jokebook/categories", (req, res) => {
  const response = res.json({
    categories: categories,
  });
  res.json(result);
});

app.get("/jokebook/joke/:category", (req, res) => {
  const category = req.params.category;
  const selectedJokes = jokesData[category];

  if (!categories.includes(category)) {
    return res.status(404).json({ error: `no jokes for category ${category}` });
  }

  const randomIndex = Math.floor(Math.random() * selectedJokes.length);
  res.json({ jokes: selectedJokes[randomIndex] });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
