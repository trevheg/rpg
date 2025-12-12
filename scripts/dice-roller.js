const dieButtons = document.querySelectorAll("#dieButtons .dieButton");
const chosenDice = document.getElementById("chosenDice");
const modifier = document.getElementById("modifier");
const roll = document.getElementById("roll");
const result = document.getElementById("result");
const rollsDisplay = document.getElementById("rolls");
const addDice = document.getElementById("addDice");
const subtractDice = document.getElementById("subtractDice");
const rollHistoryDisplay = document.querySelector("#rollHistory")


// Creates an object of all the dice and their quantities;
const dice = {};
dieButtons.forEach(button => {
    dice[button.value] = 0;
})



// Creates an event listener for each of the buttons 
dieButtons.forEach(button => {        
    // the event listener sends the value of the button, ie the die size, to the addDie function
    button.addEventListener("click", () => {
        addDie(button.value);

    })
});

// Event Listener for the "Roll!" button
roll.addEventListener("click", () => { 
    rollDice();
})

// adds or subtracts dice from the dice object, ie dice the user will roll
function addDie(die) { 
    // checks whether "add" or "subtract" is checked and adds and subtracts dice accordingly
    if (addDice.checked) { 
        dice[die]++;
    } else if (subtractDice.checked) {
        if (dice[die] > 0) {
            dice[die]--;
        }
    }
        
    // console.log(dice);

    // shows what dice the user has selected
    chosenDice.textContent = "";
    for (const [die, rolls] of Object.entries(dice)) { 
        if (rolls > 0 && parseInt(die) > 0) {
            
            // adds a + to the entry only if it isn't the first entry
            if (chosenDice.textContent.length > 0) {
                chosenDice.textContent += " + ";
            }
            chosenDice.textContent += `${rolls}D${die}`
        } else if (rolls > 0 && parseInt(die) < 0) {
            
            // adds a space to the entry only if it isn't the first entry
            if (chosenDice.textContent.length > 0) {
                chosenDice.textContent += " ";
            }
            chosenDice.textContent += `- ${Math.abs(rolls)  }D${Math.abs(parseInt(die))}`
        }
    }

    // adds a + for modifier only if there is text in the modifier box
    if (modifier.value != 0) {
        chosenDice.textContent += " +"
    }

}


// Rolls the selected dice and displays the total
function rollDice() {
    let total = 0;
    let myRolls = ""; // Text showing the individual dice rolled, the modifier, and the total

    // goes through the dice object and rolls the listed dice the chosen number of times
    for (const [die, rolls] of Object.entries(dice)) {          
        for (let i = 0; i < Math.abs(rolls); i++) {
            let roll = Math.floor(Math.random() * Math.abs(die)) + 1;
            if (die < 0) {
                roll *= -1;
            }
            if (rolls > 0 && parseInt(die) > 0) {
                total += roll;
                // adds a + to the entry only if it isn't the first entry
                if (myRolls.length > 0) {                    
                    myRolls += ` + `;
                }
                myRolls += `D${die}(${roll})`;
            } else if (rolls > 0 && parseInt(die) < 0) {
                total += roll;
                // adds a space to the entry only if it isn't the first entry
                if (myRolls.length > 0) {                    
                    myRolls += ` `;
                }
                myRolls += `- D${Math.abs(parseInt(die))}(${Math.abs(roll)})`
            }
        }       
    }

    // Adds the modifier to the rolls text
    if (modifier.value > 0) {
        total += Number(modifier.value);
        myRolls += ` + ${modifier.value}`;
    } else if (modifier.value < 0) {
        total += Number(modifier.value);
        myRolls += ` - ${Math.abs(modifier.value)}`;
    }

    const currentRoll = myRolls + " = " + total;


    result.innerHTML = "You rolled " + total;

    
    const thisRoll = document.createElement("p");
    thisRoll.innerText = currentRoll;
    rollHistoryDisplay.insertBefore(thisRoll, rollHistoryDisplay.firstChild);

    


}

// Bugs:

// To do:
// clear entry
// expandable advanced options menu
//  roll with advantage
//  roll with disadvantage
//  lucky feat
//  halfling luck
// add to website
// make positive and negative dice align
