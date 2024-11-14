const addToHistoryButtonElement = document
  .getElementById('add-to-history')
const showHistoryButtonElement = document
  .getElementById('show-history')

addToHistoryButtonElement.addEventListener('click', () => {
  window.history.pushState(
    {
      example: 'Какой-то текст',
    },
    '',
    './catalog.html'
  )
})

showHistoryButtonElement.addEventListener('click', () => {
  console.log('history:', window.history)
})
