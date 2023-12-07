const formReference = document.getElementsByTagName('form')[0]
const createTabNumeri = function (caselle) {
  const calendarDiv = document.getElementById('calendar')

  for (let i = 0; i < caselle; i++) {
    const dayCellDiv = document.createElement('div')

    dayCellDiv.classList.add('day')

    const cellValue = document.createElement('h3')

    cellValue.innerText = i + 1

    dayCellDiv.appendChild(cellValue)
    calendarDiv.appendChild(dayCellDiv)
    formReference.addEventListener('submit', function (e) {
      e.preventDefault()

      let max = 1
      let min = 79
      const numRandom = Math.floor(Math.random() * (max - min + 1)) + min
      const lastnumber = document.getElementById('last_number')
      lastnumber.classList.add('hasDay')
      lastnumber.innerText = numRandom
      for (let i = 0; i < caselle; i++) {
        if (random === i + 1) {
          dayCellDiv.style.color = 'red'
        }
      }
    })
  }
}

const numTab = 79

createTabNumeri(numTab)
