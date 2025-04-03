document.addEventListener('DOMContentLoaded',()=>{
    theme()
    tiles()
})


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


function tiles(){
    const tiles = document.querySelectorAll('.tile')
    
    // loop through tiles
    tiles.forEach(tile => {
        // tile event
        tile.addEventListener('click', ()=>{
            
            const choiceData = tile.dataset.type
            const pop = document.querySelector('#pop-up');

            //enable pop up in relation to choice made
            const choice = document.querySelector('.choice')      
            modal(choiceData)
            trivia(choiceData)
            
        })
    })
}

function modal(choiceData){
    const pop = document.querySelector('#pop-up');
    const close = document.querySelector(".close");
    const start = document.querySelector(".start")
    const choice = document.querySelector('.choice')

    pop.style.display = 'block';
    choice.textContent = choiceData.toUpperCase()
    close.addEventListener('click', ()=>{
        pop.style.display = 'none';
    })

    start.addEventListener('click', ()=>{
        // redirect to page trivia referenced to the choice made
        window.location.href = './public/trivia.html'
    })
}

function trivia(choice){
    const quizes = "http://localhost:3000/quizes";
    //retrive data
    fetch(quizes)
    .then((res => res.json()))
    .then((data => {

        const currentTile = data[choice]; //accessing topic choices
        let quiz = [] 
        // access current tile array
        currentTile.forEach(quizData => {
            // console.log(quizData.quiz)
            // console.log(quizData.option)
            // console.log(quizData.answer)

            // store in quiz array loop through indexes,foward through event nextbtn
                   
            quiz.push(quizData.quiz) 
                       
            })
            foward(quiz)
        }))
    .catch((err => console.log('Error fetching data:', err)))
 
}

function display(quiz,index){
    const question = document.querySelector('.questions');
    if(quiz.length > 0){
        question.textContent = quiz[index]
    }
}
//next button event
function foward(quiz){
    let index = 0
    const next = document.querySelector('.next')
    next.onclick = () => {
        index = (index + 1)
        if(index < quiz.length)
        display(quiz,index)
}
}
