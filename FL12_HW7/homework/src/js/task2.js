let continueGame = confirm("Do you want to play a game?")
if (continueGame) {
    const prizes = [100, 50, 25];
    let prizeMultiplier = 1;
    const initialPocketAmount = 8;
    let pocketAmountMultiplier = 1.0;
    let currentAttempt = 0;
    let currentPocketNumber;
    let userPocketChoise;
    let userGuessed = false;
    let userPrize = 0;
    let userInput;
    let acceptUserChoise;
    while (continueGame) {
        currentPocketNumber = Math.round(Math.random() * initialPocketAmount * pocketAmountMultiplier);
        do {
            userInput = null;
            userPocketChoise = null;
            acceptUserChoise = false;
            while (!acceptUserChoise) {
                userInput = prompt("Chose a roulette pocket from 0 to " +
                    initialPocketAmount * pocketAmountMultiplier +
                    "\nAttempts left: " + (3 - currentAttempt) + " attempts" +
                    "\nTotal prize: " + userPrize + "$" +
                    "\nPossible prize on current attempt: " + prizes[currentAttempt] * prizeMultiplier + "$");
                if (userInput !== null) {
                    if (!Number.isInteger(Number(userInput))) {
                        alert("Entered value should be integer")
                    } else if (Number(userInput) <= initialPocketAmount * pocketAmountMultiplier &&
                        Number(userInput) >= 0) {
                        acceptUserChoise = true;
                        userPocketChoise = Number(userInput);
                    } else {
                        alert("Entered value is out of bounds, please try again");
                    }
                } else {
                    alert("Whoops, this chance is lost");
                    acceptUserChoise = true;
                }
            }
            if (userPocketChoise === currentPocketNumber) {
                userGuessed = true;
                userPrize += prizes[currentAttempt] * prizeMultiplier;
                break;
            }
            currentAttempt += 1;
            userGuessed = false;
        }
        while (currentAttempt < 3)
        if (userGuessed === true) {
            continueGame = confirm("Congratulation, you won! Your prize is: " +
                userPrize + "$. Do you want to continue?");
        } else {
            continueGame = false;
        }
        if (continueGame) {
            pocketAmountMultiplier += 0.5;
            currentAttempt = 0;
            prizeMultiplier *= 2;
        } else {
            alert("Thank you for your participation. Your prize is: " + userPrize + "$.");
            continueGame = confirm("Do you want to play again?");
            pocketAmountMultiplier = 1.0;
            currentAttempt = 0;
            prizeMultiplier = 1;
            userPrize = 0;
        }
    }
} else {
    alert("You did not become a billionaire, but can.");
}