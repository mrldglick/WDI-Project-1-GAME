$(() => {
  const $currentPriceDisplayPixieDust = $('#currentPricePixieDust');

  let pixieDust ={
    currentPrice: 5,
    amountAvailable: 10

  };

  $currentPriceDisplayPixieDust.html(`£${pixieDust.currentPrice}`);

  console.log(pixieDust);


});
