const TIME = document.querySelector("#time")
const GREETING = document.querySelector("#greeting")


function showTime() {
    let today = new Date()
    hour = today.getHours()
    min = today.getMinutes()
    sec = today.getSeconds()

    hour = hour % 24 || 24

    TIME.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`

    setTimeout(showTime, 1000)
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n
}

function setGreeting() {
    let today = new Date()
    hour = today.getHours()

    if (hour < 9) {
        // if the hour is less than 9 it's morning
        document.body.style.backgroundImage = "url('./pics/morning.avif')"
        GREETING.textContent = 'God Morgen'
         document.body.style.color = 'black'

    } else if (hour < 12) {
        // if the hour is less than 12 it's noon
        document.body.style.backgroundImage = "url('./pics/noon.avif')"
        GREETING.textContent = 'God formiddag'
        document.body.style.color = 'black'

    } else if (hour < 18) {
        // if the hour is less than 18 it's afternoon 
        document.body.style.backgroundImage = "url('./pics/afternoon.avif')"
        GREETING.textContent = 'God eftermiddag'
        document.body.style.color = 'white'
         

    } else {
        // it's evening 
        document.body.style.backgroundImage = "url('./pics/night.avif')"
        GREETING.textContent = 'God aften'
        document.body.style.color = 'white'

        
    }
}


showTime()
setGreeting()