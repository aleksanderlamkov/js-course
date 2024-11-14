console.log(window.location)

setTimeout(() => {
  // window.location.assign('./catalog.html')
  // window.location.replace('./catalog.html')
  // window.location.href = './catalog.html'
}, 3000)

document.addEventListener('click', (event) => {
  if (event.target.href) {
    event.preventDefault()
    window.location.href = event.target.href
  }
})