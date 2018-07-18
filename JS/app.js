$(() => {

  ///////////////////VARIALBES///////////////
  const $money = $('#money');
  const $health = $('#health');
  const $bankBalance = $('#bankBalance');
  const $debtBalance = $('#debtBalance');
  const $payDebt = $('#payDebt');
  const $nextTurn = $('#nextTurn');
  const $buttonDeposit = $('#buttonDeposit');
  const $inputDeposit = $('#inputDeposit');
  const encounterChance = 0.05;
  const initialMoney = 2000;
  const initialHealth = 10;
  const initialTurns = 30;
  const initialDebtBalance = 4000;
  const initialBankBalance = 0;
  // let turnsRemaining = initialTurns;


  ////////////////////CHARACTER//////////////
  const character = {
    money: initialMoney,
    health: initialHealth,
    inventory: {
      'Pixie Dust': 0,
      'Human Bone': 0,
      'Phoenix Feather': 0,
      'Dragon Blood': 0,
      'Unicorn Horn': 0,
      'Crazy Mushroom': 0,
      'Snake Oil': 0,
      'Giant Spider Leg': 0
    },
    bankBalance: initialBankBalance,
    debtBalance: initialDebtBalance
  };

  $money.html(`${character.money}`);
  $health.html(`${character.health}`);
  $bankBalance.html(`${character.bankBalance}`);
  $debtBalance.html(`${character.debtBalance}`);

  /////////////////PAY DEBT BUTTON /////////////

  $payDebt.on('click', () => {
    console.log(character.bankBalance);
    if(character.bankBalance >= character.debtBalance) {
      character.bankBalance - character.debtBalance;
      $debtBalance.html(character.debtBalance);
      nextTurn();
      console.log('debt paid');
    } else {
      console.log('not enough money!');
    }
  });

  ////////////////////DEPOSIT INPUT///////////////////

  $buttonDeposit.on('click', () => {
    const deposit = $inputDeposit.val();
    character.money = character.money - parseFloat(deposit);
    character.bankBalance = character.bankBalance + parseFloat(deposit);
    $money.html(character.money);
    $bankBalance.html(character.bankBalance);
    nextTurn();
    $inputDeposit.val('');
  });


  //////////////////////Products(Items)////////////////

  function randomRange(range) {
    const min = range[0];
    const max = range[1];
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createItem(name, priceRange, quantityRange, quantityDivId, inventoryDivId, buyButtonId, currentDisplayPrice, amountAvailable, sellButtonId) {
    const item = {
      name: name,
      randomPriceRange: priceRange,
      randomQuantityRange: quantityRange,
      recalculateMarket: recalculateMarket,
      $quantityDiv: $(`#${quantityDivId}`),
      $inventoryDiv: $(`#${inventoryDivId}`),
      $buyButton: $(`#${buyButtonId}`),
      $currentDisplayPrice: $(`#${currentDisplayPrice}`),
      $currentDisplayAmount: $(`#${amountAvailable}`),
      $sellButton: $(`#${sellButtonId}`)
    };
    item.recalculateMarket();
    return item;
  }

  function recalculateMarket() {
    this.currentPrice = randomRange(this.randomPriceRange);
    this.amountAvailable = randomRange(this.randomQuantityRange);
    displayValue(this.$currentDisplayPrice, this.currentPrice);
    displayValue(this.$currentDisplayAmount, this.amountAvailable);
  }

  function displayValue($domElement, value) {
    $domElement.text(value);
  }

  const allItems = [];

  const pixieDust = createItem('Pixie Dust', [100, 450], [0, 20], 'amountAvailablePixieDust', 'myPixieDust', 'buyPixieDust', 'currentPricePixieDust', 'amountAvailablePixieDust', 'sellPixieDust');

  const humanBone = createItem('Human Bone', [1600, 3000], [0, 12], 'amountAvailableHumanBone', 'myHumanBone', 'buyHumanBone', 'currentPriceHumanBone', 'amountAvailableHumanBone', 'sellHumanBone');

  const phoenixFeather = createItem('Phoenix Feather', [500, 1300], [0, 32], 'amountAvailablePhoenixFeather', 'myPhoenixFeather', 'buyPhoenixFeather', 'currentPricePhoenixFeather', 'amountAvailablePhoenixFeather', 'sellPhoenixFeather');

  const dragonBlood = createItem('Dragon Blood', [7000, 12500], [0, 11], 'amountAvailableDragonBlood', 'myDragonBlood', 'buyDragonBlood', 'currentPriceDragonBlood', 'amountAvailableDragonBlood', 'sellDragonBlood');

  const unicornHorn = createItem('Unicorn Horn', [10, 250], [0, 80], 'amountAvailableUnicornHorn', 'myUnicornHorn', 'buyUnicornHorn', 'currentPriceUnicornHorn', 'amountAvailableUnicornHorn', 'sellUnicornHorn');

  const crazyMushroom = createItem('Crazy Mushroom', [330, 1100], [0, 18], 'amountAvailableCrazyMushroom', 'myCrazyMushroom', 'buyCrazyMushroom', 'currentPriceCrazyMushroom', 'amountAvailableCrazyMushroom', 'sellCrazyMushroom');

  const snakeOil = createItem('Snake Oil', [100, 250], [2, 22], 'amountAvailableSnakeOil', 'mySnakeOil', 'buySnakeOil', 'currentPriceSnakeOil', 'amountAvailableSnakeOil', 'sellSnakeOil');

  const giantSpiderLeg = createItem('Giant Spider Leg', [11000, 44500], [0, 8], 'amountAvailableGiantSpiderLeg', 'myGiantSpiderLeg', 'buyGiantSpiderLeg', 'currentPriceGiantSpiderLeg', 'amountAvailableGiantSpiderLeg', 'sellGiantSpiderLeg');


  allItems.push(pixieDust, humanBone, phoenixFeather, dragonBlood, unicornHorn, crazyMushroom, snakeOil, giantSpiderLeg);




  /////////////////////BUY BUTTON///////////////

  function itemCanBeBought(item) {
    return character.money >= item.currentPrice && item.amountAvailable > 0;
  }

  function buyItem(item) {
    character.money = (character.money - item.currentPrice);
    console.log(character.inventory);
    character.inventory[item.name]++;
    item.amountAvailable = (item.amountAvailable - 1);
  }

  function displayCurrentItemMarket(item) {
    item.$quantityDiv.html(item.amountAvailable);
    $money.html(character.money);
    item.$inventoryDiv.html(character.inventory[item.name]);
  }

  function addBuyClickListener(item) {
    item.$buyButton.on('click', () => {
      if (itemCanBeBought(item)) {
        console.log(`you can buy ${item.name}`);
        buyItem(item);
        console.log(character);
        displayCurrentItemMarket(item);
        randomEncounter();
      } else {
        alert(`You cannot buy ${item.name}! Sucks to be you.`);
      }
    });
  }


  allItems.forEach(item => addBuyClickListener(item));

  console.log('this is the items object ->', allItems);


  allItems.forEach(item => displayCurrentItemMarket(item));
  ////////////////////SELL BUTTON///////////////


  function itemCanBeSold(item) {
    return character.inventory[item.name] > 0;
  }

  function sellItem(item) {
    character.money = (character.money + item.currentPrice);
    console.log(character.inventory);
    character.inventory[item.name]--;
    item.amountAvailable += 1;
  }

  function addSellClickListener(item) {
    item.$sellButton.on('click', () => {
      if (itemCanBeSold(item)) {
        console.log(`you can sell ${item.name}`);
        sellItem(item);
        console.log(character);
        displayCurrentItemMarket(item);
        randomEncounter();
      } else {
        alert(`You cannot sell ${item.name}! You dont own any, idoit!`);
      }
    });
  }
  allItems.forEach(item => addSellClickListener(item));
  //////////////////TURN COUNTER & NEXT TURN/////

  let turnCounter = initialTurns;
  const $turnCounter = $('#turnCounter');

  $nextTurn.on('click', nextTurn);

  function nextTurn() {
    if (turnCounter >= 1) {
      console.log('you have 1+ turns');
      turnCounter = (turnCounter - 1);
      $turnCounter.html(turnCounter);
      character.debtBalance =  (character.debtBalance * 1.1);
      $debtBalance.html((character.debtBalance).toFixed(2));
      allItems.forEach(item => item.recalculateMarket());
      randomEncounter();

    } else if (character.debtBalance > 0) {
      alert('You loose! The goblin loan shark has cut your debt out of your flesh... fun times!');
    } else if (character.debtBalance === 0) {
      alert(`You win, your score is ${character.bankBalance}`);
    }
  }
  //////////////////////Random Encounters//////////////////////////////////

  const encounters = [
    { message: 'You got mugged by a fairy! You are pretty damn pathetic. -1 health, -25% of charcter money.'},
    {message: 'You got attacked by a talking bunny! Its like you want to prove Darwin wrong. -1 health, -25% of charcter money.'},
    {message: 'You tripped over a gnome and fell in a well. You are soggy and smell of frog poo. -1 health, -25% of charcter money.'},
    {message: 'Stink from the sky!! A dragon has flown over you and decided your outfit could do with a paint job. You smell like a dragons outhouse. According to folklore this is lucky?  -1 health, -25% of charcter money.'},
    {message: 'A beautiful elf woman leads you into an alley. You wake up sore and ashamed. -1 health, -25% of charcter money.'},
    {message: 'A beautiful elf woman leads you into an alley. You wake up sore and ashamed. -1 health, -25% of charcter money.'}

  ];

  function randomEncounter(){
    if (criticalFail()) {
      const encounter = randomChoiceFromArray(encounters);
      // Handle the encounter
      alert(encounter.message);
      // if (rollDice(encounter.healthLossRisk)) {
      // lose health
      character.health = character.health - 1;
      character.money = character.money * 0.25;
      $money.html((character.money).toFixed(2));
      $health.html(`${character.health}`);
      if (character.helth === 0) {
        alert('You have died. Obviously this means you have lost.');
        window.reset();
      }
    }
    // then the same for money loss risk
  }
  // TODO: After the encounter, check for character health and maybe die!?


  function criticalFail() {
    return Math.random() < encounterChance;
  }

  function randomChoiceFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }


  //create function around a random chance genrator (probably 'maths.random') which will if you health is greater than 1 subtract 1 health from character.health, and then create an alert to tell you that you have been attacked. If however you have health is equal to 1 it will send you an alert telling you that you have been attacked, died, and lost, then it will reset the window.

  // place thisd function whithin the nextTurn functions first if statement, and first if statement for the clickListener of buy and sell


});
