$(() => {

  ///////////////////VARIALBES///////////////
  const initialMoney = 2000;
  const initialHealth = 10;
  const initialTurns = 30;
  const initialDebtBalance = 4000;
  const interestRate = 0.1;
  const initialBankBalance = 0;
  const $money = $('#money');
  const $health = $('#health');
  const $myPixieDust = $('#myPixieDust');
  // const $myDragonsBlood =
  // const $myHumanBone =
  // const $myUnicornHorn =
  // const $myPhoenixFeather =
  // const $myCrazyMushroom =
  // const $mySnakeOil =
  // const $myGiantSpiderLeg =
  const $bankBalance = $('#bankBalance');
  const $debtBalance = $('#debtBalance');
  const $payDebt = $('#payDebt');
  const $nextTurn = $('#nextTurn');
  // let turnsRemaining = initialTurns;


  ////////////////////CHARACTER//////////////
  const character = {

    money: initialMoney,
    health: initialHealth,

    myPixieDust: 0,
    myDragonsBlood: 0,
    myHumanBone: 0,
    myUnicornHorn: 0,
    myPhoenixFeather: 0,
    myCrazyMushroom: 0,
    mySnakeOil: 0,
    myGiantSpiderLeg: 0,

    bankBalance: initialBankBalance,
    debtBalance: initialDebtBalance
  };

  $payDebt.on('click', () => {
    console.log(character.bankBalance);
    if(character.bankBalance >= character.debtBalance) {
      character.bankBalance - character.debtBalance;
      $debtBalance.html(character.debtBalance);
      console.log('debt paid');
    } else {
      console.log('not enough money!');
    }
  });



  $money.html(`${character.money}`);
  $health.html(`${character.health}`);
  $myPixieDust.html(`${character.myPixieDust}`);
  $bankBalance.html(`${character.bankBalance}`);
  $debtBalance.html(`${character.debtBalance}`);


  ///////////////////////PRODUCTS////////////////
  ///////////////////////PIXIE/DUST////////////////////
  const $currentDisplayPricePixieDust = $('#currentPricePixieDust');
  const $currentDisplayAmountPixieDust = $('#amountAvailablePixieDust');

  let pixieDust ={
    currentPrice: getCurrentRandomPrice(100, 450),
    amountAvailable: getRandomAmountAvailabe(1, 20)
  };

  function getCurrentRandomPrice(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getRandomAmountAvailabe(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  $currentDisplayPricePixieDust.html(`${pixieDust.currentPrice}`);

  $currentDisplayAmountPixieDust.html(`${pixieDust.amountAvailable}`);

  const $buyPixieDust = $('#buyPixieDust');

  $buyPixieDust.on('click', () => {
    if (character.money >= pixieDust.currentPrice && pixieDust.amountAvailable > 0) {
      console.log('you can buy');
      character.money = (character.money - pixieDust.currentPrice);
      character.myPixieDust++;
      pixieDust.amountAvailable = (pixieDust.amountAvailable - 1);
      console.log(character);
      $currentDisplayAmountPixieDust.html(pixieDust.amountAvailable);
      $money.html(character.money);
      $myPixieDust.html(character.myPixieDust);
    } else {
      alert('You cannot buy anymore! Sucks to be you.');
    }
  });
  //////////////////TURN COUNTER & NEXT TURN/////

  let turnCounter = initialTurns;
  let $turnCounter = $('#turnCounter');

  $nextTurn.on('click', () => {
    if (turnCounter >= 1) {
      console.log('you have 1+ turns');
      turnCounter = (turnCounter - 1);
      $turnCounter.html(turnCounter);
      character.debtBalance =  (character.debtBalance * 1.1);
      $debtBalance.html(character.debtBalance);
      pixieDust.amountAvailable = getRandomAmountAvailabe(1, 20);
      $currentDisplayAmountPixieDust.html(`${pixieDust.amountAvailable}`);
      pixieDust.currentPrice = getCurrentRandomPrice(100, 450);
      $currentDisplayPricePixieDust.html(`${pixieDust.amountAvailable}`);
    } else if (character.debtBalance > 0) {
      alert('You loose! The goblin loan shark has removed your debt from your flesh...');
    } else if (character.debtBalance === 0) {
      alert(`You win, your score is ${character.bankBalance}`);
    }

  });






  console.log(pixieDust);



});
