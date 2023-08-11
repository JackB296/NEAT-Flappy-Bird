# Flappy Bird NEAT Game README

Welcome to the NEAT implementation of the Flappy Bird game! This game uses the NeuroEvolution of Augmenting Topologies (NEAT) algorithm to train agents to play the game by evolving neural network architectures.

## Game Overview:

- This game allows you to play Flappy Bird as a user or watch a population of agents play and learn the game through the NEAT algorithm.
- The game keeps track of the distance traveled by the bird, and each bird tries to avoid the pipes and reach the maximum possible distance.
- The game supports a debug mode to visualize how the NEAT agents make decisions.

## Game Variables:

- **Debug Mode:** Visualize agent decisions.
- **Neat Mode:** Switch between user playing mode and NEAT playing mode.
- **High Counter:** Tracks the highest score achieved.
- **Bird, Background, Pipes and Ground:** Various game assets to visually represent the game.

## NEAT Variables:

- **Population Size:** Number of agents in the NEAT population.
- **Mutation Rate:** Probability of mutations.
- **Crossover Rate:** Probability of crossovers.
- **Stagnation Threshold:** Number of generations without improvement before stopping.
  
## Music Variables:

- Background music, jump sound, and game over sound are integrated to enhance the gaming experience.

## Key Functions:

1. **setup()**: Initializes the game by setting up the canvas, preloading assets and setting the game's frame rate.
2. **preload()**: Loads image and sound files.
3. **draw()**: Main game loop function responsible for drawing and updating game elements.
4. **updateBirds()**: Update birds' positions and checks for collisions.
5. **updatePipes()**: Manages spawning and updating pipes.
6. **keyPressed()**: Handles user input for jumping.
7. **switchMode()**: Toggle between neat mode and user mode.
8. **toggleMute()**: Mutes or plays the background music.

## Usage:

1. Run the game.
2. Play as a user or switch to NEAT mode to watch the agents play.
3. Use the space key to make the bird jump when playing as a user.
4. Toggle debug mode to visualize the decision-making process of the NEAT agents.
5. Enjoy the game!

## Future Enhancements:

- Implementing different difficulty levels.
- Adding in a start screen.
- Addig comsetic skins to choose from.

Hope you enjoy playing and watching the evolution of agents in Flappy Bird!
