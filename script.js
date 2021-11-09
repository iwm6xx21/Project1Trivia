//Pseudocode


//Essential Variables

const startButton = document.getElementById("startGame-btn")
const questionAndAnswers = document.getElementById("questionsAndAnswers")
const grabQuestion = document.getElementById("questions")

// Start Button Prompts
startButton.addEventListener("click", startTheGame)
    
function startTheGame () {
    let theButton = startButton.style.visibility ="hidden"
        if(theButton === "hidden") {
            alert("Instructions: You must answer at least 4/5 questions correctly (80%) to win the game! Click Ok to get started. Let's play!")
        questionAndAnswers.style.visibility = "visible"

        //Test Code
        grabQuestion.innerHTML = questionsAsked[0].question
    }
}

// let response = prompt ("Ready to Play?")

// if (response === "yes") {
//     alert("You must answer at least 4/5 questions correctly (80%) to win the game! Click Ok to get started. Let's play!") 
//     document.getElementById("startGame-btn").style.visibility ="visible"
// } else if (response === "no") {
//     alert("Come back when you're ready to play!")
// } else (
//     alert("Invalid Entry")
// )

// questions

const questionsAsked = [
    {question: "What is the blank?", answer:[
        {choice1: "5", right: false}, {choice2: "9", right:true}, {choice3: "10", right: false}
    ]},
]


// go to next question
function nextQuestion () {

    //or add code that will automaticall go to next question once answer is selected. 

}

//select answer
function selectAnswer () { 

}

// Track Score

function scoreTracker () {

}

