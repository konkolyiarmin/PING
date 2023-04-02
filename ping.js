import ball from './ball.js'

let lastTime
const ball = new ball(documemt.getElemntById("ball"))

function update(time) {
    if (lastTime !=null ) {
        const delta = time - lastTime
        ball.update(delta)
    }
    console.log(delta)
    lastTime = time  
    window.requestAnimationFrame(update)
}






window.requestAnimationFrame(update)