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
    inventory: {
      'Pixie Dust': 0,
      'Human Bone': 0,
      // TODO: etc....
      dragonsBlood: 0,
      humanBone: 0,
      UnicornHorn: 0,
      PhoenixFeather: 0,
      CrazyMushroom: 0,
      SnakeOil: 0,
      GiantSpiderLeg: 0,
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
      console.log('debt paid');
    } else {
      console.log('not enough money!');
    }
  });




  ///////////////////////PRODUCTS////////////////
  ///////////////////////PIXIE/DUST////////////////////
  const $currentDisplayPricePixieDust = $('#currentPricePixieDust');
  const $currentDisplayAmountPixieDust = $('#amountAvailablePixieDust');

  function randomRange(range) {
    const min = range[0];
    const max = range[1];
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createItem(name, priceRange, quantityRange, quantityDivId, inventoryDivId, buyButtonId) {
    const item = {
      name: name,
      randomPriceRange: priceRange,
      randomQuantityRange: quantityRange,
      recalculateMarket: recalculateMarket,
      $quantityDiv: $(`#${quantityDivId}`),
      $inventoryDiv: $(`#${inventoryDivId}`),
      $buyButton: $(`#${buyButtonId}`)
    }
    item.recalculateMarket();
    return item;
  }

  function recalculateMarket() {
    this.currentPrice = randomRange(this.randomPriceRange);
    this.amountAvailable = randomRange(this.randomQuantityRange);
  }

  function displayValue($domElement, value) {
    $domElement.text(value);
  }

  const pixieDust = createItem('Pixie Dust', [100, 450], [1, 20], 'amountAvailablePixieDust', 'myPixieDust', 'buyPixieDust');
  displayCurrentItemMarket(pixieDust);
  const humanBone = createItem('Human Bone', [1000, 2500], [8, 12], 'amountAvailableHumanBone', 'myHumanBone', 'buyHumanBone');

  function displayAllItemValues() {
    displayValue($currentDisplayPricePixieDust, pixieDust.currentPrice);
    displayValue($currentDisplayAmountPixieDust, pixieDust.amountAvailable);
    displayValue($('currentPriceHumanBone'), humanBone.currentPrice);
    displayValue($('amountAvailableHumanBone'), humanBone.amountAvailable);
    // etc...
  }
  displayAllItemValues();

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
      } else {
        alert(`You cannot buy ${item.name} anymore! Sucks to be you.`);
      }
    });
  }

  addBuyClickListener(pixieDust);
  addBuyClickListener(humanBone);


  ////////////////////SELL BUTTON///////////////



  //////////////////TURN COUNTER & NEXT TURN/////

  let turnCounter = initialTurns;
  let $turnCounter = $('#turnCounter');

  $nextTurn.on('click', () => {
    if (turnCounter >= 1) {
      console.log('you have 1+ turns');
      turnCounter = (turnCounter - 1);
      $turnCounter.html(turnCounter);
      character.debtBalance =  (character.debtBalance * 1.1);
      $debtBalance.html((character.debtBalance).toFixed(2));
      pixieDust.amountAvailable = getRandomAmountAvailabe(1, 20);
      $currentDisplayAmountPixieDust.html(`${pixieDust.amountAvailable}`);
      pixieDust.currentPrice = getCurrentRandomPrice(100, 450);
      $currentDisplayPricePixieDust.html(`${pixieDust.currentPrice}`);
    } else if (character.debtBalance > 0) {
      alert('You loose! The goblin loan shark has cut your debt out of your flesh... fun times!');
    } else if (character.debtBalance === 0) {
      alert(`You win, your score is ${character.bankBalance}`);
    }

  });


//////////////////////////////////////////////
// Product-related functions
//////////////////////////////////////////////
function displayNewMarket(product) {}



  console.log(pixieDust);



});
