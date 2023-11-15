const form = document.myForm

form.addEventListener ("submit",  (formAlert) => {
    formAlert.preventDefault()

    const firstName = form.elements["firstName"].value;
    const lastName = form.elements["lastName"].value;
    const age = form.elements["age"].value;
    const gender = form.elements["gender"].value;
    const food = [];

    for(let i = 0; i < form.food.length; i++){
    if(form.food[i].checked){
        food.push(form.food[i].value)
    }
}

const city = form.elements["city"].value; 



alert("First Name: " + firstName + " Last Name: " + lastName + " Age: " + age + " Gender: " + gender + " Food Preference: " + food + " Destination: " + city)


})
