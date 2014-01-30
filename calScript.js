
var operators = document.getElementsByName("operate");

function calculate () {
            
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var result = "";
            var which_operator = null;
            for(var i=0; i<operators.length; i++){
                 if(operators[i].checked){
                     which_operator = operators[i].value;  
                     break;            
                }
            }
            
            if (num1 == "" || num2 == "") {
                     result = "Enter your value";
                     document.getElementById("result").textContent = result;
            } else if (which_operator == null) {
                        result = "Choose your operator";
                        document.getElementById("result").textContent = result;
            } else {
                    switch (which_operator) {
                        case "+":
                                    result = parseInt(num1,10) + parseInt(num2,10);
                                    document.getElementById("result").textContent = "Result: "+ result;
                                    break;
                        case "-":
                                    result = num1 - num2;
                                    document.getElementById("result").textContent = "Result: "+ result;
                                    break;
                        case "*":
                                    result = num1 * num2;
                                    document.getElementById("result").textContent = "Result: "+ result;
                                    break;
                        case "/":
                                    if (num2 == 0) {
                                                document.getElementById("result").textContent = "Cannot divide by zero";
                                                break;
                                    } else {
                                                result = num1 / num2;
                                                document.getElementById("result").textContent = "Result: "+ result;
                                                break;
                                    }
                        }    
            }
            
        }
        
        document.getElementById("num1").addEventListener("change",calculate,false);
        document.getElementById("num2").addEventListener("change",calculate,false);
        
        for(var i=0; i<operators.length; i++) {
            operators[i].addEventListener("click",calculate,false);
        }


        

  
