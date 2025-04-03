document.addEventListener('DOMContentLoaded', ()=>{
    theme()
    trivia()
})

// globals
const choice = localStorage.getItem("selectedQuiz")


function theme(){
    const themeToggle = document.getElementById("themeToggle");

    // Load theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });
}


function trivia(){
    const quizes = "http://localhost:3000/quizes";
    //retrive data
    fetch(quizes)
    .then((res => res.json()))
    .then((data => {

        const currentTile = data[choice]; //accessing topic choices
        let quiz = [] 
        let ansOption = []
        // access current tile array
        currentTile.forEach(quizData => {
            Object.entries(quizData.quiz).forEach(quizTrivia => {
                // console.log(quizTrivia[1])

                // store in quiz array loop through indexes,foward through event nextbtn 
                quiz.push(quizTrivia[1])
            })
           
            // picking array for option choices
                ansOption.push(quizData.option)
            })
            foward(quiz,ansOption)
        }))
    .catch((err => console.log('Error fetching data:', err)))
 
}

function display(quiz,index,option){
    const question = document.querySelector('.questions');
    const ans = document.querySelector('.ans');
    if(quiz.length > 0){
        question.textContent = quiz[index]
        ans.textContent = option[index]
    }
}
//next button event
function foward(quiz,option){
    let index = 0
    const next = document.querySelector('.next')
    next.onclick = () => {
        index = (index + 1)
        if(index < quiz.length)
        display(quiz,index,option)
        timer(quiz, index, option)
}
}

// timelapse per question
function timer(quiz, index, option) {
    let time = 10;
    const timerDisplay = document.querySelector('.timer');
   
    
    const countdown = setInterval(() => {
        time--;
        if (timerDisplay) {
            timerDisplay.style.display = 'block'
            timerDisplay.textContent = `Time remaining:  ${time}`;
        }
        
        if (time < 1) {
            clearInterval(countdown); // ❗ pass countdown here to stop the interval

            // Move to next question
            index = (index + 1); // loop back if needed
            display(quiz, index, option);

            // Start timer again for next question
            timer(quiz, index, option);
        }
    }, 1000);
}
