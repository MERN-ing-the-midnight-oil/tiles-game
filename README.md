## Bananarama Grams- Components and Their Interactions

### GameBoard (Parent Component)

The GameBoard component facilitates the overall game logic and state management. It maintains states such as `letterHand` and `letterBag`, the arrays of letter tile values central to the game. Two key handler functions are defined within this component:

#### handleDrawLetter:

- handleDrawLetter manages the process when a player clicks to draw a tile. It orchestrates the drawing of letters from the `letterBag` into the `letterHand`, controls the visual transition effects in LetterHand, and updates the states of both `letterHand` and `letterBag`.

#### handlePlayLetter:

- When a letter is played in the CrosswordGrid, handlePlayLetter is invoked. It sets the transitioning state for the fade-out effect in LetterHand and updates the `letterHand` state after the transition completes, thereby removing the played letter from the player's hand.

### CrosswordGrid

CrosswordGrid displays the interactive grid for the crossword game. It manages the state for grid cells and utilizes a React ref, `cellRefs`, created with `useRef` for switching cell focus after each keystroke.

#### cellRefs:

- `cellRefs` is an array of React ref objects, each corresponding to a cell in the grid. It is created by mapping `React.createRef()` over an array expanded to the grid's size. These ref objects provide direct access to their corresponding cell's DOM nodes. The `current` property of these refs is crucial for managing focus dynamically within the grid cells. When a user inputs a letter, `cellRefs` is used to shift focus to the next cell in a specified direction, enabling continuous typing without manual cell selection.

### LetterHand

LetterHand displays the letters in the player's hand, receiving its state from GameBoard. It is responsible for visually representing letters as they are added or removed, facilitated through props like `letterHand`, `drawnLetter`, `playedLetter`, and `isTransitioning`.

- The component uses CSS transitions for the fade-in effect of newly drawn letters and fade-out effect of letters played in the grid.

### LetterBag

LetterBag visualizes the remaining pool of letters available to be drawn. It renders the `letterBag` state passed from GameBoard and implements a CSS fade-out effect to signify the removal of a letter when it is drawn.

### gameUtils (Utility Module)

gameUtils contains non-UI logic separate from component files. It includes functions for creating initial states for the grid and letter bag and utilities like the `removeOneLetter` function, which removes a single instance of a letter from an array. This separation contributes to a more organized codebase.

## Thank you for looking at my portfolio item. Please reach out if you have any questions or suggestions. Email: merning.the.midnight.oil@gmail.com
