document.addEventListener('DOMContentLoaded', ()=>{

    tilebox();
})

function tilebox(){
    const tiles = document.querySelectorAll('.tile')
    tiles.forEach(tile =>{
        // get to each individual tile and query the element audio 
        tile.addEventListener('click', ()=>{
            let beat = tile.querySelector('audio')
            beat.currentTime = 0; //reset so it plays from the start
            beat.play().catch(error => console.error("Playback error:", error));

        })
    })
}