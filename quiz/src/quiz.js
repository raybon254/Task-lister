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
            
            
            
            
        })
    })
}
