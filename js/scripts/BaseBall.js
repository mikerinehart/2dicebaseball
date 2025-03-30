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

let vBatter = [];
let hBatter = [];
let runners = "0,0,0";
const visitingTeam = "Angry Beavers";
const homeTeam = "O-Town Spitballs";

window.onload = function () {
  theScoreBoard = document.querySelector("#scoreboard").innerHTML;
};

//Eventually make this player names and positions for home and visitor via DB
const visitingTeamArray = [
  {
    position: "Pitcher",
    positionShort: "P",
    playerName: "Norbert Beaver",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0,
    singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 1
  },
  {
    position: "Catcher",
    positionShort: "C",
    playerName: "Daggett Beaver",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0,
    singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 2
  },
  {
    position: "First Base",
    positionShort: "1B",
    playerName: "Barry Bear",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0,
    singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 3
  },
  {
    position: "Second Base",
    positionShort: "2B",
    playerName: "Muscualr Beaver",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0,
    singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 4
  },
  {
    position: "Third Base",
    positionShort: "3B",
    playerName: "Stump",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0,
    singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 5
  },
  {
    position: "ShortStop",
    positionShort: "SS",
    playerName: "Treeflower",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0,
    singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 6
  },
  {
    position: "Left Field",
    positionShort: "LF",
    playerName: "Oxnard Montalvo",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0,
    singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 7
  },
  {
    position: "Center Field",
    positionShort: "CF",
    playerName: "Slap Johnson",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0,
    singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 8
  },
  {
    position: "Right Field",
    positionShort: "RF",
    playerName: "Loogie Hawk",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0,
    singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 9
  },
];

const homeTeamArray = [
  {
    position: "Pitcher",
    positionShort: "P",
    playerName: "Rocko Rama",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0,
    singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 1
  },
  {
    position: "Catcher",
    positionShort: "C",
    playerName: "Heffer Wolfe",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0,
    singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 2
  },
  {
    position: "First Base",
    positionShort: "1B",
    playerName: "Filburt Turtle",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0,
    singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 3
  },
  {
    position: "Second Base",
    positionShort: "2B",
    playerName: "Spunky",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0,
    singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 4
  },
  {
    position: "Third Base",
    positionShort: "3B",
    playerName: "Ed Bighead",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0,
    singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 5
  },
  {
    position: "ShortStop",
    positionShort: "SS",
    playerName: "Bev Bighead",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0,
    singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 6
  },
  {
    position: "Left Field",
    positionShort: "LF",
    playerName: "Leon Chameleon",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0, singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 7
  },
  {
    position: "Center Field",
    positionShort: "CF",
    playerName: "Dr. Hutchison",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0,
    singles: 0,
    doubles: 0,
    triples: 0,
    curBase: 0,
    posID: 8
  },
  {
    position: "Right Field",
    positionShort: "RF",
    playerName: "Really Really Big Man",
    ab: 0,
    k: 0,
    bb: 0,
    hits: 0,
    runs: 0,
    rbis: 0,
    hr:0, 
    singles: 0, 
    doubles: 0, 
    triples: 0,
    curBase: 0,
    posID: 9
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
     recordHits(theBase);
      recordHomeRun();
      return "HomeRun";
    },
    "1/2": () => {
      theBase = 2;
      isOut = false;
     recordHits(theBase);
      return "Double";
    },
    "1/3": () => {
      theBase = 1;
      isOut = false;
     recordHits(theBase);
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
     recordHits(theBase);
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
     recordHits(theBase);
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
     recordHits(theBase);
      return "Single";
    },
    "6/6": () => {
      theBase = 3;
      isOut = false;
     recordHits(theBase);
      return "Triple";
    },
  };
  //hit(vBatter[vOrder], currentPitch);
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

function recordHomeRun() {
  if (vAtBat) {
    vBatter[vOrder].hr++;
  } else {
    hBatter[hOrder].hr++;
  }
}

function recordHits(hitType) {
  if (vAtBat) {
    //Individual Batter Hits Totals
    vBatter[vOrder].hits++;
    //Team Hits Total
    vHits++;
    switch (hitType) {
      case 1:
        vBatter[vOrder].singles++;
        break;
      case 2:
        vBatter[vOrder].doubles++;
        break;
      case 3:
        vBatter[vOrder].triples++;
        break;
      default:
        console.error("Invalid hit type");
    }
  } else {
    hBatter[hOrder].hits++;
    hHits++;
    switch (hitType) {
      case 1:
        hBatter[hOrder].singles++;
        break;
      case 2:
        hBatter[hOrder].doubles++;
        break;
      case 3:
        hBatter[hOrder].triples++;
        break;
      default:
        console.error("Invalid hit type");
    }
  }
}
function recordRun(){
  if (vAtBat) {
    vBatter[vOrder].runs++;
  } else {
    hBatter[hOrder].runs++;
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
    vBatter[vOrder].bb++;
  } else {
    hBatter[hOrder].bb++;
  }
}
const baseResults = {
  1: { // Single outcomes
    "0,0,0": "1,0,0",
    "1,0,0": "1,1,0",
    "1,1,0": "1,1,1",
    "1,1,1": { runners: "1,1,1", score: 1 },
    "0,1,0": "1,1,0",
    "0,1,1": "1,1,1",
    "0,0,1": "1,0,1",
    "1,0,1": "1,1,1",
},

2: { // Double outcomes
    "0,0,0": "0,1,0",
    "1,0,0": "0,1,1",
    "1,1,0": { runners: "0,1,1", score: 1 },
    "1,1,1": { runners: "0,1,1", score: 2 },
    "0,1,0": "0,1,1",
    "0,1,1": { runners: "0,1,1", score: 1 },
    "0,0,1": "0,1,1",
    "1,0,1": { runners: "0,1,1", score: 1 },
},

3: { // Triple outcomes
    "0,0,0": "0,0,1",
    "1,0,0": { runners: "0,0,1", score: 1 },
    "1,1,0": { runners: "0,0,1", score: 2 },
    "1,1,1": { runners: "0,0,1", score: 3 },
    "0,1,0": { runners: "0,0,1", score: 1 },
    "0,1,1": { runners: "0,0,1", score: 2 },
    "0,0,1": { runners: "0,0,1", score: 1 },
    "1,0,1": { runners: "0,0,1", score: 2 },
},
  4: {
    "0,0,0": { runners: "0,0,0", score: 1 },
    "1,0,0": { runners: "0,0,0", score: 2 },
    "1,1,0": { runners: "0,0,0", score: 3 },
    "1,1,1": { runners: "0,0,0", score: 4 },
    "1,0,1": { runners: "0,0,0", score: 3 },
    "0,1,0": { runners: "0,0,0", score: 2 },
    "0,1,1": { runners: "0,0,0", score: 3 },
  },
};

function runBases() {
  const result = baseResults[theBase][runners];
  if (typeof result === "string") {
    runners = result;
  } else {
    runners = result.runners;
    scoreRuns(result.score);
  }
}

//Basic base running implemented so if a runner is on third and a single or double is hit, the runner stays on third
/*
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
*/
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
      if (currentPitch === "Strikeout") {
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
  resetOutsBasesRunners();
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
      if (currentPitch === "Strikeout") {
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
  resetOutsBasesRunners();
  document.querySelector(`#homeTeam ~ td:nth-child(${curInning}`).textContent =
    hInningScore;
  console.log(`Inning ${curInning - 1} Score = ${hInningScore}`);
  hInningScore = 0;
  console.log(`${homeTeam} -- ${hScore}`);
  console.log(`-------------------------`);
}
function resetOutsBasesRunners(){
  outs = 0;
  theBase = 0;
  runners = "0,0,0";
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


function updateStats(teamType) {
  console.log("Called STATS for", teamType);
  const isVisitor = teamType === "visitor";
  const playerStats = isVisitor ? vBatter : hBatter;
  const teamName = isVisitor ? visitingTeam : homeTeam;

  const createStatsRow = (player) => `
    <tr>
      <td>${player.playerName}</td>
      <td>${player.positionShort}</td>
      <td>${player.ab}</td>
      <td>${player.k}</td>
      <td>${player.hits}</td>
      <td>${player.runs}</td>
      <td>${player.rbis}</td>
      <td>${player.bb}</td>
      <td>${player.hr}</td>
      <td>${player.singles}</td>
      <td>${player.doubles}</td>
      <td>${player.triples}</td>
    </tr>`;

  const statsTable = `
    <table class="scoretable statTable" style="text-align:center;">
      <tbody>
        <tr>
          <th style="border-right-width:2px; width:170px;">${teamName}</th>
          <th>Pos</th>
          <th>AB</th>
          <th>K</th>
          <th>Hits</th>
          <th>Runs</th>
          <th>RBIs</th>
          <th>BB</th>
          <th>HR</th>
          <th>S</th>
          <th>D</th>
          <th>T</th>
        </tr>
        ${playerStats.map(createStatsRow).join('')}
      </tbody>
    </table>`;

  document.getElementById(`${teamType}Stats`).innerHTML = statsTable;

  // Reset player stats
  playerStats.forEach(player => {
    player.ab = player.k = player.hits = player.runs = player.rbis = player.bb = player.hr = player.singles = player.doubles = player.triples = 0;
  });
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

updateStats("visitor");
updateStats("home");
}
