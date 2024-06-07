let outs = 0;
let curInning = 1;
let vAtBat = true;
let vOrder = 0;
let hOrder = 0;
let vScore = 0;
let hScore = 0;
let theBase = 0;
let isOut = false;
let vInningScore = 0;
let hInningScore = 0;
let vHits = 0;
let hHits = 0;
let vError = 0;
let hError = 0;
let extraInning = 0;
let theScoreBoard = "";
let currentPitch = "";

var vBatter = [];
var hBatter = [];
var runners = "0,0,0";
const visitingTeam = "Angry Beavers";
const homeTeam = "O-Town Spitballs";

window.onload = function () {
  theScoreBoard = document.querySelector("#scoreboard").innerHTML;
};

//Eventually make this player names and positions for home and visitor via DB
const visitingTeamArray = [
  {
    position: "Pitcher",
    playerName: "Norbert Beaver",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
  {
    position: "Catcher",
    playerName: "Daggett Beaver",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
  {
    position: "First Base",
    playerName: "Barry Bear",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
  {
    position: "Second Base",
    playerName: "Muscualr Beaver",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
  {
    position: "Third Base",
    playerName: "Stump",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
  {
    position: "ShortStop",
    playerName: "Treeflower",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
  {
    position: "Left Field",
    playerName: "Oxnard Montalvo",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
  {
    position: "Center Field",
    playerName: "Slap Johnson",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
  {
    position: "Right Field",
    playerName: "Loogie Hawk",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
];

const homeTeamArray = [
  {
    position: "Pitcher",
    playerName: "Rocko Rama",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
  {
    position: "Catcher",
    playerName: "Heffer Wolfe",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
  {
    position: "First Base",
    playerName: "Filburt Turtle",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
  {
    position: "Second Base",
    playerName: "Spunky",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
  {
    position: "Third Base",
    playerName: "Ed Bighead",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
  {
    position: "ShortStop",
    playerName: "Bev Bighead",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
  {
    position: "Left Field",
    playerName: "Leon Chameleon",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
  {
    position: "Center Field",
    playerName: "Dr. Hutchison",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
  {
    position: "Right Field",
    playerName: "Really Really Big Man",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr: 0,
  },
];

function playNewGame() {
  document.querySelector("#scoreboard").innerHTML = theScoreBoard;
  outs = 0;
  curInning = 1;
  vAtBat = true;
  vOrder = 0;
  hOrder = 0;
  vScore = 0;
  hScore = 0;
  theBase = 0;
  isOut = false;
  vInningScore = 0;
  hInningScore = 0;
  vHits = 0;
  hHits = 0;
  vError = 0;
  hError = 0;
  extraInning = 0;

  vBatter = [];
  hBatter = [];
  runners = "0,0,0";
  playBall();
}

function randomizeLineup(lineup) {
  //Fisher-Yates algorithm
  for (let i = lineup.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lineup[i], lineup[j]] = [lineup[j], lineup[i]];
  }
  return lineup;
}
//Create home and away lineups by randomizing positionArray
function createLineup() {
  const vtArray = [...visitingTeamArray];
  const htArray = [...homeTeamArray];

  vBatter = randomizeLineup(vtArray);
  hBatter = randomizeLineup(htArray);

  console.log(vBatter);
  console.log(`=====================`);
  console.log(hBatter);
}

function pitch() {
  //Rolls 2D6 and returns result
  const outcomes = {
    "1/1": () => {
      theBase = 4;
      isOut = false;
      recordHits();
      recordHomeRun();
      return "HomeRun";
    },
    "1/2": () => {
      theBase = 2;
      isOut = false;
      recordHits();
      return "Double";
    },
    "1/3": () => {
      theBase = 1;
      isOut = false;
      recordHits();
      return "Single";
    },
    "1/4": () => {
      outs++;
      isOut = true;
      return "PopOut";
    },
    "1/5": () => {
      outs++;
      isOut = true;
      return "GroundOut";
    },
    "1/6": () => {
      outs++;
      isOut = true;
      return "Strikeout";
    },
    "2/2": () => {
      theBase = 1;
      isOut = false;
      recordHits();
      return "Single";
    },
    "2/3": () => {
      outs++;
      isOut = true;
      return "PopOut";
    },
    "2/4": () => {
      outs++;
      isOut = true;
      return "GroundOut";
    },
    "2/5": () => {
      outs++;
      isOut = true;
      return "Strikeout";
    },
    "2/6": () => {
      outs++;
      isOut = true;
      return "GroundOut";
    },
    "3/3": () => {
      theBase = 1;
      isOut = false;
      recordHits();
      return "Single";
    },
    "3/4": () => {
      outs++;
      isOut = true;
      return "Strikeout";
    },
    "3/5": () => {
      outs++;
      isOut = true;
      return "GroundOut";
    },
    "3/6": () => {
      outs++;
      isOut = true;
      return "FlyOut";
    },
    "4/4": () => {
      theBase = 1;
      isOut = false;
      recordWalk();
      return "Walk";
    },
    "4/5": () => {
      outs++;
      isOut = true;
      return "FlyOut";
    },
    "4/6": () => {
      outs++;
      isOut = true;
      return "FlyOut";
    },
    "5/5": () => {
      theBase = 1;
      isOut = false;
      recordError();
      return "BaseOnError";
    },
    "5/6": () => {
      theBase = 1;
      isOut = false;
      recordHits();
      return "Single";
    },
    "6/6": () => {
      theBase = 3;
      isOut = false;
      recordHits();
      return "Triple";
    },
  };
  //for example the 3/4 would also be the same as 4/3 for a two dice roll thus a strikeoout
  for (const key in outcomes) {
    const [dice1, dice2] = key.split("/");
    const reversedKey = `${dice2}/${dice1}`;
    outcomes[reversedKey] = outcomes[key];
  }

  const dice1 = diceRoll();
  const dice2 = diceRoll();
  const pitchResult = `${dice1}/${dice2}`;
  const theResult = outcomes[pitchResult]() || "No result";
  return theResult;
}

function diceRoll() {
  //Eandom number 1-6
  return Math.floor(Math.random() * 6) + 1;
}

function playBall() {
  createLineup();
  console.log("PLay Ball!");
  while (curInning <= 9 || (curInning >= 9 && hScore === vScore)) {
    console.log(`INNING ${curInning}`);
    //If Score is tied at the end of 9 keep adding an inning until vScore > hScore or hScore > vScore
    if (curInning > 9 && hScore === vScore) {
      addExtraInning();
    }
    curInning++;
    playInning();
  }
  endGame();
}

function scoreRBI(theScore) {
  if (currentPitch != "BaseOnError" || currentPitch != "Walk") {
    if (vAtBat) {
      vBatter[vOrder].rbis += theScore;
    } else {
      hBatter[hOrder].rbis += theScore;
    }
  }
}

function scoreRuns(score) {
  //track runs scored
  if (vAtBat) {
    vScore += score;
    vInningScore += score;
    scoreRBI(score);
    console.log(vInningScore); //runs scored this inning
  } else {
    hScore += score;
    hInningScore += score;
    scoreRBI(score);
    console.log(hInningScore);
  }
  console.log(`${score} Run${score > 1 ? "s" : ""} Scored`);
}

function recordHomeRun(){
  if (vAtBat) {
    vBatter[vOrder].hr++;
  } else {
    hBatter[hOrder].hr++;
  }
}

function recordHits() {
  if (vAtBat) {
    //Individual Batter Hits Totals
    vBatter[vOrder].hits++;
    //Team Hits Total
    vHits++;
  } else {
    hBatter[hOrder].hits++;
    hHits++;
  }
}
function recordError() {
  if (vAtBat) {
    hError++;
  } else {
    vError++;
  }
}
function recordWalk() {
  if (vAtBat) {
    vBatter[vOrder].hits++;
  } else {
    hBatter[hOrder].bb++;
  }
}
//Basic base running implemented so ifa runner is on third and a single or double is hit, the runner stays on third
function runBases() {
  switch (theBase) {
    //Single
    case 1:
      switch (runners) {
        case "0,0,0":
          runners = "1,0,0";
          break;
        case "1,0,0":
          runners = "1,1,0";
          break;
        case "1,1,0":
          runners = "1,1,1";
          break;
        case "1,1,1":
          runners = "1,1,1";
          scoreRuns(1);
          break;
        case "0,1,1":
          runners = "1,1,1";
          break;
        case "0,1,0":
          runners = "1,1,0";
          break;
        case "1,0,1":
          runners = "1,1,1";
          break;
        case "0,0,1":
          runners = "1,0,1";
          break;
      }
      break;
    //Double
    case 2:
      switch (runners) {
        case "0,0,0":
          runners = "0,1,0";
          break;
        case "0,1,0":
          runners = "0,1,1";
          break;
        case "0,1,1":
          runners = "0,1,1";
          scoreRuns(1);
          break;
        case "0,0,1":
          runners = "0,1,1";
          break;
        case "1,0,0":
          runners = "0,1,1";
          break;
        case "1,1,0":
          runners = "0,1,1";
          scoreRuns(1);
          break;
        case "1,1,1":
          runners = "0,1,1";
          scoreRuns(2);
          break;
      }
      break;
    //Tripple
    case 3:
      switch (runners) {
        case "0,0,0":
          runners = "0,0,1";
          break;
        case "0,0,1":
          runners = "0,0,1";
          scoreRuns(1);
          break;
        case "1,0,0":
        case "0,1,0":
        case "1,1,0":
        case "1,1,1":
        case "1,0,1":
        case "0,1,1":
          runners = "0,0,1";
          if (runners.includes("1")) {
            const score = runners
              .split(",")
              .filter((runner) => runner === "1").length;
            scoreRuns(score);
          }
          break;
      }
      break;
    //Home Run
    case 4:
      switch (runners) {
        case "0,0,0":
          runners = "0,0,0";
          scoreRuns(1);
          break;
        case "1,0,0":
          runners = "0,0,0";
          scoreRuns(2);
          break;
        case "1,1,0":
          runners = "0,0,0";
          scoreRuns(3);
          break;
        case "1,1,1":
          runners = "0,0,0";
          scoreRuns(4);
          break;
        case "1,0,1":
        case "0,1,0":
        case "0,1,1":
          runners = "0,0,0";
          const score = runners
            .split(",")
            .filter((runner) => runner === "1").length;
          scoreRuns(score);
          break;
      }
      break;
  }
}

function playInning() {
  if (vAtBat) {
    //VIsitor at bat
    while (outs != 3) {
      vBatter[vOrder].ab++;
      currentPitch = pitch();
      console.log(
        `Pos ${vOrder + 1}: ${vBatter[vOrder].playerName} ${
          vBatter[vOrder].position
        } ${currentPitch}`
      );
      if(currentPitch === "Strikeout"){
        vBatter[vOrder].k++;
      }
      if (!isOut) {
        runBases();
      }
      console.log(runners);
      vOrder++;
      if (vOrder === vBatter.length) {
        //go to the top of the batting order
        vOrder = 0;
      }
    }
    vAtBat = false;
  }
  //reset for home team
  outs = 0;
  theBase = 0;
  runners = "0,0,0";
  document.querySelector(
    `#visitingTeam ~ td:nth-child(${curInning}`
  ).textContent = vInningScore;
  console.log(`Inning ${curInning - 1} Score = ${vInningScore}`);
  vInningScore = 0;
  console.log(`${visitingTeam} -- ${vScore}`);
  console.log(`-------------------------`);
  if (!vAtBat) {
    //home team at bat
    while (outs != 3) {
      hBatter[hOrder].ab++;
      currentPitch = pitch();
      console.log(
        `Pos ${hOrder + 1}: ${hBatter[hOrder].position} ${
          hBatter[hOrder].playerName
        } ${currentPitch}`
      );
      if(currentPitch === "Strikeout"){
        hBatter[hOrder].k++;
      }
      if (!isOut) {
        runBases();
      }
      console.log(runners);
      hOrder++;
      if (hOrder === hBatter.length) {
        //go to the top of the batting order
        hOrder = 0;
      }
    }
    vAtBat = true;
  }
  //reset for visitor
  outs = 0;
  theBase = 0;
  runners = "0,0,0";
  document.querySelector(`#homeTeam ~ td:nth-child(${curInning}`).textContent =
    hInningScore;
  console.log(`Inning ${curInning - 1} Score = ${hInningScore}`);
  hInningScore = 0;
  console.log(`${homeTeam} -- ${hScore}`);
  console.log(`-------------------------`);
}

//initially score board is set for 9 innings plus 3 boxes for runs, hits, errors
//this adds the extra inning boxes after the 9th inning box and before the runs, hits, errors boxes
function addExtraInning() {
  extraInning++;
  const baseballTable = document.getElementById("baseballTable");
  const inningsRow = baseballTable.rows[0];
  const visitorRow = baseballTable.rows[1];
  const homeRow = baseballTable.rows[2];

  // Increment the inning count
  const inningCount = inningsRow.cells.length - 3; // Subtract 3 for R, H, E cells
  const newInning = inningCount;

  // Add a new column header for the extra inning
  const inningHeader = document.createElement("th");
  inningHeader.textContent = newInning;
  inningsRow.insertBefore(
    inningHeader,
    inningsRow.cells[inningsRow.cells.length - 3]
  );

  // Add new cells for the extra inning for the visitor and home teams
  const visitorInningCell = document.createElement("td");
  visitorRow.insertBefore(
    visitorInningCell,
    visitorRow.cells[visitorRow.cells.length - 3]
  );

  const homeInningCell = document.createElement("td");
  homeRow.insertBefore(homeInningCell, homeRow.cells[homeRow.cells.length - 3]);
}

function getTheDate() {
  // Create a new Date object representing the current date and time
  const currentDate = new Date();

  // Get individual components of the current date
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Display the current date in a specific format
  const formattedDate = `<strong>${month < 10 ? "0" : ""}${month}/${
    day < 10 ? "0" : ""
  }${day}/${year}</strong>`;

  return formattedDate;
}
function endGame() {
  //add the final score eventually this will update as the game goes
  console.log(`Visitor Score ==== ${vScore} ==== Home Score ${hScore}`);
  console.log(`Game Over Hits V ${vHits} ====== H ${hHits}`);
  console.log(`Game Over Errors V ${vError} ====== H ${hError}`);
  console.log(`EXtra Innings ===== ${extraInning}`);

  document.querySelector("#gameDate").innerHTML = getTheDate();
  console.log("Current Date:", getTheDate());

  document.querySelector("#vRuns").textContent = vScore;
  document.querySelector("#vHits").textContent = vHits;
  document.querySelector("#vErrors").textContent = vError;

  document.querySelector("#hRuns").textContent = hScore;
  document.querySelector("#hHits").textContent = hHits;
  document.querySelector("#hErrors").textContent = hError;

  const summaryDiv = document.getElementById("summary");
  summaryDiv.innerHTML = `<strong>${visitingTeam} Stats</strong>`;
  vBatter.forEach((player) => {
    const playerDiv = document.createElement("div");
    playerDiv.textContent = `${player.playerName}: ${player.position} AB: ${player.ab} K: ${player.k} H: ${player.hits} R: ${player.runs} RBI: ${player.rbis} BB: ${player.bb} HR: ${player.hr}`;
    summaryDiv.appendChild(playerDiv);
    player.ab = 0;
    player.k = 0;
    player.hits = 0;
    player.runs = 0;
    player.rbis = 0;
    player.bb = 0;
    player.hr = 0;
  });
  summaryDiv.innerHTML += `<br><strong>${homeTeam} Stats</strong>`;
  hBatter.forEach((player) => {
    const playerDiv = document.createElement("div");
    playerDiv.textContent = `${player.playerName}: ${player.position} AB: ${player.ab} K: ${player.k} H: ${player.hits} R: ${player.runs} RBI: ${player.rbis} BB: ${player.bb}  HR: ${player.hr}`;
    summaryDiv.appendChild(playerDiv);
    player.ab = 0;
    player.k = 0;
    player.hits = 0;
    player.runs = 0;
    player.rbis = 0;
    player.bb = 0;
    player.hr = 0;
  });

  console.log(vBatter);
  console.log(hBatter);
}

//May implement this later currently not working correctly
/*function removeCells() {
  var table = document.getElementById("baseballTable");

  // Loop through rows
  for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];

    // Loop through cells in the row
   for (var j = 0; j <= extraInning; j++) {
      // Remove the cell at the specified index
      console.log("REMOVING......"+(extraInning+11));
      row.deleteCell(extraInning+11);
      }
    //extraInning--;
  }
}*/