const form = document.addItem
form.addEventListener('submit', function(e){
e.preventDefault()

const newItem = form.title.value
form.title.value = ''

const li = document.createElement('li')
li.textContent = newItem + "" 
document.getElementsByTagName('ul')[0].append(li)

let button = document.createElement('button')
button.textContent = 'X'
li.appendChild(button)
button.addEventListener('click', (e) => {
    li.remove()
})
})