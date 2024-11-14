console.log(window.history)

const backButtonElement = document.getElementById('back-button')
const forwardButtonElement = document.getElementById('forward-button')

backButtonElement.addEventListener('click', () => {
  window.history.go(-2)
})

forwardButtonElement.addEventListener('click', () => {
  window.history.go(3)
})
