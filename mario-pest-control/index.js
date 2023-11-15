const form = document.myForm

form.addEventListener("submit", (event)=> {
    event.preventDefault()

    const goomba = form.goomba.value
    form.goomba.value = ""

    const h2 = document.createElement("h2")
    h2.textContent = "You now have " + goomba * 5 + " coins!"
    document.getElementById("goo").append(h2)

    alert(goomba * 5)
})

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const bob = form.bob.value
    form.bob.value = ""

    const h2 = document.createElement("h2")
    h2.textContent = bob * 7
    document.getElementById("omb").append(h2)

    alert(bob * 7)
})

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const cheep = form.cheep.value
    form.cheep.value = ""

    const h2 = document.createElement("h2")
    h2.textContent = cheep * 11
    document.getElementById("cheeps").append(h2)

    alert(cheep * 11)
})