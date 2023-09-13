const main = () => {
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const firstEVENTDATE = new Date('October 5, 2023, 19:00:00')
  const secondEVENTDATE = new Date('October 5, 2023, 12:00:00')

  const firstCountDown = new Date(firstEVENTDATE).getTime()
  const secondCountDown = new Date(secondEVENTDATE).getTime()
  const x = setInterval(() => {

    const now = new Date().getTime()
    const firstDistance = firstCountDown - now
    const secondDistance = secondCountDown - now

    document.querySelector("#first-countdown #days").innerText = Math.floor(firstDistance / day)
    document.querySelector("#first-countdown #hours").innerText = Math.floor((firstDistance % day) / (hour))
    document.querySelector("#first-countdown #minutes").innerText = Math.floor((firstDistance % hour) / (minute))
    document.querySelector("#first-countdown #seconds").innerText = Math.floor((firstDistance % minute) / second)

    document.querySelector("#second-countdown #days").innerText = Math.floor(secondDistance / day)
    document.querySelector("#second-countdown #hours").innerText = Math.floor((secondDistance % day) / (hour))
    document.querySelector("#second-countdown #minutes").innerText = Math.floor((secondDistance % hour) / (minute))
    document.querySelector("#second-countdown #seconds").innerText = Math.floor((secondDistance % minute) / second)

    //delay in milliseconds
  }, 0)
}

main();