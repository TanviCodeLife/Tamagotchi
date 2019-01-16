import { Tamagotchi } from './tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

let newTamagotchi = new Tamagotchi("Sayuri");
function updateGif(mood) {
  let promise;
  if(newTamagotchi.currentFoodLevel === 0 || newTamagotchi.currentSleepLevel === 0 || newTamagotchi.currentPlayLevel === 0) {
   promise = newTamagotchi.getMoodGif("Dead");
  } else {
    promise = newTamagotchi.getMoodGif(mood);
  }

  promise.then(function(response) {
    let body = JSON.parse(response);
    $("#gif").html(`<img src="${body.data[2].images.fixed_height.url}">`)
  }, function(error) {
    $("#error").text(`${error.message}`)
  });
}

$(document).ready(function() {

  let feedMessage = document.createElement("p");
  feedMessage.id = "fmessage";
  document.getElementById("care-buttons").appendChild(feedMessage);
  newTamagotchi.hungry(newTamagotchi.hunger);
  document.getElementById("feed").onclick = function() {
    newTamagotchi.feed(newTamagotchi.hunger);
    document.getElementById("fmessage").textContent = `Tamagotchi fed and current food val: ${newTamagotchi.currentFoodLevel}`;
    updateGif("feed");
  }

    let sleepMessage = document.createElement("p");
    sleepMessage.id = "sMessage";
    document.getElementById("care-buttons").appendChild(sleepMessage);
    newTamagotchi.tired(newTamagotchi.sleep);

    document.getElementById("sleep").onclick = function() {
    newTamagotchi.fresh(newTamagotchi.sleep);
    document.getElementById("sMessage").textContent = `Tamagotchi slept and current sleep level val: ${newTamagotchi.currentSleepLevel}`;
    updateGif("sleep");
  }

  let playMessage = document.createElement("p");
  playMessage.id = "pmessage";
  document.getElementById("care-buttons").appendChild(playMessage);
  newTamagotchi.sad(newTamagotchi.play);

  document.getElementById("play").onclick = function() {
  newTamagotchi.happy(newTamagotchi.play);
  document.getElementById("pmessage").textContent = `Tamagotchi played and current play level val: ${newTamagotchi.currentPlayLevel}`;
  updateGif("play");
}

  // newTamagotchi.gameOver();
});
