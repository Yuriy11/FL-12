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
    while (continueGame) {
        currentPocketNumber = Math.round(Math.random() * initialPocketAmount);
        do {
            console.log("current attempt : " + currentAttempt + "; pocket number : " + currentPocketNumber);
            userPocketChoise = parseInt(prompt("Chose a roulette pocket from 0 to " + (initialPocketAmount * pocketAmountMultiplier) +
                "\nAttempts left: " + (3 - currentAttempt) + " attempts" +
                "\nTotal prize: " + userPrize + "$" +
                "\nPossible prize on current attempt: " + (prizes[currentAttempt] * prizeMultiplier) + "$"));
            console.log("user choise " + userPocketChoise);
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
            continueGame = confirm("Congratulation, you won! Your prize is: " + userPrize + "$. Do you want to continue?");
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