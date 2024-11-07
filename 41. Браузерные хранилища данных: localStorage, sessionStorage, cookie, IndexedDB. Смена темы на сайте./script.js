sessionStorage.setItem('username', 'Aleksander')
sessionStorage.setItem('age', '28')

console.log('sessionStorage до очищения:', sessionStorage)

sessionStorage.clear()

console.log('sessionStorage после очищения:', sessionStorage)