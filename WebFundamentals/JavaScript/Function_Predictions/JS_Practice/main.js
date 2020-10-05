// Assignment 1

function greeting(){
        return "Hello";
        console.log("World");
    }
    var word = greeting();
    console.log(word);




// T Diagram

// Var         Value                        console
// word        greeting() -> Hello          Hello




    // Assignment 2

    function add(num1, num2){
            console.log("Summing Numbers!");
            console.log("num1 is: " + num1);
            console.log("num2 is: " + num2);
            var sum = num1 + num2;
            return sum;
        }
        var result1 = add(3,5);
        var result2 = add(4,7);
        console.log(result1);
        console.log(result2);



                // T Diagram 

// Var         Value                        console
// result1     add(3,5) -> 8
// result2     add(4, 7) -> 11
//                                             8
//                                             11

            // New T Diagram for result1

            // Var         Value                        console
            // num1        3                            
            // num2        5
            //                                          "Summing Numbers!"
            //                                           "nu1 is"3
            //                                            "num2" 5
            // sum          8

                        // New T Diagram for result2

            // Var         Value                        console
                // num1        4
                // num2        7
                   //                                    "Summing Numbers!"
            //                                           "nu1 is"4
            //                                            "num2" 7







    // Assignment 3

    function highFive(num){
            for(var i=0; i<num; i++){
                if(i == 5){
                    console.log("High Five!");
                }
                else{
                    console.log(i);
                }
            }
        }

/* 
This funciton never gets run because it never gets called.
            T Diagram 

Var         Value                        console



*/