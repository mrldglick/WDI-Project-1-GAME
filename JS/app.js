$(() => {
  const initialMoney = 2000;
  const initialHealth = 10;
  const initialTurns = 30;
  const initialDebtBalance = 4000;
  const interestRate = 0.1;
  const initialBankBalance = 0;
  // etc...
//////////////////Character///////////////////////
  const character = {
    money: initialMoney,
    health: initialHealth,
    // etc ...
    bankBalance: initialBankBalance,
    debtBalance: initialDebtBalance,
    payDebt: () => {
      if(this.bankBalance >= this.debtBalance) {
        console.log('debt paid');
      } else {
        console.log('not enough money!');
      }
    }
  }
  let turnsRemaining = initialTurns;

  console.log('paying debt...');
  character.payDebt();

///////////////////////BUY/SELL/ITEMS////////////////

///////////////////////PIXIE/DUST////////////////////
  const $currentDisplayPricePixieDust = $('#currentPricePixieDust');

  const $currentDisplayAmountPixieDust = $('#amountAvailablePixieDust');

  let pixieDust ={
    currentPrice: 5,
    amountAvailable: 10

  };

  $currentDisplayPricePixieDust.html(`£${pixieDust.currentPrice}`);

  $currentDisplayAmountPixieDust.html(`£${pixieDust.amountAvailable}`);

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
