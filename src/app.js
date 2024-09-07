/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function excuseGenerator() {
    const who = ["The dog", "my mom", "my father", "my granpa", "my grandma"];
    const action = ["ate", "pooped", "crush", "took", "broke"];
    const what = ["My laptop", "My keyboard", "My phone", "My house"];
    const when = [
      "before the class",
      "After the class",
      "when I was not home",
      "during my lunch"
    ];

    const randomWho = Math.floor(Math.random() * who.length);
    const randomAction = Math.floor(Math.random() * action.length);
    const randomWhat = Math.floor(Math.random() * what.length);
    const randomWhen = Math.floor(Math.random() * when.length);

    const excuses =
      who[randomWho] +
      " " +
      action[randomAction] +
      " " +
      what[randomWhat] +
      " " +
      when[randomWhen];

    document.getElementById("excuse").textContent = excuses;
  }

  document
    .getElementById("generateExcuse")
    .addEventListener("click", excuseGenerator);
};
