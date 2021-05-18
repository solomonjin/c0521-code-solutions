console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = createPlayers(4);
playGame(players, 2);

function playGame(playerList, numCards) {
  var deck = createDeck();
  deck = _.shuffle(deck);
  for (var i = 0; i < playerList.length; i++) {
    playerList[i].hand = drawCards(deck, numCards);
  }
  console.log('Player\'s Hands:', playerList);
  getScores(playerList);
  var winner = getWinner(playerList);
  var newPlayerList = checkForTies(playerList, winner);
  if (newPlayerList.length > 1) {
    console.log('A tie has occurred so a tie-breaker game will run');
    playGame(newPlayerList, 2);
  } else {
    console.log('The winner is:', winner.name);
  }
}

function createPlayers(numPlayers) {
  var playerArray = [];
  for (var i = 1; i <= numPlayers; i++) {
    playerArray.push({ name: ('Player ' + i), hand: null });
  }
  return playerArray;
}

function createDeck() {
  var deck = [];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  for (var i = 0; i < suits.length; i++) {
    for (var n = 0; n < ranks.length; n++) {
      deck.push({ rank: ranks[n], suit: suits[i] });
    }
  }
  return deck;
}

function drawCards(deck, numCards) {
  var drawnCards = [];
  for (var i = 0; i < numCards; i++) {
    var card = deck[Math.floor(Math.random() * deck.length)];
    drawnCards.push(card);
    deck.splice(deck.indexOf(card), 1);
  }
  return drawnCards;
}

function getScores(players) {
  for (var i = 0; i < players.length; i++) {
    var score = 0;
    for (var n = 0; n < players[i].hand.length; n++) {
      if (players[i].hand[n].rank === 'A') score += 11;
      else if (players[i].hand[n].rank === 'J' || players[i].hand[n].rank === 'Q' || players[i].hand[n].rank === 'K') score += 10;
      else {
        score += parseInt(players[i].hand[n].rank);
      }
    }
    players[i].score = score;
  }
}

function getWinner(players) {
  var winner = players[0];
  for (var i = 1; i < players.length; i++) {
    if (players[i].score > winner.score) winner = players[i];
  }
  return winner;
}

function checkForTies(players, winner) {
  var newPlayerList = [];
  for (var i = 0; i < players.length; i++) {
    if (players[i].score === winner.score) newPlayerList.push(players[i]);
  }
  return newPlayerList;
}

// STEPS FOR GAME
// Create an array of 4 player objects each with a name and a hand to hold cards
// Function to create an array containing a number of players
// Create an empty array literal
// Create a for loop starting from 1 and ending on numPlayers
// For each iteration, create an empty object literal and assign properties name to value 'Player i' and an empty cards value
// push the object into the players array
// return the players array

// Create a card deck (ace to king, 4 suits)
// Create an empty array
// Create an array containing strings of card ranks and another array containing the card's rank
// Loop through each of the suits
//    Loop through each of the ranks
//        For each rank, push an object containing properties rank and suit
// return the array

// Shuffle the deck (Lodash .shuffle)

// Each player draws 2 cards (Players can not receive the same card) // Have to remove the drawn card from deck
// For each player in player array, draw 2 cards, remove them from the deck and assign them to each player's hand property as an array

// Tally up total score of each player
// For each player, loop through each of the cards in their hand
// get the value of the cards and add it to variable score
// assign the value of score to a players.score property. Function doesn't need to return anything

// Check for ties, if there is a tie, have those players draw cards until there is a winner
// Check for ties first: Take the current winner and the playerList as arguments
// Create an empty array
// Loop through the playerList and check if the current winner's score is equal to any of the other players' scores
// If scores are equal, return push that player to new array
// return array

// In main function to run game:
// After getWinner(), check if there was a tie, store it in a variable, newPlayerList
// If newPlayerList is NOT an empty array:
//    Log that a tie has occurred and announce that a tie-breaker will occur
//    run playGame() again with the new playerList
// else: log out the winner

// Log winning player to console
