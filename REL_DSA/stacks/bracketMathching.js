let str = "({[]})"  //true
let str2 = "(({)" //false


function isBracketMatching(str){

   
    let matchBracket = {
        ")":"(",
        "}":"{",
        "]":"["
    }

    let stack = []

    for(let value of str){

         if(value === '(' || value === "{"  || value === "["){

            
            stack.push(value);


         }
         else{
            if(stack.length === 0){
                return false
            }

            if(stack[stack.length - 1] === matchBracket[value]){
                
                stack.pop()
            }
         }
    }
   console.log(stack)

    return stack.length === 0

}


console.log(isBracketMatching(str))
console.log(isBracketMatching(str2))