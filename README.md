## Problem

This was a programming problem my son was working on in Python related
to obtaining pins in the Homecourt basketball mobile application we
use to track shots.

Write a Python program to determine what the probability of getting
the one Utah Jazz pin we are missing each turn when the following
teams have x4 probably today:

- Utah Jazz, LA Clippers, Indiana Pacers, Memphis Grizzlies

```
76ers: 5
trailblazers: 3
bucks: 4
bulls: 4
cavs: 4
celtics: 3
clippers: 3
grizzlies: 3
hawks: 4
heat: 3
hornets: 4
jazz: 4
kings: 5
nicks: 2
lakers: 2
magic: 2
mavs: 2
nets: 4
nuggets: 4
pacers: 4
pelicans: 4
pistons: 3
raptors: 2
rockets: 3
spurs: 3
suns: 4
thunder: 3
timerwolves: 3
warriors: 3
wizards: 5
```



## Implementation

### Simulate

Simulate runs 10,000 simulations to determine the total number of days
and total points required to get all the pins.  The assumptions:
- Each day a completely random set of 4 teams are determined
  (homecourt probably uses a more weighted system so the same team
  doesn't appear multiple days in a row)
- If any pins from one of the four bonus teams is missing, the
  simulator rolls until they have all the pins for the bonus teams.

```
$ node simulate
avg days   11
avg points 23469
```

In addition, you can simulate any number of days by passing a number
to simulate.  For example:

```
$ node simulate  1

Day 1
  Bonus: timberwolves knicks raptors lakers
  wizards pin #4
  suns pin #2
  clippers pin #3
  pelicans pin #2
  celtics pin #2
  pelicans pin #4
  mavericks pin #2
  suns pin #1
  nuggets pin #4
  knicks pin #1
  heat pin #1
  nets pin #2
  wizards pin #1
  timberwolves pin #1
  pistons pin #3
  spurs pin #2
  grizzlies pin #1
  cavs pin #2
  raptors pin #1
  pistons pin #2
  cavs pin #4
  kings pin #2
  trailblazers pin #1
  mavericks pin #1
  raptors pin #2
  grizzlies pin #3
  hornets pin #4
  nets pin #4
  spurs pin #3
  thunder pin #2
  nuggets pin #3
  nuggets pin #2
  kings pin #1
  hawks pin #1
  wizards pin #3
  celtics pin #3
  jazz pin #1
  clippers pin #1
  76ers pin #2
  knicks pin #2
  76ers pin #3
  timberwolves pin #3
  kings pin #5
  kings pin #4
  76ers pin #4
  pistons pin #1
  76ers pin #5
  bulls pin #2
  magic pin #2
  lakers pin #1
  bulls pin #3
  trailblazers pin #2
  trailblazers pin #3
  kings pin #3
  pelicans pin #3
  magic pin #1
  hornets pin #2
  wizards pin #5
  lakers pin #2
  nets pin #3
  bulls pin #1
  thunder pin #1
  pacers pin #1
  warriors pin #1
  bucks pin #1
  jazz pin #2
  spurs pin #1
  timberwolves pin #2
  points 6150 (6150)

Day 2
  Bonus: mavericks 76ers kings timberwolves
  rockets pin #1
  hornets pin #1
  warriors pin #3
  76ers pin #1
  points 650 (6800)

Day 3
  Bonus: nets bucks kings spurs
  hornets pin #3
  nets pin #1
  pacers pin #4
  wizards pin #2
  bulls pin #4
  heat pin #2
  jazz pin #3
  cavs pin #1
  bucks pin #2
  rockets pin #2
  clippers pin #2
  pelicans pin #1
  warriors pin #2
  bucks pin #3
  nuggets pin #1
  suns pin #4
  hawks pin #2
  grizzlies pin #2
  thunder pin #3
  bucks pin #4
  points 6500 (13300)

Day 4
  Bonus: trailblazers lakers suns pistons
  pacers pin #2
  rockets pin #3
  hawks pin #3
  celtics pin #1
  pacers pin #3
  cavs pin #3
  jazz pin #4
  suns pin #3
  points 4450 (17750)

Day 5
  Bonus: raptors nets heat wizards
  heat pin #3
  points 1550 (19300)

Day 6
  Bonus: warriors grizzlies pacers wizards
  Skipping

Day 7
  Bonus: suns rockets jazz hawks
  hawks pin #4
  points 3800 (23100)

avg days   7
avg points 23100
```

### Pins

The Pins script takes the four bonus teams as arguments, and contains
in it the missing pins as a data field.  The script generates the
percentage chance of getting each pin, the total chance of getting any
of the missing pins, rolls, and points required (given the
percentages).

```
$ node pins hawks nuggets warriors mavericks
   atlanta chances: 0.7% (1)
    denver chances: 2.1% (3)

     total chances: 2.84% (4)
    rolls required: 35
   points required: 1762
```
