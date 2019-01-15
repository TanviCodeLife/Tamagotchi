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
    setInterval(() => {
      if(this.currentFoodLevel > 0){
        this.currentFoodLevel -= hunger;
        console.log(this.currentFoodLevel);
      }
      else {
        console.log("Tamagotchi dead");
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
    setInterval(() => {
      if(this.currentSleepLevel > 0){
        this.currentSleepLevel -= sleep;
        console.log(this.currentSleepLevel);
      }
      else {
        console.log("I am Sleepy!!");
      }
    }, 4000);
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
    setInterval(() => {
      if(this.currentPlayLevel > 0){
        this.currentPlayLevel -= play;
      }
      else {
        console.log("I am Sad!!");
      }
    }, 5000);
  }
}
