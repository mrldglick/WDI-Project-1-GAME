$(() => {
  const initialMoney = 2000;
  const initialHealth = 10;
  const initialTurns = 30;
  const initialDebtBalance = 4000;
  const interestRate = 0.1;
  const initialBankBalance = 0;
  // etc...
  //////////////////Character///////////////////////


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
    debtBalance: initialDebtBalance,


    $payDebt.on('click', () => {
      if(this.bankBalance >= this.debtBalance) {
        this.bankBalance - this.debtBalance;
        $debtBalance.html(character.debtBalance);
        console.log('debt paid');
      } else {
        console.log('not enough money!');
      }
    }
  };
  // let turnsRemaining = initialTurns;
  console.log('paying debt...');
  character.payDebt();

  $money.html(`${character.money}`);
  $health.html(`${character.health}`);
  $myPixieDust.html(`${character.myPixieDust}`);
  $bankBalance.html(`${character.bankBalance}`);
  $debtBalance.html(`${character.debtBalance}`);
  ///////////////////////BUY/SELL/ITEMS////////////////

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

  console.log(pixieDust);

  ///////////////////////DRAGONS/BLOOD////////////////////


  //   const $currentDisplayDragonBlood = $('#currentPricedragonBlood');
  //
  //   let dragonBlood ={
  //     currentPrice: 5,
  //     amountAvailable: 10
  //
  //   };
  //
  //   $currentDisplaydragonBlood.html(`£${dragonBlood.currentPrice}`);
  //
  //   console.log(dragonBlood);
  // ################################################
  //
  //   const $currentPriceDisplayPixieDust = $('#currentPricePixieDust');
  //
  //   let pixieDust ={
  //     currentPrice: 5,
  //     amountAvailable: 10
  //
  //   };
  //
  //   $currentPriceDisplayPixieDust.html(`£${pixieDust.currentPrice}`);
  //
  //   console.log(pixieDust);
  //
  //
  //   const $currentPriceDisplayPixieDust = $('#currentPricePixieDust');
  //
  //   let pixieDust ={
  //     currentPrice: 5,
  //     amountAvailable: 10
  //
  //   };
  //
  //   $currentPriceDisplayPixieDust.html(`£${pixieDust.currentPrice}`);
  //
  //   console.log(pixieDust);
  //
  //   const $currentPriceDisplayPixieDust = $('#currentPricePixieDust');
  //
  //   let pixieDust ={
  //     currentPrice: 5,
  //     amountAvailable: 10
  //
  //   };
  //
  //   $currentPriceDisplayPixieDust.html(`£${pixieDust.currentPrice}`);
  //
  //   console.log(pixieDust);
  //
  //   const $currentPriceDisplayPixieDust = $('#currentPricePixieDust');
  //
  //   let pixieDust ={
  //     currentPrice: 5,
  //     amountAvailable: 10
  //
  //   };
  //
  //   $currentPriceDisplayPixieDust.html(`£${pixieDust.currentPrice}`);
  //
  //   console.log(pixieDust);
  //
  //   const $currentPriceDisplayPixieDust = $('#currentPricePixieDust');
  //
  //   let pixieDust ={
  //     currentPrice: 5,
  //     amountAvailable: 10
  //
  //   };
  //
  //   $currentPriceDisplayPixieDust.html(`£${pixieDust.currentPrice}`);
  //
  //   console.log(pixieDust);
  //
  //   const $currentPriceDisplayPixieDust = $('#currentPricePixieDust');
  //
  //   let pixieDust ={
  //     currentPrice: 5,
  //     amountAvailable: 10
  //
  //   };
  //
  //   $currentPriceDisplayPixieDust.html(`£${pixieDust.currentPrice}`);
  //
  //   console.log(pixieDust);


});
