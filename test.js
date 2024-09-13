<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        .calculator {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .display {
            width: 100%;
            height: 40px;
            margin-bottom: 10px;
            text-align: right;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1.5em;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        .button {
            padding: 20px;
            font-size: 1.2em;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
            background-color: #f9f9f9;
        }
        .button.operator {
            background-color: #f0f0f0;
        }
        .button.equal {
            background-color: #4caf50;
            color: #fff;
        }
        .button.clear {
            background-color: #f44336;
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <div class="display" id="display">0</div>
        <div class="buttons">
            <div class="button" onclick="appendNumber('7')">7</div>
            <div class="button" onclick="appendNumber('8')">8</div>
            <div class="button" onclick="appendNumber('9')">9</div>
            <div class="button operator" onclick="chooseOperation('/')">/</div>
            <div class="button" onclick="appendNumber('4')">4</div>
            <div class="button" onclick="appendNumber('5')">5</div>
            <div class="button" onclick="appendNumber('6')">6</div>
            <div class="button operator" onclick="chooseOperation('*')">*</div>
            <div class="button" onclick="appendNumber('1')">1</div>
            <div class="button" onclick="appendNumber('2')">2</div>
            <div class="button" onclick="appendNumber('3')">3</div>
            <div class="button operator" onclick="chooseOperation('-')">-</div>
            <div class="button" onclick="appendNumber('0')">0</div>
            <div class="button" onclick="appendNumber('.')">.</div>
            <div class="button equal" onclick="compute()">=</div>
            <div class="button operator" onclick="chooseOperation('+')">+</div>
            <div class="button clear" onclick="clearDisplay()">C</div>
        </div>
    </div>
    <script>
        let display = document.getElementById('display');
        let currentOperand = '';
        let previousOperand = '';
        let operation = undefined;

        function appendNumber(number) {
            if (number === '.' && currentOperand.includes('.')) return;
            currentOperand = currentOperand.toString() + number.toString();
            updateDisplay();
        }

        function chooseOperation(op) {
            if (currentOperand === '') return;
            if (previousOperand !== '') {
                compute();
            }
            operation = op;
            previousOperand = currentOperand;
            currentOperand = '';
        }

        function compute() {
            let computation;
            const prev = parseFloat(previousOperand);
            const current = parseFloat(currentOperand);
            if (isNaN(prev) || isNaN(current)) return;
            switch (operation) {
                case '+':
                    computation = prev + current;
                    break;
                case '-':
                    computation = prev - current;
                    break;
                case '*':
                    computation = prev * current;
                    break;
                case '/':
                    computation = prev / current;
                    break;
                default:
                    return;
            }
            currentOperand = computation;
            operation = undefined;
            previousOperand = '';
            updateDisplay();
        }

        function clearDisplay() {
            currentOperand = '';
            previousOperand = '';
            operation = undefined;
            updateDisplay();
        }

        function updateDisplay() {
            display.innerText = currentOperand;
        }

        clearDisplay();
    </script>
</body>
</html>