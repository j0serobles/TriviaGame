 // GLOBALS:global variables
// TODO: Implement multiple, user-selectable themes

// For the mutli-themed functionality, create an array of theme objects.
// This version uses only one theme. 

var triviaQuestions = [
  
    theme1 = {
      themeName     : 'Baseball',
      imageFileName : "baseball.jpg",  
      questions     : [ {
                         questionText    : "Who holds the record for most home runs?",
                         questionOptions : ["Babe Ruth", "Barry Bonds", "Mark McGuire", "Hank Aaron"],
                         correctAnswer   : 2
                        },
                        {
                          questionText    : "What is the real name of the player nicknamed 'Charlie Hustle'",
                          questionOptions : ["Pete Rose", "Babe Ruth", "Ted Williams", "Reggie Jackson"],
                          correctAnswer   : 1
                         },
                         {
                          questionText    : "The distance between the pitcher's mound and home plate is: ",
                          questionOptions : ["60 feet", "55 feet", "60 feet, 6 inches", "75 feet"],
                          correctAnswer   : 3
                         },
                         {
                          questionText    : "How long did the longest 9-innning game last?",
                          questionOptions : ["4 hours, 45 minutes", "5 hours, two minutes", "6 hours, 30 minutes", "8 hours, 22 minutes", "8 hours, six minutes"],
                          correctAnswer   : 1
                         },
                         {
                          questionText    : "Which pitcher holds the record for most struck out batters in MLB history?",
                          questionOptions : ["Roger Clemens", "Tom Seaver", "Nolan Ryan", "Randy Johnson"],
                          correctAnswer   : 3
                         },
                       
                     ]
    },

    theme2 = {
      themeName    : 'American Cities',
      imagefileName: 'americancities.jpg',
      themeWords   : ['New York', 'Los Angeles' , 'San Francisco', 'Houston', 'Miami', 'Orlando', 'Seattle', 'Detroit', 'Fargo', 'Chicago']
    }
]