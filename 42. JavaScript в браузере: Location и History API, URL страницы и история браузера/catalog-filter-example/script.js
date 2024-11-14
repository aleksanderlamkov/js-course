const filterForm = document.querySelector('.filter')

// window.location.search
//   .replace('?', '')
//   .split('&')
//   .forEach((queryParam) => {
//     const [name, value] = queryParam.split('=')
//
//     filterForm[name].value = value
//   })

const paramsFromUrl = new URLSearchParams(window.location.search)

paramsFromUrl.forEach((value, name) => {
  filterForm[name].value = value
})

// for (let [name, value] of paramsFromUrl.entries()) {
//   filterForm[name].value = value
// }

filterForm.addEventListener('submit', (event) => {
  event.preventDefault()
  /* ... */
})

filterForm.addEventListener('change', () => {
  const formData = new FormData(filterForm)
  const formDataObj = Object.fromEntries(formData)
  const params = new URLSearchParams(formDataObj)
  const paramsString = params.toString()

  window.history.replaceState(formDataObj, '', `${window.location.pathname}?${paramsString}`)
})
