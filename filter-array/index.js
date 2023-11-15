//const arr = [3, 6, 8, 2]

  //const result = arr.filter(function(num){
    //if(num >5){
      //  return true
    //}
  //})

  //console.log(result)

  //const arr = [3, 6, 8, 2]

  //const result = arr.filter(function(num){
    //if (num % 2 === 0){
      //  return true
    //}
  //})

  //console.log(result)


  //const arr = ["dog", "wolf", "by", "family", "eaten", "camping"]

  //const result = arr.filter(function(word){
    //if(word.length <= 5){
      //  return true
    //}
  //})
  //console.log(result)
    
   //const arr = [
      //{ name: "Angelina Jolie", member: true },
      //{ name: "Eric Jones", member: false },
      //{ name: "Paris Hilton", member: true },
      //{ name: "Kayne West", member: false },
      //{ name: "Bob Ziroll", member: true }]

      //const result = arr.filter(function(name){
        //if(name.member === true){
          //  return name
        //}
      //})

      //console.log(result)

      const arr = [
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 }
    ]

    const result = arr.filter(function(name){
        if(name.age > 18){
            return true
        }
    })

    console.log(result)