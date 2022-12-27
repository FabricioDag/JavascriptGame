const canvas = document.querySelector("canvas")
const c =  canvas.getContext('2d')

canvas.width = 1024/2
canvas.height = 576/2




let y = 100
const heightP = 50
let bottomP = y + heightP

function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0,0,canvas.width,canvas.height)

    c.fillStyle = 'red'
    c.fillRect(100,y,50,heightP)

    if(bottomP < canvas.height){
        y+=5
        bottomP= y + heightP
    }
    
}

animate()