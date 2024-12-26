<script lang="ts">
    let answer: number = 0;
    let currentNumber: number = 0;
    let displayValues: string = "0";
    let isDisabled: boolean = true;
    let operator: string = "";
    let previousNumber: number | null = null;
    
    function displayFunction(symbol: string): void {
        if (operator && previousNumber !== null) {
            calculate();
        }
        operator = symbol;
        previousNumber = currentNumber;
        currentNumber = 0;
        displayValues += ` ${symbol} `;
    }
    
    function inputNumber(num: number): void {
        if(displayValues == "0")
        {
            displayValues = ""
        }
        currentNumber = currentNumber * 10 + num;
        displayValues += num.toString();
    }
    
    function clear(): void {
        operator = "";
        displayValues = "0";
        answer = 0;
        currentNumber = 0;
        previousNumber = null;
    }
    
    function calculate(): void {
        if (previousNumber === null || !operator) return;
    
        switch (operator) {
            case "+":
                answer = (previousNumber || 0) + currentNumber;
                break;
            case "-":
                answer = (previousNumber || 0) - currentNumber;
                break;
            case "*":
                answer = (previousNumber || 0) * currentNumber;
                break;
            case "/":
                if (currentNumber !== 0) {
                    answer = (previousNumber || 0) / currentNumber;
                } else {
                    displayValues = "Error: Division by Zero";
                    return;
                }
                break;
            case "%":
                answer = (previousNumber || 0) % currentNumber;
                break;
        }
    
        displayValues = answer.toString();
        currentNumber = answer;
        previousNumber = null;
        operator = "";
    }
    </script>
    
    <main>
        <div class="row">
            <div class="col-12 d-flex align-items-center justify-content-center">
                <p>Calculator</p>
            </div>
            <div class="col-12">
                <h3>{displayValues}</h3>
            </div>
            <div class="col-12">
                <button on:click={() => clear()} class="numbers">C</button>
                <button on:click={() => displayFunction("%")} class="numbers">%</button>
                <button on:click={() => displayFunction("/")} class="numbers">/</button>
                <button on:click={() => displayFunction("*")} class="operator">*</button>
            </div>
            <div class="col-12">
                <button on:click={() => inputNumber(7)} class="numbers">7</button>
                <button on:click={() => inputNumber(8)} class="numbers">8</button>
                <button on:click={() => inputNumber(9)} class="numbers">9</button>
                <button on:click={() => displayFunction("-")} class="operator">-</button>
            </div>
            <div class="col-12">
                <button on:click={() => inputNumber(4)} class="numbers">4</button>
                <button on:click={() => inputNumber(5)} class="numbers">5</button>
                <button on:click={() => inputNumber(6)} class="numbers">6</button>
                <button on:click={() => displayFunction("+")} class="operator">+</button>
            </div>
            <div class="col-12">
                <button on:click={() => inputNumber(1)} class="numbers">1</button>
                <button on:click={() => inputNumber(2)} class="numbers">2</button>
                <button on:click={() => inputNumber(3)} class="numbers">3</button>
                <button on:click={() => calculate()} class="operator">=</button>
            </div>
        </div>
    </main>
    
    <style>
    .row {
        border-left: 1px solid black;
        padding-bottom: 1em;
        height: 15em;
    }
    .numbers {
        width: 22%;
        border: none;
        background-color: white;
        margin: 1px;
        border-radius: 8px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
    .operator {
        width: 25%;
        background-color: rgb(120, 122, 236);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        color: white;
        border: none;
        border-radius: 8px;
        text-transform: uppercase; 
        letter-spacing: 1px; 
        transition: all 0.3s ease;
        cursor: pointer;
    }
    </style>
    