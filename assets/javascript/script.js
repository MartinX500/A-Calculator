// 
const display = document.getElementById('display');

function appendToDisplay(input){
        display.value += input;
}

function calculatePercentage(){
        display.value /= 100; 
}

function cancelDisplay(){
        display.value = display.value.slice(0, -1);
}

function clearDisplay(){
        display.value = "";
}

function calculate(){
        try{
                display.value = eval(display.value);
        }
        catch(error){
                display.value = 'Error';
        }        
}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // const display = document.getElementById('display');
        // const clearBtn = document.getElementById('clearBtn');
        // const equalsBtn = document.getElementById('equalsBtn');
        // const buttons = document.querySelectorAll('.btn:not(.clear):not(.equals)');

        // let currentInput = '0';
        // let firstOperand = null;
        // let operator = null;
        // let waitingForSecondOperand = false;

        // function updateDisplay() {
        //     display.textContent = currentInput;
        // }

        // function clearCalculator() {
        //     currentInput = '0';
        //     firstOperand = null;
        //     operator = null;
        //     waitingForSecondOperand = false;
        //     updateDisplay();
        // }

        // function inputDigit(digit) {
        //     if (waitingForSecondOperand === true) {
        //         currentInput = digit;
        //         waitingForSecondOperand = false;
        //     } else {
        //         currentInput = currentInput === '0' ? digit : currentInput + digit;
        //     }
        //     updateDisplay();
        // }

        // function inputDecimal(dot) {
        //     // If the display already contains a decimal point, do nothing
        //     if (waitingForSecondOperand === true) {
        //         currentInput = '0.';
        //         waitingForSecondOperand = false;
        //         updateDisplay();
        //         return;
        //     }
        //     if (!currentInput.includes(dot)) {
        //         currentInput += dot;
        //     }
        //     updateDisplay();
        // }

        // function handleOperator(nextOperator) {
        //     const inputValue = parseFloat(currentInput);

        //     if (operator && waitingForSecondOperand) {
        //         operator = nextOperator;
        //         return;
        //     }

        //     if (firstOperand === null) {
        //         firstOperand = inputValue;
        //     } else if (operator) {
        //         const result = performCalculation[operator](firstOperand, inputValue);
        //         currentInput = String(result);
        //         firstOperand = result;
        //     }

        //     waitingForSecondOperand = true;
        //     operator = nextOperator;
        //     updateDisplay();
        // }

        // const performCalculation = {
        //     '/': (firstOperand, secondOperand) => secondOperand === 0 ? 'Error' : firstOperand / secondOperand,
        //     '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
        //     '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
        //     '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
        //     '=': (firstOperand, secondOperand) => secondOperand // This case is handled by the main logic
        // };

        // // Event Listeners
        // clearBtn.addEventListener('click', clearCalculator);

        // buttons.forEach(button => {
        //     button.addEventListener('click', (event) => {
        //         const { value } = event.target.dataset;
        //         const { operator: op } = event.target.dataset;

        //         if (value) {
        //             if (value === '.') {
        //                 inputDecimal(value);
        //             } else {
        //                 inputDigit(value);
        //             }
        //         } else if (op) {
        //             handleOperator(op);
        //         }
        //     });
        // });

        // equalsBtn.addEventListener('click', () => {
        //     if (firstOperand === null || operator === null) {
        //         // If there's nothing to calculate, do nothing
        //         return;
        //     }

        //     const inputValue = parseFloat(currentInput);
        //     let result;

        //     if (operator) {
        //         result = performCalculation[operator](firstOperand, inputValue);
        //     }

        //     currentInput = String(result);
        //     firstOperand = null;
        //     operator = null;
        //     waitingForSecondOperand = false;
        //     updateDisplay();
        // });

        // // Initialize display
        // updateDisplay();