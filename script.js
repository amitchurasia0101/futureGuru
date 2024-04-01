// Object to store the calculated love predictions
var lovePredictions = {};

function calculateLovePercentage() {
  var yourName = document.getElementById('yourName').value;
  var partnerName = document.getElementById('partnerName').value;

  // Check if the prediction for this combination already exists
  var predictionKey = yourName.toLowerCase() + '-' + partnerName.toLowerCase();
  if (lovePredictions[predictionKey]) {
    displayLoveResult(lovePredictions[predictionKey]);
  } else {
    // Calculate the prediction if it's not already stored
    var prediction = (yourName.length + partnerName.length) % 101;
    lovePredictions[predictionKey] = prediction;
    displayLoveResult(prediction);
  }
}

function displayLoveResult(prediction) {
  var resultDiv = document.getElementById('result');
  var message;

  if (prediction >= 80) {
    message = "You two are deeply in love!";
  } else if (prediction >= 60) {
    message = "Your love is strong and enduring.";
  } else if (prediction >= 40) {
    message = "Your love has potential to grow.";
  } else if (prediction >= 20) {
    message = "You have feelings for each other, but it's complicated.";
  } else {
    message = "It seems like there might not be much romantic chemistry between you.";
  }

  resultDiv.innerHTML = "<strong>Love Compatibility:</strong> " + prediction + "%<br>" + message;
}
