const d4 = document.getElementById("d4");
const d6 = document.getElementById("d6");
const d8 = document.getElementById("d8");
const d10 = document.getElementById("d10");
const d12 = document.getElementById("d12");
const d20 = document.getElementById("d20");
const d100 = document.getElementById("d100");
const chosenDice = document.getElementById("chosenDice");
const modifier = document.getElementById("modifier");
const roll = document.getElementById("roll");
const result = document.getElementById("result");
const rolls = document.getElementById("rolls");
const addDice = document.getElementById("addDice");
const subtractDice = document.getElementById("subtractDice");

// This array has all the dice and their quantities that the user is going to roll
const dice = {
    4: 0,
    6: 0,
    8: 0,
    10: 0,
    12: 0,
    20: 0,
    100: 0
}

// Adds event listeners for all the dice buttons
d4.addEventListener("click", () => {   
    addDie(4);
});
d6.addEventListener("click", () => {   
    addDie(6);
});
d8.addEventListener("click", () => {   
    addDie(8);
});
d10.addEventListener("click", () => {   
    addDie(10);
});
d12.addEventListener("click", () => {   
    addDie(12);
});
d20.addEventListener("click", () => {   
    addDie(20);
});
d100.addEventListener("click", () => {   
    addDie(100);
});

function addDie(die) { // adds or subtracts dice from the dice object, ie dice the user will roll

    if (addDice.checked) { // checks whether "add" or "subtract" is checked and adds and subtracts dice accordingly
        dice[die]++;
    } else if (subtractDice.checked) {
        dice[die]--;
    }

    chosenDice.textContent = "";
    for (const [die, rolls] of Object.entries(dice)) { // shows what dice the user has selected
        if (rolls > 0) {
            if (chosenDice.textContent.length > 0) {
                chosenDice.textContent += " + ";
            } // adds a + to the entry only if it isn't the first entry
            chosenDice.textContent += `${rolls}D${die}`
        } else if (rolls < 0) {
            if (chosenDice.textContent.length < 0) {
                chosenDice.textContent += " ";
            }
            chosenDice.textContent += `- ${Math.abs(rolls)  }D${die}`
        }
    }

    if (modifier.value != 0) {  // adds a + for modifier only if there is text in the modifier box
        chosenDice.textContent += " +"
    }

}

roll.addEventListener("click", () => { // rolls the user's selected dice
    let total = 0;
    let myRolls = "";
    // modifier.value = 0;
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
// subtracting dice come after adding dice
// roll history
// clear entry
// expandable advanced options menu
//  roll with advantage
//  roll with disadvantage
//  lucky feat
//  halfling luck
// Put dice in a loop so if I add new dice buttons to the html they are automatically added to the JS
// find a way to have the same dice adding and subtracting (eg 1D4 - 1D4)
