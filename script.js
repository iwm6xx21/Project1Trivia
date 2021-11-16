
//Essential Variables

const startButton = document.getElementById("startGame-btn")
const questionAndAnswers = document.getElementById("questionsAndAnswers")
const grabQuestion = document.getElementById("questions")
const nextButton = document.getElementById("next-btn")
const answersDiv = document.getElementById("button-choices")
const scoreStorage = document.getElementById("score-storage")
const scores = document.getElementById("score")
let score = 0; 
let questionsLoop, currentIndex




// Start Button Prompts
startButton.addEventListener("click", startTheGame)
nextButton.addEventListener("click", () => {
    currentIndex++
    nextQuestion()
})

    
function startTheGame () {
    let theButton = startButton.style.visibility ="hidden"
        if(theButton === "hidden") {
            alert("Instructions: You must answer at least 4/5 questions correctly (80%) to win the game! Click Ok to get started. Let's play!")
        questionAndAnswers.style.visibility = "visible"
        scoreStorage.style.visibility ="visible"
        
        //will randomize the order of questions
        questionsLoop = questionsAsked.sort(() => Math.random() - .5 )

        currentIndex = 0
        scores.innerText = "0"
        nextQuestion()

        
    }
}



const questionsAsked = [
    {question: "Before ‘Curb Your Enthusiasm’ what show did Larry David write?", answer:[
        {choice: "Friends", right: false}, {choice: "Seinfeld", right:true}, {choice: "Arrested Development", right: false}
        ]
    },
    {question: "What is Larry's Ex-Wife's name on the show?", answer:[
        {choice: "Victoria", right: false}, {choice: "Susie", right:false}, {choice: "Cheryl", right: true}
        ]
    },

    {question: "What's the name of Larry's manager?", answer:[
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

    //will grab choices from the 'questionsAsked' Array object and loop through them. 
    question.answer.forEach(answers => {
        const buttons = document.createElement('button')
        buttons.innerText = answers.choice
        buttons.classList.add('btn')
        if(answers.right) {
            buttons.dataset.right = answers.right
           
        }
        buttons.addEventListener("click", selectAnswers)
        //will append children of the 'button-choice' id created in html file
        answersDiv.appendChild(buttons)
    })
             
    
}




function selectAnswers (e) {
    const choiceSelected = e.target
    const right = choiceSelected.dataset.right
    setStatusClass(document.body, right)
    Array.from(answersDiv.children).forEach(buttons => {
        setStatusClass(buttons,buttons.dataset.right)
    })

        // statement below stops game if there are no more question to iterate through
        if(questionsLoop.length > currentIndex + 1) {
            nextButton.style.visibility = "visible"
        } 
        else {
            startButton.innerText = "Restart Game"
            startButton.style.visibility ="visible"
            const TotalScore = scores.innerText = score
            if(TotalScore >=4) {grabQuestion.innerText = `You got ${TotalScore} correct which is ${TotalScore / 5 * 100}%! 'Pretty, Pretty, Pretty Good!' Larry David would be proud. 👴🏻`;score = 0} 
            
            else {
                grabQuestion.innerText = `You got ${TotalScore} correct which is ${TotalScore / 5 * 100}%. 'You, know, I'm really not that bright' Larry David would be underwhelmed.` ; score = 0
            }
            
        }
        
}




// Game Scoring Function
function scoreTracker () {
    scores.innerText = score +=1
}

 function setStatusClass (element, right) {

    resetPage(element)
    if(right) {
        alert("That's correct")
        scoreTracker()
        console.log(score)
    } else {
        alert("Wrong!")
    }

 }

 //will reset page once the next button is selected. 
 function resetPage () {
    nextButton.style.visibility = "hidden"
    //will remove additional buttons defined in html 'btn' class
    while(answersDiv.firstChild) {
        answersDiv.removeChild(answersDiv.firstChild)
    }
}


// go to next question
function nextQuestion () {
    resetPage ()
    showTheQuestion(questionsLoop[currentIndex])

}