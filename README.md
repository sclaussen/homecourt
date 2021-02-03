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
