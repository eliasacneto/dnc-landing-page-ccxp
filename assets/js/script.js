const day = document.getElementById('day')
const hour = document.getElementById('hour')
const min = document.getElementById('min')
const sec = document.getElementById('sec')

const launch = "01 dec 2023"

function countDown(){
  const launchDate = new Date(launch)
  const today = new Date()

  const totalSec = (launchDate - today)/1000


  const finalDay = Math.floor(totalSec / 60 / 60 / 24)
  const finalHour = Math.floor(totalSec / 60 / 60) % 24
  const finalMin = Math.floor(totalSec / 60 ) % 60
  const finalSec = Math.floor(totalSec) % 60

day.innerHTML = finalDay +"D"
hour.innerHTML = formatTime(finalHour) +"H"
min.innerHTML = formatTime(finalMin)+"M"
sec.innerHTML = formatTime(finalSec)+"S"

}
function formatTime(time){
  return time < 10 ? `0${time}` : time
}

countDown();
setInterval(countDown, 1000)