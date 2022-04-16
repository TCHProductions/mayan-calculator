// Requirements of a calculator 
// accept user inputs of number, operator and antoher number. Including decimal numbers.
// Store the inputs
// recognise inputs and perform calculations
// return a result

// Optional Features
// Should accept more arithmatic operations
// Display the input as it is being entered. 
// Store previous total as start of next operation. 
// Clear button should clear all entries. 
// should prevent invalid inputs


const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')) {
            return;
        } else {
            //pass value to parse method
            calculator.parseInput(value)
        }
    })

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value) {

        // have any of the non-numerical, non-operator buttons been pressed?
        switch(value) {
            case '=' :
                this.calcAnswer(this.displayText)
                break
            case 'AC':
                this.clearAll()
                break;
            case '.' :
                if (this.displayText == 0){
                    this.addText('')
            }   else {
                    this.addText(value)
            }   
            break;
            default: 
                this.addText(value)
                break;
        }

        },
        addText(value) {
            if (this.displayText === '0') {
                this.displayText = ''
            } else if (this.prevTotal !== null) {
                this.displayText = this.prevTotal
                this.prevTotal = null
            }
            if (isNaN(+(value)) && isNaN(+(this.displayText))) {
                if(isNaN(this.displayText.slice(-1))){
                    return;
                }

            }
            this.displayText += value
            this.outputText(this.displayText)

        },

        outputText(text) {
            document.querySelector('.calculator-screen').value = text
        },
        calcAnswer(equation){
            let result = Function("return " + equation)()
            this.outputText(result)
        },
        clearAll() {
            this.displayText = '0',
            this.prevTotal = null;
            this.outputText(this.displayText)
        }

}
    
