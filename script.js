//Pseudocode


//Essential Variables

const startButton = document.getElementById("startGame-btn")
const questionAndAnswers = document.getElementById("questionsAndAnswers")
const grabQuestion = document.getElementById("questions")
const grabAnswers = document.getElementById('button-choices')
let questionsLoop, currentIndex


grabAnswers.addEventListener("click", ()  => {
    alert("Hello")
})

// Start Button Prompts
startButton.addEventListener("click", startTheGame)
    
function startTheGame () {
    let theButton = startButton.style.visibility ="hidden"
        if(theButton === "hidden") {
            alert("Instructions: You must answer at least 4/5 questions correctly (80%) to win the game! Click Ok to get started. Let's play!")
        questionAndAnswers.style.visibility = "visible"
        //Test Code
        questionsLoop = questionsAsked.sort(() => Math.random() - .5 )
        
        currentIndex = 0
        nextQuestion()

        
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

// function shuffleQuestions(array) {
//     let currentIndex = array.length, randomIndex
//     while (currentIndex !=0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;
//         [array[currentIndex], array[randomIndex]] = [array[randomIndex]], array[currentIndex]
//     }
//     return array;
// }

const questionsAsked = [
    {question: "Before ‘Curb Your Enthusiasm’ what show did Larry David write?", answer:[
        {choice: "Friends", right: false}, {choice: "Seinfeld", right:true}, {choice: "Arrested Development", right: false}
        ]
    },
    {question: "What is Larry's Ex-Wife's name on the show", answer:[
        {choice: "Victoria", right: false}, {choice: "Susie", right:false}, {choice: "Cheryl", right: true}
        ]
    },

]




function showTheQuestion (question) {
    grabQuestion.innerHTML = question.question
    document.querySelectorAll(".btn").forEach((btn, i) => {
        btn.innerHTML = question.answer[i].choice
    })
}

function answerSelected () {

}


// go to next question
function nextQuestion () {

    showTheQuestion(questionsLoop[currentIndex])

    //or add code that will automaticall go to next question once answer is selected. 

}


//select answer
function showTheAnswer () { 
    
}

function nextAnswer () {

}

// Track Score

function scoreTracker () {

}

