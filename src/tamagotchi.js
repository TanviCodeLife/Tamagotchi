export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.maxSleepLevel = 100;
    this.maxFoodLevel = 150;
    this.maxPlayLevel = 200;
    this.hunger = 5;
    this.sleep = 10;
    this.play = 2;
    this.currentSleepLevel = this.maxSleepLevel;
    this.currentFoodLevel = this.maxFoodLevel;
    this.currentPlayLevel = this.maxPlayLevel;
    this.gameLevel = 0;
    this.gameOver = false;
    // this.feedInterval = null;
    // this.sleepInterval = null;
    // this.playInterval = null;
  }

  feed(hunger){
      if(this.currentFoodLevel <= this.maxFoodLevel){
        this.currentFoodLevel += hunger;
      }
      else {

        console.log("I am full!!");
      }
  }

  hungry(hunger){
    let feedInterval = setInterval(() => {
      if(this.gameOver){
        clearInterval(feedInterval);
      }
      else{
      if(this.currentFoodLevel > 0){
        this.currentFoodLevel -= hunger;
        document.getElementById("fmessage").textContent = `Tamagotchi fed and current food val: ${this.currentFoodLevel}`;
        console.log("feed " + this.currentFoodLevel);
      }
      else {
        console.log(" feed - Tamagotchi dead");
        this.gameOver = true;
      }
    }
    }, 2000);
  }

  fresh(sleep){
    if(this.currentSleepLevel <= this.maxSleepLevel){
      this.currentSleepLevel += sleep;
    }
    else {
      console.log("I feel fresh !!");
    }
  }

  tired(sleep){
    let sleepInterval = setInterval(() => {
      if(this.gameOver){
        clearInterval(sleepInterval);
      }
      else {
      if(this.currentSleepLevel > 0){
        this.currentSleepLevel -= sleep;
        document.getElementById("sMessage").textContent = `Tamagotchi slept and current sleep level val: ${this.currentSleepLevel}`;
        console.log("sleep " + this.currentSleepLevel);
      }
      else {
        console.log("sleep - Tamagotchi dead!!");
        this.gameOver = true;
      }
    }
    }, 1000);
  }

  happy(play){
    if(this.currentPlayLevel <= this.maxPlayLevel){
      this.currentPlayLevel += play;
    }
    else {
      console.log("I feel happy !!");
    }
  }

  sad(play){
    let playInterval = setInterval(() => {
      if(this.gameOver){
        clearInterval(playInterval);
      }
      else{
        if(this.currentPlayLevel > 0){
          this.currentPlayLevel -= play;
          document.getElementById("pmessage").textContent = `Tamagotchi played and current play level val: ${this.currentPlayLevel}`;
          console.log("play " + this.currentPlayLevel);
        }
        else {
          console.log("play - Tamagotchi dead!");
          this.gameOver = true;
        }
      }
    }, 500);
  }

}
