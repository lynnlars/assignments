var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]




// function sortedOfAge(arr){
//     // Your code here
//  }
 
//  console.log(sortedOfAge(peopleArray));
 
//  /*
//  Output:
//  [
//      "<li>Kyle Mooney is 27</li>",
//      "<li>Sarah Palin is 47</li>",
//      "<li>Rick Sanchez is 78</li>",
//      "<li>Morty Smith is 29</li>",
//      "<li>Lev Tolstoy is 82</li>"
//  ]
//  */


    const filteredArray = peopleArray.filter(person => person.age > 18).sort((personOne, personTwo) => {
        if (personOne.lastName < personTwo.lastName) { 
            return -1;
        }
        if (personOne.lastName > personTwo.lastName) {
            return 1; 
        }}).map(function(person){
            if(person.age > 18){
                return "<li> " + person.firstName + " " + person.lastName + " is " + person.age + " years old. <li>"
            }
        })
        
        console.log(filteredArray)