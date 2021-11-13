
//Essential Variables

const startButton = document.getElementById("startGame-btn")
const questionAndAnswers = document.getElementById("questionsAndAnswers")
const grabQuestion = document.getElementById("questions")
const nextButton = document.getElementById("next-btn")
let questionsLoop, currentIndex



// Start Button Prompts
startButton.addEventListener("click", startTheGame)
    
function startTheGame () {
    let theButton = startButton.style.visibility ="hidden"
        if(theButton === "hidden") {
            alert("Instructions: You must answer at least 4/5 questions correctly (80%) to win the game! Click Ok to get started. Let's play!")
        questionAndAnswers.style.visibility = "visible"
        
        questionsLoop = questionsAsked.sort(() => Math.random() - .5 )

        currentIndex = 0
        nextQuestion()

        
    }
}



const questionsAsked = [
    {question: "Before ‘Curb Your Enthusiasm’ what show did Larry David write?", answer:[
        {choice: "Friends", right: false}, {choice: "Seinfeld", right:true}, {choice: "Arrested Development", right: false}
        ]
    },
    {question: "What is Larry's Ex-Wife's name on the show", answer:[
        {choice: "Victoria", right: false}, {choice: "Susie", right:false}, {choice: "Cheryl", right: true}
        ]
    },

    {question: "What's the name of Larry's manager", answer:[
        {choice: "Jeff Green", right: true}, {choice: "Leon Black", right:false}, {choice: "Ted Danson", right: false}
        ]
    },

    {question: "According to Larry, why are hamsters fun to have as pets?", answer:[
        {choice: "They don't bark", right: false}, {choice: "You can tortue them", right:true}, {choice: "They're not needy like other pets", right: false}
        ]
    },

    {question: "What is the name of the Curb theme song?", answer:[
        {choice: "Frisky", right: false}, {choice: "Frolic", right:true}, {choice: "Fancy", right: false}
        ]
    },

]




function showTheQuestion (question) {
    grabQuestion.innerHTML = question.question
    document.querySelectorAll(".btn").forEach((btn, i) => {
        btn.innerHTML = question.answer[i].choice
        
        let correctAnswer = question.answer[i].right
        console.log(correctAnswer)
        
        btn.addEventListener("click", () => {
            if(correctAnswer === true) {
                alert("That's right!")
            } else if (correctAnswer === false)
                alert("Wrong!")
                nextButton.style.visibility = "visible"
                // btn.removeEventListener()
        });

        
    })
}


// const grabAnswers = document.getElementById("button-choices")
// grabAnswers.dataset

// grabAnswers.addEventListener("click", answerSelected)


// function answerSelected () {
   
//     alert("Clicked")

// }
    
   
        

    




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

// ("click", answerSelected)
//         if(correctAnswer === true) {
//             alert("That's right!")
//         }