'use strict'

let bonusTeamsArray = [
    { name: '76ers', count: 0 },
    { name: 'trailblazers', count: 0 },
    { name: 'bucks', count: 0 },
    { name: 'bulls', count: 0 },
    { name: 'cavs', count: 0 },
    { name: 'celtics', count: 0 },
    { name: 'clippers', count: 0 },
    { name: 'grizzlies', count: 0 },
    { name: 'hawks', count: 0 },
    { name: 'heat', count: 0 },
    { name: 'hornets', count: 0 },
    { name: 'jazz', count: 0 },
    { name: 'kings', count: 0 },
    { name: 'knicks', count: 0 },
    { name: 'lakers', count: 0 },
    { name: 'magic', count: 0 },
    { name: 'mavs', count: 0 },
    { name: 'nets', count: 0 },
    { name: 'nuggets', count: 0 },
    { name: 'pacers', count: 0 },
    { name: 'pelicans', count: 0 },
    { name: 'pistons', count: 0 },
    { name: 'raptors', count: 0 },
    { name: 'rockets', count: 0 },
    { name: 'spurs', count: 0 },
    { name: 'suns', count: 0 },
    { name: 'thunder', count: 0 },
    { name: 'timerwolves', count: 0 },
    { name: 'warriors', count: 0 },
    { name: 'wizards', count: 0 },
];

for (let i = 0; i < 8; i++) {
    console.log(getBonusTeams());
}

function getBonusTeams() {
    let bonusTeams = [];
    let possibleTeams = bonusTeamsArray.filter(obj => obj.count === 0).map(obj => obj.name);
    if (possibleTeams.length === 2) {
        getRandomTeams(bonusTeams, possibleTeams, 2);
    }

    bonusTeamsArray.map(function(obj) { if (obj.count > 0) { obj.count -= 1 } });
    possibleTeams = bonusTeamsArray.filter(obj => obj.count === 0).map(obj => obj.name);
    getRandomTeams(bonusTeams, possibleTeams, 4 - bonusTeams.length);
    return bonusTeams;
}

function getRandomTeams(bonusTeams, possibleTeams, count) {
    for (let i = 0; i < count; i++) {
        let teamNumber = getRandom(possibleTeams.length);
        bonusTeams.push(possibleTeams[teamNumber]);
        bonusTeamsArray.map(function(obj) { if (obj.name === possibleTeams[teamNumber]) obj.count = 7; });
        possibleTeams.splice(teamNumber, 1);
    }
}

function getRandom(n) {
    return parseInt(Math.random() * n);
}
