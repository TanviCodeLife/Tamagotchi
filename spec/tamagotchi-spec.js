import { Tamagotchi } from './../src/tamagotchi.js';


describe('Tamagotchi', function() {

  let testTama;

  beforeEach(function() {
    testTama = new Tamagotchi("testTama");
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should create a tamagotchi with default values', function() {
    expect(testTama.name).toEqual("testTama");
    expect(testTama.maxSleepLevel).toEqual(100);
    expect(testTama.maxFoodLevel).toEqual(150);
    expect(testTama.maxPlayLevel).toEqual(200);
    expect(testTama.hunger).toEqual(5);
  });

  it('should feed tamagotchi', function() {
    testTama.hungry(testTama.hunger);
    testTama.feed(testTama.hunger);
    jasmine.clock().tick(2002);
    expect(testTama.currentFoodLevel).toEqual(150);
    console.log("currentFoodLevel :" + testTama.currentFoodLevel);
  });

  it('should make tamagotchi hungry', function() {
    testTama.hungry(testTama.hunger);
    jasmine.clock().tick(2001);
    expect(testTama.currentFoodLevel).toEqual(145);
    console.log("currentFoodLevel :" + testTama.currentFoodLevel);
  });

  it('should make tamagochi fresh', function() {
    testTama.tired(testTama.sleep);
    jasmine.clock().tick(4001);
    testTama.fresh(testTama.sleep);
    expect(testTama.currentSleepLevel).toEqual(100);
    console.log("currentSleepLevel :" + testTama.currentSleepLevel);
  });

  it('should make tamagochi tired', function() {
    testTama.tired(testTama.sleep);
    jasmine.clock().tick(4001);
    expect(testTama.currentSleepLevel).toEqual(90);
    console.log("currentSleepLevel :" + testTama.currentSleepLevel);
  });

  it('should make tamagochi happy', function() {
    testTama.sad(testTama.play);
    jasmine.clock().tick(5001);
    testTama.happy(testTama.play);
    expect(testTama.currentPlayLevel).toEqual(200);
    console.log("currentPlayLevel :" + testTama.currentPlayLevel);
  });

  it('should make tamagochi sad', function() {
    testTama.sad(testTama.play);
    jasmine.clock().tick(5001);
    expect(testTama.currentPlayLevel).toEqual(198);
    console.log("currentPlayLevel :" + testTama.currentPlayLevel);
  });



});
