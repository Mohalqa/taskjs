function performCalculation() {
    
    const operation = document.getElementById('operation').value;
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    let result;

    
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            result = alert('Invalid operation');
    }

    
    console.log(`Operation: ${operation}, Number 1: ${number1}, Number 2: ${number2}, Result: ${result}`);

   
    document.getElementById('result').innerText = `Operation: ${operation}, Number 1: ${number1}, Number 2: ${number2}, Result: ${result}`;
}

// Function to calculate grade based on mark
function calculateGrade() {
    const mark = parseFloat(document.getElementById('mark').value);
    let grade;

    if (mark < 50) {
        grade = 'FAIL';
    } else if (mark >= 50 && mark <= 59) {
        grade = 'D';
    } else if (mark >= 60 && mark <= 69) {
        grade = 'C';
    } else if (mark >= 70 && mark <= 79) {
        grade = 'B';
    } else if (mark >= 80 && mark <= 89) {
        grade = 'A';
    } else if (mark >= 90 && mark <= 100) {
        grade = 'A+';
    } else {
        grade = 'Invalid mark';
    }

    document.getElementById('grade-result').innerText = `Mark: ${mark}, Grade: ${grade}`;
}
function calculateArea() {
    
    const radius = parseFloat(document.getElementById('radius').value);
    
    
    if (isNaN(radius) || radius <= 0) {
        alert('Please enter a valid radius greater than 0.');
        return;
    }
    
   
    const area = Math.PI * Math.pow(radius, 2);

   
    document.getElementById('area-result').innerText = `The area of the circle with radius ${radius} is ${area.toFixed(2)}`;
}

function compareValues() {
   
    const x = parseFloat(prompt("Enter the value for x:"));
    const y = parseFloat(prompt("Enter the value for y:"));

    let message;

   
    if (x > y) {
        message = "Hello World";
    } else {
        message = "Goodbye";
    }

    alert(message);

    
    console.log(message);

   
    document.getElementById('result').innerText = message;
}


compareValues();