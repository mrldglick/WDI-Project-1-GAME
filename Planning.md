-MVP-

————————————————————————————

Top of screen

Character=
Money:
/?/Health/?/:

Turns Left=
Turn Counter Countdown:

Bank=
Balance:
Debt:
Pay debt [button] (debt must be paid as a whole)

—————————————————————————

Middle of screen (Market)

Product 1-8=
Current Price:
Amount available:

// not stored but visible//
Amount owned:  (stored in character)
Buy / Sell [button].
// not stored but visible //


1. Pixie Dust
2. Dragons Blood
3. Human Bone
4. Unicorn Horn
5. Phoenix Feather
6. Crazy Mushroom
7. Snake Oil
8. Giant Spider Leg

———————————————————————————

Bottom of screen

Next turn [button]
/?/change city/?/

——————————————————————————————
——————————————————————————————

Features to add after MVP:
* Start game screen & button
* Opening story text, i.e. You wake up and realise you owe a goblin money….
* Chang location - new location has different margins on product prices.
* Random encounters where you might be mugged and loose a random % of cash, and 1 health from character object.
* Random chance of being attacked during buy/sale of items resulting in loss of 1 health.
* Music/Sound effects (zelda goran shop).
* Score feature calculated from profit in bank after turns run out.
* Ability to play with variable amount of turns.

——————————————————————————————
——————————————————————————————



Breakdown of features and variables

‘Character’ is an OBJECT and contains:

- Money
- Health     //if health reaches 0 end game, you loose//
- Amount owned of Pixie Dust
- Amount owned of Dragons Blood
- Amount owned of Human Bone
- Amount owned of Unicorn Horn
- Amount owned of Phoenix Feather
- Amount owned of Crazy Mushroom
- Amount owned of Snake Oil
- Amount owned of Giant Spider Leg

‘Turns Left’ is a LET:

Defined by a countdown function that goes down on pressing ‘next turn’ button at bottom of page.
Once at zero the game is stopped.
If you still owe money you loose.
Else, the money in your balance is used to calculate your score.
// Introduce 1-10 random encounter chance each turn which removes a random % of Character object money + 1 health//


‘Bank’:

‘Bank’ is a div and heading that contains -


- Balance:

Balance is LET variable and function.
You move a chosen amount from ‘money’(in character) and push it into Balance variable while removing it from ‘money’. Using bank causes you to move to next turn.    [Possible to move balance into character object]

- Debt:

‘Debt’ is a LET variable with its value derived from a function that increases its total on a turn by turn basis. The amount it increase is by 10% or the current turns value, not the value that was present at the start of the game. This ensures compound interest.  [Possible to move balance into character object]

- Pay Debt:

‘Pay Debt’ is a click event listener function that first determines if your balance is equal or greater to your debt. If that is the case it subtracts the value of debt from the value of your balance and then changes the value of debt to 0. For the sake of convenience, debt must be paid in whole. After all, goblins want to spend as little time with humans as possible.  Paying debt causes you to move to next turn.


Turn Counter:

‘Turn counter’ is a LET variable with a value of 30.


Market:

‘Market’ is the div that frames the product menu within the main section of the page


Product #:

Each one of the eight products there is a separate object consisting of the products current price, and current availability. The value of these are determined by a random number generator function operating with a set floor and ceiling.  


Buy Product #:

‘Buy’ consists of a click event listener function tied to a button/div.
It determines whether ‘characters’ money value is greater or equal to the current price value of ‘Product #’, and whether the current product availability is greater than 0.
If it is it then minus the price value from the money value.
It then removes 1 from the value of ‘Product #’s’ product availability.
Then it adds one to the value of ‘Character’s’ amount owned.
If the price value is greater than the ‘character’s’ money value all that happens is an alert is sent informing the player that they cannot make the transaction due to lack of funds.
	// Once operational see about changing it to an input where in you can type the amount of product you wish to buy rather than having to make lots of single transactions.
	// Introduce a random chance on each transaction of the authorities noticing the characters actions. This results in an alert and the character loosing 1 HP. If characters HP hits 0 then the game is ended.


Sell Product #:

‘Sell’ consists of a click event listener function tied to a button/div.
It determines whether ‘characters’ product amount owned is greater than 0.
If it is, then minus 1 from the amount owned and add 1 to the amount available. Then add the current price value to the characters money value.
If the product owned is equal to zero all that happens is an alert is sent informing the player that they cannot make the transaction due to lack of product.
	// Once operational see about changing it to an input where in you can type the amount of product you wish to sell rather than having to make lots of single transactions.
	// Introduce a random chance on each transaction of the authorities noticing the characters actions. This results in an alert and the character loosing 1 HP. If characters HP hits 0 then the game is ended.


Next Turn:

‘Next Turn’ consists of a click event listener function tied to a button/div.
It determines whether ’Turn counter is equal or greater than 1.
If it is it removes 1 from the value of turn counter.
It then refreshes the values of the products current price and availability, and then times your debt by 1.1 replaces it with the new value.

If the value of turn counter is equal to 1 then it ends the game.
If the game ends with debt greater than 0 then the player receives an alert telling them that they loose.
Else, an alert is sent to the player containing their current bank balance as their end of game score.
The game window is refreshed.

	//Once MVP is achieved, try to introduce randomised mugging encounters that result in a % of character objects money being lost along with 1 health.
