const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:2",
    scored: [
        "Lewandowski",
        "Gnarby",
        "Lewandowski",
        "Hummels",
        "Hazard",
        "Gotze",
    ],
    date: "Nov 9th, 2015",
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5,
    },
};

// Challenge 1:
// Task 1: Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;

console.log(players1);
console.log(players2);

// The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
    odds: { team1, x: draw, team2 }, // Renaming x -> draw
} = game;
console.log(team1, draw, team2);

// Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored.`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich"); // Test data.

printGoals(...game.scored);

// The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

// Challenge 2:
// task 1: Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

const goalScorers = function (...players) {
    console.log("Goal Scorer of this game: ");
    for (let i = 0; i < players.length; i++) {
        console.log(`Goal ${i + 1}: ${players[i]}`);
    }
};
goalScorers("Davies", "Muller", "Lewandowski", "Kimmich"); // test

goalScorers(...game.scored);

// Task 1 , alt solution.
for (const [i, player] of game.scored.entries()) {
    console.log(i + 1, player);
}

// Task 2: Use a loop to calculate the average odd and log it to the console
let total = 0;
for (const odd of Object.values(game.odds)) {
    total += odd;
}
console.log(total);
console.log("Avg: " + total / Object.values(game.odds).length);

// Task 3:  Print the 3 odds to the console, but in a nice formatted way,(Don't hard code them for draw.) exactly like this:
//    Odd of victory for Bayern Munich: 1.33
//    Odd of draw: 3.25
//    Odd of victory for Borrussia Dortmund: 6.5

console.log(game.team1);
console.log(game.team2);
for (const [team, odd] of Object.entries(game.odds)) {
    const winningTeam =
        team === "draw" ? "draw" : `${"victory for" + game[team]}`;
    console.log(`Odd of  ${winningTeam}: ${odd}`);
}

/*
Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
   {
   Gnarby: 1,
   Hummels: 1,
   Lewandowski: 2
   }
*/
const scorer = {};
for (const playerName of game.scored) {
    scorer[playerName] ? scorer[playerName]++ : (scorer[playerName] = 1);
    // if (!scorer[playerName]) {
    //     scorer[playerName] = 1;
    // }else{
    //     scorer[playerName] += 1;
    // }
}

console.log(scorer);
