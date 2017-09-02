var totalCash = document.getElementById('accumulator');

var smallButton = document.getElementsByName('smallButton');
var longButton = document.getElementsByName('longButton');
var bossButton = document.getElementsByName('bossButton');

// UPDATE THE LOG
var smallList1 = document.getElementById('smallList1');
var smallList2 = document.getElementById('smallList2');
var smallList3 = document.getElementById('smallList3');
var smallList4 = document.getElementById('smallList4');
var smallList5 = document.getElementById('smallList5');

function updateLog(){
  smallList1.innerHTML = mostRecent[0];
  smallList2.innerHTML = mostRecent[1];
  smallList3.innerHTML = mostRecent[2];
  smallList4.innerHTML = mostRecent[3];
  smallList5.innerHTML = mostRecent[4];
}

var yourCashAccum = 0;

var mostRecent = ['-','-','-','-','-'];

// SMALL BUTTON CLICK
function smallButtonClick() {
  // RANDOM NUMBER BETWEEN 10 AND 20 WITH TWO DECIMAL POINTS
  var smallRandom = parseFloat(((Math.random()*10)+10).toFixed(2));

  // LOG THE LAST 5 RECENT QUESTS
  if (mostRecent.length > 4) {
    mostRecent.shift();
    mostRecent.push(smallRandom);
    //smallList.innerHTML = mostRecent;
    updateLog();
  } else {
    mostRecent.push(smallRandom);
    //smallList.innerHTML = mostRecent;
    updateLog();
  }

  // INCREASE THE ACCUMULATOR AND UPDATE HTML FILE
  yourCashAccum += smallRandom;
  yourCashAccum = parseFloat(yourCashAccum.toFixed(2));
  totalCash.innerHTML = yourCashAccum;
}

// LONG BUTTON CLICK
function longButtonClick() {
  // RANDOM NUMBER BETWEEN 30 AND 50 WITH TWO DECIMAL POINTS
  var longRandom = parseFloat(((Math.random()*20)+30).toFixed(2));

  // LOG THE LAST 5 RECENT QUESTS
  if (mostRecent.length > 4) {
    mostRecent.shift();
    mostRecent.push(longRandom);
    //smallList.innerHTML = mostRecent;
    updateLog();
  } else {
    mostRecent.push(longRandom);
    //smallList.innerHTML = mostRecent;
    updateLog();
  }

  // INCREASE THE ACCUMULATOR AND UPDATE HTML FILE
  yourCashAccum += longRandom;
  yourCashAccum = parseFloat(yourCashAccum.toFixed(2));
  totalCash.innerHTML = yourCashAccum;
}

// BOSS BUTTON CLICK
function bossButtonClick() {
  // RANDOM NUMBER BETWEEN 30 AND 50 WITH TWO DECIMAL POINTS
  var bossRandom = parseFloat(((Math.random()*30)+70).toFixed(2));

  // LOG THE LAST 5 RECENT QUESTS
  if (mostRecent.length > 4) {
    mostRecent.shift();
    mostRecent.push(bossRandom);
    //smallList.innerHTML = mostRecent;
    updateLog();
  } else {
    mostRecent.push(bossRandom);
    //smallList.innerHTML = mostRecent;
    updateLog();
  }

  // INCREASE THE ACCUMULATOR AND UPDATE HTML FILE
  yourCashAccum += bossRandom;
  yourCashAccum = parseFloat(yourCashAccum.toFixed(2));
  totalCash.innerHTML = yourCashAccum;
}
