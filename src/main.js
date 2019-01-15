import { Tamagotchi } from './tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {

  let newTamagotchi = new Tamagotchi("Sayuri");
  newTamagotchi.hungry(newTamagotchi.hunger);


  document.getElementById("feed").onclick = function() {
    newTamagotchi.feed(newTamagotchi.hunger);
    let feedMessage = document.createElement("p");
    feedMessage.id = "fmessage";
    document.getElementById("care-buttons").appendChild(feedMessage);
    document.getElementById("fmessage").textContent = `Tamagotchi fed and current food val: ${newTamagotchi.currentFoodLevel}`;
  }

    newTamagotchi.tired(newTamagotchi.sleep);
    document.getElementById("sleep").onclick = function() {
    newTamagotchi.fresh(newTamagotchi.sleep);
    let sleepMessage = document.createElement("p");
    sleepMessage.id = "sMessage";
    document.getElementById("care-buttons").appendChild(sleepMessage);
    document.getElementById("sMessage").textContent = `Tagamotchi slept and current sleep level val: ${newTamagotchi.currentSleepLevel}`;
  }

});
