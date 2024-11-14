console.log(window.history)

const backButtonElement = document
  .getElementById('back-button')
const forwardButtonElement = document
  .getElementById('forward-button')

backButtonElement.addEventListener('click', () => {
  window.history.back()
})

forwardButtonElement.addEventListener('click', () => {
  window.history.forward()
})
