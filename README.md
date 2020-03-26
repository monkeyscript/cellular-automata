# Cellular Automata

Cellular automaton is a collection of cells on a grid that evolves through a series of steps under simple rules governing their replication and destruction. [https://monkeyscript.github.io/cellular-automata/](https://monkeyscript.github.io/cellular-automata/)

## 1. Conway's Game of Life

The Game of Life is a cellular automaton and a zero-player game devised by mathematician John Horton Conway. It takes place on a two-dimensional grid in which cells can be alive or dead, and is defined by a set of rules that jointly determine the state of a cell given the state of its neighbours. The initial states are random and can achieve stochastic patterns. You may get some cool ones if you're lucky :)

Wiki : [https://en.wikipedia.org/wiki/Conway's_Game_of_Life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life)

Rules : 
- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## 2. Langton's Ant

Langton's ant is another cellular automaton invented by Chris Langton in 1986. It is basically an ant sitting on a cell grid and the state of cells and movement of ant are governed by a simple set of rules. Unlink game of life, the patterns of this automaton are predictable and limited.

Wiki : [https://en.wikipedia.org/wiki/Langton's_ant](https://en.wikipedia.org/wiki/Langton's_ant)

Rules : 
- At a white square, turn 90° right, flip the color of the square, move forward one unit.
- At a black square, turn 90° left, flip the color of the square, move forward one unit.
