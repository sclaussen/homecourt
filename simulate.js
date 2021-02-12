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


let teams = {
    '76ers': 5,
    bucks: 4,
    bulls: 4,
    cavs: 4,
    celtics: 3,
    clippers: 3,
    grizzlies: 3,
    hawks: 4,
    heat: 3,
    hornets: 4,
    jazz: 4,
    kings: 5,
    knicks: 2,
    lakers: 2,
    magic: 2,
    mavericks: 2,
    nets: 4,
    nuggets: 4,
    pacers: 4,
    pelicans: 4,
    pistons: 3,
    raptors: 2,
    rockets: 3,
    spurs: 3,
    suns: 4,
    thunder: 3,
    timberwolves: 3,
    trailblazers: 3,
    warriors: 3,
    wizards: 5,
};


let pins = [
    '76ers pin #1',
    '76ers pin #2',
    '76ers pin #3',
    '76ers pin #4',
    '76ers pin #5',

    'bucks pin #1',
    'bucks pin #2',
    'bucks pin #3',
    'bucks pin #4',

    'bulls pin #1',
    'bulls pin #2',
    'bulls pin #3',
    'bulls pin #4',

    'cavs pin #1',
    'cavs pin #2',
    'cavs pin #3',
    'cavs pin #4',

    'celtics pin #1',
    'celtics pin #2',
    'celtics pin #3',

    'clippers pin #1',
    'clippers pin #2',
    'clippers pin #3',

    'grizzlies pin #1',
    'grizzlies pin #2',
    'grizzlies pin #3',

    'hawks pin #1',
    'hawks pin #2',
    'hawks pin #3',
    'hawks pin #4',

    'heat pin #1',
    'heat pin #2',
    'heat pin #3',

    'hornets pin #1',
    'hornets pin #2',
    'hornets pin #3',
    'hornets pin #4',

    'jazz pin #1',
    'jazz pin #2',
    'jazz pin #3',
    'jazz pin #4',

    'kings pin #1',
    'kings pin #2',
    'kings pin #3',
    'kings pin #4',
    'kings pin #5',

    'knicks pin #1',
    'knicks pin #2',

    'lakers pin #1',
    'lakers pin #2',

    'magic pin #1',
    'magic pin #2',

    'mavericks pin #1',
    'mavericks pin #2',

    'nets pin #1',
    'nets pin #2',
    'nets pin #3',
    'nets pin #4',

    'nuggets pin #1',
    'nuggets pin #2',
    'nuggets pin #3',
    'nuggets pin #4',

    'pacers pin #1',
    'pacers pin #2',
    'pacers pin #3',
    'pacers pin #4',

    'pelicans pin #1',
    'pelicans pin #2',
    'pelicans pin #3',
    'pelicans pin #4',

    'pistons pin #1',
    'pistons pin #2',
    'pistons pin #3',

    'raptors pin #1',
    'raptors pin #2',

    'rockets pin #1',
    'rockets pin #2',
    'rockets pin #3',

    'spurs pin #1',
    'spurs pin #2',
    'spurs pin #3',

    'suns pin #1',
    'suns pin #2',
    'suns pin #3',
    'suns pin #4',

    'thunder pin #1',
    'thunder pin #2',
    'thunder pin #3',

    'timberwolves pin #1',
    'timberwolves pin #2',
    'timberwolves pin #3',

    'trailblazers pin #1',
    'trailblazers pin #2',
    'trailblazers pin #3',

    'warriors pin #1',
    'warriors pin #2',
    'warriors pin #3',

    'wizards pin #1',
    'wizards pin #2',
    'wizards pin #3',
    'wizards pin #4',
    'wizards pin #5',
];


main(process.argv);


function main(args) {
    let SIMULATIONS = 10000;
    let output = false;
    if (args.length === 3) {
        SIMULATIONS = parseInt(args[2]);
        output = true;
    }

    let days = 0;
    let points = 0;
    for (let i = 0; i < SIMULATIONS; i++) {
        let response = simulate(output);
        days += response[0];
        points += response[1];
    }

    console.log('\navg days   ' + parseInt(days / SIMULATIONS));
    console.log('avg points ' + parseInt(points / SIMULATIONS));
}


function simulate(output) {
    let day = 0;
    let points = 0;
    let pinsOwned = [];
    let teamsOwned = {};
    while (pinsOwned.length < pins.length) {

        day++;
        if (day > 7) {
            console.log(pinsOwned);
            process.exit(1);
        }
        if (output) {
            console.log('\nDay ' + day);
        }


        let bonusTeams = getBonusTeams();
        if (output) {
            console.log('  Bonus: ' + bonusTeams.join(' '));
        }


        let pinsWithBonus = [...pins];
        for (let bonusTeam of bonusTeams) {
            for (let pin of pins) {
                if (pin.startsWith(bonusTeam)) {
                    pinsWithBonus.unshift(pin);
                }
            }
        }

        let dailyPoints = 0;
        while (goodOdds(bonusTeams, pinsOwned, teamsOwned)) {

            points += 50;
            dailyPoints += 50;
            let n = getRandom(pinsWithBonus.length);

            if (!pinsOwned.includes(pinsWithBonus[n])) {
                if (output) {
                    console.log('  ' + pinsWithBonus[n]);
                }
                pinsOwned.push(pinsWithBonus[n]);

                let team = pinsWithBonus[n].split(' ')[0];
                if (!teamsOwned[team]) {
                    teamsOwned[team] = 1;
                } else {
                    teamsOwned[team] += 1;
                }
            }
        }

        if (output) {
            if (dailyPoints === 0) {
                console.log('  Skipping...');
            } else {
                console.log('  points ' + dailyPoints + ' (' + points + ')');
            }
        }
    }

    return [ day, points];
}


function goodOdds(bonusTeams, pinsOwned, teamsOwned) {
    for (let bonusTeam of bonusTeams) {
        if (teamsOwned[bonusTeam] !== teams[bonusTeam]) {
            return true;
        }
    }

    return false;
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
