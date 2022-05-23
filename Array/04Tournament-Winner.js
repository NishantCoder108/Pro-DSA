/**
 * we are playing tournament game , that must have two teams, One Win and Other lose,
 * We can assume ,we have 2D array , in every  array have must two strings
 * we have to find , which string have more score, are won thats will be return.
 * Elaborate:- we can see with the help of results ,which are won 
 * 0 = home team  and  1  = away team
 * e.g.
 * [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
]
 * results = [0, 0, 1]
 */



//O(n)time | O(k + 1)space
/**
 * n :- Number of competion | k :- Number of teams
 * we first consider ,what team won ,for comparing 
 * we can make ,current best team variable ,for return in last
 * scores variable keep all best team with his score
 * we can iterate whole array 
 * we can separate won index value from result
 * we can also separate on every iteration , home team and away team
 * Comparing result === home team won ,that will be winning team
 * Score updation and new create team ,with update score function
 * comparing winning team is greater than from current best team
 * if yes, currentbest team = winning team
 * Finally return currrent best team
 */
function tournamentWinner(competitions, results) {

  const Home_Team_Won = 1;//define in question
  let currentBestTeam = "";
  const scores = { [currentBestTeam]: 0 };

  for (let idx = 0; idx < competitions.length; idx++) {
    const result = results[idx];
    const [homeTeam, awayTeam] = competitions[idx];

    const winningTeam = result === Home_Team_Won ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);//update score or create team 

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}

function updateScores(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;

  scores[team] += points;
}

Input: competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
results = [0, 0, 1];

Output: "Python";

console.log(tournamentWinner(competitions, results));



//Tips & Tricks
/**
 * ---Pattern---
 * Pairs of array, Compare| Competition | GAme
 * REsult | Output
 */