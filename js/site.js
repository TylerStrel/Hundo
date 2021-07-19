// Get the values from the UI
function getValues(){
    
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // Parse into Ints
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)){
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    }
    else{

        alert("You must enter integers.");
    }
}

// Generate numbers from startValue to the endValue
function generateNumbers(startValue, endValue){
    
    let numbers = [];

    for (let index = startValue; index <= endValue; index++){

        numbers.push(index);
    }

    return numbers;
}

// Display the numbers and mark even numbers bold
function displayNumbers(numbers){
    
    let className = "even";
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        
        let number = numbers[index];

        if (number % 2 == 0)
        {
            className = "even";
            
        }
        else{
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`
    }

    document.getElementById("results").innerHTML = templateRows;

}