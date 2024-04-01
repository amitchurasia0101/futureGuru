// Object to store the calculated friendship predictions
var friendshipPredictions = {};

function calculateFriendship() {
  var yourName = document.getElementById('yourName').value;
  var friendName = document.getElementById('friendName').value;

  // Check if the prediction for this combination already exists
  var predictionKey = yourName.toLowerCase() + '-' + friendName.toLowerCase();
  if (friendshipPredictions[predictionKey]) {
    displayResult(friendshipPredictions[predictionKey]);
  } else {
    // Calculate the prediction if it's not already stored
    var prediction = (yourName.length + friendName.length) % 101;
    friendshipPredictions[predictionKey] = prediction;
    displayResult(prediction);
  }
}

function displayResult(prediction) {
  var resultDiv = document.getElementById('result');
  var message;

  if (prediction >= 80) {
    message = "You two are best friends forever!";
  } else if (prediction >= 60) {
    message = "You have a strong friendship bond.";
  } else if (prediction >= 40) {
    message = "Your friendship has potential to grow.";
  } else if (prediction >= 20) {
    message = "You are acquaintances, but there's room for improvement.";
  } else {
    message = "It seems like you both are just getting to know each other.";
  }

  resultDiv.innerHTML = "<strong>Friendship Compatibility:</strong> " + prediction + "%<br>" + message;
}
