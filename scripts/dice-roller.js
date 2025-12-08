const dieButtons = document.querySelectorAll("#dieButtons .dieButton");
const chosenDice = document.getElementById("chosenDice");
const modifier = document.getElementById("modifier");
const roll = document.getElementById("roll");
const result = document.getElementById("result");
const rolls = document.getElementById("rolls");
const addDice = document.getElementById("addDice");
const subtractDice = document.getElementById("subtractDice");


// Creates an object of all the dice and their quantities;
const dice = {};
dieButtons.forEach(button => {
    dice[button.value] = 0;
})

console.log(dice)

// Creates an event listener for each of the buttons 
// the event listener sends the value of the button, ie the die size, to the addDie function
dieButtons.forEach(button => {
    button.addEventListener("click", () => {
        addDie(button.value);

    })
});

function addDie(die) { // adds or subtracts dice from the dice object, ie dice the user will roll
    // checks whether "add" or "subtract" is checked and adds and subtracts dice accordingly
    if (addDice.checked) { 
        dice[die]++;
    } else if (subtractDice.checked) {
        if (dice[die] > 0) {
            dice[die]--;
        }
    }
        
    console.log(dice);

    // shows what dice the user has selected
    // chosenDice.textContent = "";
    // for (const [die, rolls] of Object.entries(dice)) { 
    //     if (rolls > 0) {
    //         if (chosenDice.textContent.length > 0) {
    //             chosenDice.textContent += " + ";
    //         } // adds a + to the entry only if it isn't the first entry
    //         chosenDice.textContent += `${rolls}D${die}`
    //     } else if (rolls < 0) {
    //         if (chosenDice.textContent.length < 0) {
    //             chosenDice.textContent += " ";
    //         }
    //         chosenDice.textContent += `- ${Math.abs(rolls)  }D${die}`
    //     }
    // }

    // // adds a + for modifier only if there is text in the modifier box
    // if (modifier.value != 0) {
    //     chosenDice.textContent += " +"
    // }

}

// rolls the user's selected dice
roll.addEventListener("click", () => { 
    let total = 0;
    let myRolls = ""; // Text showing the individual dice rolled, the modifier, and the total

    for (const [die, rolls] of Object.entries(dice)) {
        
        for (let i = 0; i < Math.abs(rolls); i++) {
            let roll = Math.floor(Math.random() * die) + 1;
            if (rolls > 0) {
                total += roll;
                if (myRolls.length > 0) {                    
                    myRolls += ` + `;
                }
                myRolls += `D${die}(${roll})`
            } else if (rolls < 0) {
                total -= roll;
                if (myRolls.length > 0) {                    
                    myRolls += ` `;
                }
                myRolls += `- D${die}(${roll})`
            }
        }       
    }
    if (modifier.value > 0) {
        total += Number(modifier.value);

        myRolls += ` + ${modifier.value}`;
    } else if (modifier.value < 0) {
        total += Number(modifier.value);
        myRolls += ` - ${Math.abs(modifier.value)}`;
    }
    // console.log("you rolled " + total);

    rolls.innerHTML = myRolls;
    result.innerHTML = "You rolled " + total;
})

// To do:
// fix the dice display to work with the new code
// make negative dice show up on next line and align with ones above
// subtracting dice come after adding dice
// roll history
// clear entry
// expandable advanced options menu
//  roll with advantage
//  roll with disadvantage
//  lucky feat
//  halfling luck
// Put dice in a loop so if I add new dice buttons to the html they are automatically added to the JS
// add to website
