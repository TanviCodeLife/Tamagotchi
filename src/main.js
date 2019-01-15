import { Tamagotchi } from './tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {

  let newTamagotchi = new Tamagotchi("Sayuri");
  let feedMessage = document.createElement("p");
  feedMessage.id = "fmessage";
  document.getElementById("care-buttons").appendChild(feedMessage);
  newTamagotchi.hungry(newTamagotchi.hunger);
  document.getElementById("feed").onclick = function() {
    newTamagotchi.feed(newTamagotchi.hunger);
    document.getElementById("fmessage").textContent = `Tamagotchi fed and current food val: ${newTamagotchi.currentFoodLevel}`;
  }

    let sleepMessage = document.createElement("p");
    sleepMessage.id = "sMessage";
    document.getElementById("care-buttons").appendChild(sleepMessage);
    newTamagotchi.tired(newTamagotchi.sleep);

    document.getElementById("sleep").onclick = function() {
    newTamagotchi.fresh(newTamagotchi.sleep);
    document.getElementById("sMessage").textContent = `Tamagotchi slept and current sleep level val: ${newTamagotchi.currentSleepLevel}`;
  }

  let playMessage = document.createElement("p");
  playMessage.id = "pmessage";
  document.getElementById("care-buttons").appendChild(playMessage);
  newTamagotchi.sad(newTamagotchi.play);

  document.getElementById("play").onclick = function() {
  newTamagotchi.happy(newTamagotchi.play);
  document.getElementById("pmessage").textContent = `Tamagotchi played and current play level val: ${newTamagotchi.currentPlayLevel}`;
}
  newTamagotchi.gameOver();
});
