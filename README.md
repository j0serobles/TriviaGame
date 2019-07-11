# TriviaGame

### Overview

TriviaGame is a simple trivia game where the user tries to answer as many questions correctly as possible. 

This version of TriviaGame uses a single theme: Baseball. The game runs in the browser, and features dynamically updated HTML and CSS powered by Javascript code. 

### File directory structure:

```
├── assets
|  ├── css
|  |  └── style.css (Contains CSS styling)
|  ├── images
|  └── javascript
|  |  └── game.js   (Contains the game logic in Javascript)
|  └── media        (Contains sound files used in the game)
└── index.html      (Contains the HTML used in the page)
```

### Access
The [game](https://j0serobles.github.io/TriviaGame/) can be accessed at https://j0serobles.github.io/TriviaGame/
The github [repo](https://github.com/j0serobles/TriviaGame/) is at https://github.com/j0serobles/Bootstrap-Portfolio

### Design
The Javascript program is divided in three sections:
1. GLOBALS: Contains the global variables used.
2. OBJECTS: Contains the source code for two object constructors:
 * UI (User Interface)
 * Game (The actual game)
3. CALLS: Contains the function calls to drive the program execution.

The game is started after the page loads and the user clicks on the "Start" button.
Each question page shows the timer countdown (default time is 30 seconds), the actual question itself,
and four clickable choices.
Using the $.ready() function, a callback function is attached to each choice when the DOM is loaded. 
This callback function evaluates the answer selected by the user, updates the counters and provides
feedback to the user if the answer was answered correctly or not.
setInterval() is called when the first question is displayed, decreasing the countdown every second.
The interval is only cleared after the last question is asked.  When a new question is displayed, 
the countdown is reset to 30 seconds and is decreased every second by the interval's callback. 
After the last question is displayed and answered (or not), the game ends and the totals are displayed.  The user can then restart the game by clicking on the "Start Again" button. 
