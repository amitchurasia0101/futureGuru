var resultDisplayed = false;

function calculateLovePercentage() {
    if (resultDisplayed) {
        alert("You've already calculated the love percentage. Please refresh the page to try again.");
        return;
    }

    var yourName = document.getElementById("yourName").value.trim().toLowerCase();
    var partnerName = document.getElementById("partnerName").value.trim().toLowerCase();

    if (yourName === "" || partnerName === "") {
        alert("Please enter both your name and your partner's name.");
        return;
    }

    // Calculate love percentage (for demonstration purpose, this calculation is random)
    var lovePercentage = Math.floor(Math.random() * 101); // Random number between 0 and 100

    // Display result
    var result = "💖 Your Love Percentage with " + partnerName.toUpperCase() + " is: " + lovePercentage + "% 💖\n";
    result += getLovePrediction(lovePercentage) + "\n";
    result += "Suggestions: " + getSuggestions(lovePercentage);
    document.getElementById("result").innerText = result;

    // Set resultDisplayed to true to prevent further calculations for the same persons
    resultDisplayed = true;
}

function getLovePrediction(lovePercentage) {
    if (lovePercentage >= 80) {
        return "Wow! You two are a perfect match made in heaven! ✨✨✨";
    } else if (lovePercentage >= 60) {
        return "You have a good chance of having a successful relationship. ❤️🤞";
    } else if (lovePercentage >= 40) {
        return "It's worth giving it a try. Love can grow with time. 💕";
    } else if (lovePercentage >= 20) {
        return "You might face some challenges, but don't lose hope. 💔😕";
    } else {
        return "Hmm... It might be difficult to find common ground. 😔";
    }
}

function getSuggestions(lovePercentage) {
    if (lovePercentage >= 80) {
        return "Make sure to cherish each other and keep the romance alive!";
    } else if (lovePercentage >= 60) {
        return "Communicate openly and support each other through ups and downs.";
    } else if (lovePercentage >= 40) {
        return "Invest time and effort into understanding each other better.";
    } else if (lovePercentage >= 20) {
        return "Seek guidance from a trusted counselor or therapist if needed.";
    } else {
        return "Focus on self-love and personal growth before seeking a relationship.";
    }
}
