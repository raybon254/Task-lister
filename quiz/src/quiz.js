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
            
            //enable pop up in relation to choice made 
            localStorage.setItem("selectedQuiz", choiceData);    
            modal(choiceData)
            // trivia(choiceData)
            
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

