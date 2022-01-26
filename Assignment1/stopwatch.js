let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let hunsecs = document.getElementById('hunsecs')

let secondT = 0
let secondO = 0
let minuteT = 0
let minuteO = 0
let hourT = 0
let hourO = 0
let hunsecO = 0
let hunsecT = 0

// let start = document.getElementById('start')
// let stopw = document.getElementById('stop')
// let reset = document.getElementById('reset')

// start.addEventListener("click", () => {
//     console.log("clicked")
//     truevalue = true
//     while (truevalue){
        
//     }
    
// })
let interval;

function stopwatch(){
    clearInterval(interval)
}

function startwatch(){
    clearInterval(interval)
    interval = setInterval(starttimer, 10)
}

function starttimer(){
    if (hunsecO < 9){
        hunsecO++
    }
    else if (hunsecT < 9){
        hunsecT++
        hunsecO = 0
    }
    else if (hunsecO == 9 && hunsecT == 9){
        if (secondO < 9){
            secondO++
            hunsecO = 0
            hunsecT = 0
        }
        else if(secondT < 5){
            secondO = 0
            secondT++
            hunsecO = 0
            hunsecT = 0
        }
        else if (secondO == 9 && secondT == 5 && hunsecO == 9 && hunsecT == 9){
            if (minuteO < 9){
                minuteO++
                hunsecO = 0
                hunsecT = 0
            }
            else if (minuteT < 5){
                minuteO = 0
                minuteT++
                hunsecO = 0
                hunsecT = 0
            }
            else if (minuteT == 5 && secondT == 5 && secondO == 9 && minuteO == 9 && hunsecO == 9 && hunsecT == 9){
                if (hourO < 9){
                    hourO++
                    hunsecO = 0
                    hunsecT = 0
                }
                else{
                    hourT++
                    hunsecO = 0
                    hunsecT = 0
                }
            }
        }
    }
    if (hourO > 0 || hourT > 0){
        hours.textContent = hourT.toString() + hourO.toString() + ":"
    }
    if ( minuteT > 0 || minuteO > 0){
        minutes.textContent = minuteT.toString() + minuteO.toString() + ":"
    }
    seconds.textContent = secondT.toString() + secondO.toString()
    hunsecs.textContent = hunsecT.toString() + hunsecO.toString()
}

function resetwatch() {
    clearInterval(interval)
    hourO = hourT = minuteO = minuteT = secondO = secondT = hunsecO = hunsecT = 0
    hours.textContent = ''
    minutes.textContent = ''
    seconds.textContent = '00'
    hunsecs.textContent = '00'
}