'use strict'


let missingTeams = {
    atlanta: 1,
    denver: 3,
};


let pins = [
    '76ers 5',
    '76ers 4',
    '76ers 3',
    '76ers 2',
    '76ers 1',
    'trailblazers 3',
    'trailblazers 2',
    'trailblazers 1',
    'bucks 4',
    'bucks 3',
    'bucks 2',
    'bucks 1',
    'bulls 4',
    'bulls 3',
    'bulls 2',
    'bulls 1',
    'cavs 4',
    'cavs 3',
    'cavs 2',
    'cavs 1',
    'celtics 3',
    'celtics 2',
    'celtics 1',
    'clippers 3',
    'clippers 2',
    'clippers 1',
    'grizzlies 3',
    'grizzlies 2',
    'grizzlies 1',
    'hawks 4',
    'hawks 3',
    'hawks 2',
    'hawks 1',
    'heat 3',
    'heat 2',
    'heat 1',
    'hornets 4',
    'hornets 3',
    'hornets 2',
    'hornets 1',
    'jazz 4',
    'jazz 3',
    'jazz 2',
    'jazz 1',
    'kings 5',
    'kings 4',
    'kings 3',
    'kings 2',
    'kings 1',
    'nicks 2',
    'nicks 1',
    'lakers 2',
    'lakers 1',
    'magic 2',
    'magic 1',
    'mavericks 2',
    'mavericks 1',
    'nets 4',
    'nets 3',
    'nets 2',
    'nets 1',
    'nuggets 4',
    'nuggets 3',
    'nuggets 2',
    'nuggets 1',
    'pacers 4',
    'pacers 3',
    'pacers 2',
    'pacers 1',
    'pelicans 4',
    'pelicans 3',
    'pelicans 2',
    'pelicans 1',
    'pistons 3',
    'pistons 2',
    'pistons 1',
    'raptors 2',
    'raptors 1',
    'rockets 3',
    'rockets 2',
    'rockets 1',
    'spurs 3',
    'spurs 2',
    'spurs 1',
    'suns 4',
    'suns 3',
    'suns 2',
    'suns 1',
    'thunder 3',
    'thunder 2',
    'thunder 1',
    'timberwolves 3',
    'timberwolves 2',
    'timberwolves 1',
    'warriors 3',
    'warriors 2',
    'warriors 1',
    'wizards 5',
    'wizards 4',
    'wizards 3',
    'wizards 2',
    'wizards 1',
];


let teams = {
    '76ers': 5,
    trailblazers: 3,
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
    nicks: 2,
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
    warriors: 3,
    wizards: 5,
};


main(process.argv);


function main(args) {

    if (args.length === 6) {
        calculateOdds(args);
        process.exit(0);

    }

    console.error('Usage: node pins team1 team2 team3 team4');
    process.exit(1)
}


function calculateOdds(args) {

    // Verify the teams are valid
    let validTeams = true;
    let bonusTeams = [];
    for (let i = 2; i < 6; i++) {
        if (!teams[args[i]]) {
            validTeams = false;
            console.error('ERROR: Invalid team name: ' + args[i]);
        }
        bonusTeams.push(args[i]);
    }
    if (!validTeams) {
        console.error();
        console.error('Usage: node pins team1 team2 team3 team4');
        process.exit(1)
    }


    // Update the pins with today's bonusTeams
    for (let bonusTeam of bonusTeams) {
        teams[bonusTeam] = teams[bonusTeam] * 4;
    }


    // Now determine the new denominator
    let denominator = 0;
    for (let team of Object.keys(teams)) {
        let value = teams[team];
        denominator += value;
    }


    // Determine the numerator
    let numerator = 0;
    for (let missingTeam of Object.keys(missingTeams)) {
        let chances = missingTeams[missingTeam];
        let bonus = '';
        if (bonusTeams.includes(missingTeam)) {
            chances *= 4;
            bonus = ' **';
        }
        console.log(missingTeam.padStart(10, ' ') + ' chances: ' + parseFloat((chances / denominator) * 100).toFixed(1) + '% (' + chances + ')' + bonus);
        numerator += chances;
    }

    let chance = (numerator / denominator) * 100;
    console.log('\n' + 'total'.padStart(10, ' ') + ' chances: ' + parseFloat(chance).toFixed(2) + '% (' + numerator + ')');

    let rolls = 100 / chance;
    console.log('rolls required: '.padStart(20, ' ') + parseInt(rolls));

    let points = rolls * 50;
    console.log('points required: '.padStart(20, ' ') + parseInt(points));
}
