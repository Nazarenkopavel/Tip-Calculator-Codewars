function calculateTip(amount, rating) {
  if (rating == "excellent") {
    return Math.round(amount * 0.2);
  } else if (rating == "good") {
    return Math.round(amount * 0.1);
  } else if (rating == "great") {
    return Math.round(amount * 0.15);
  } else if (rating == "poor") {
    return Math.round(amount * 0.05);
  } else if (rating == "terrible") {
    return amount * 0;
  } else {
    return "Rating not recognised";
  }
}

console.log(calculateTip(20, "excellent"));
console.log(calculateTip(26.95, "good"));
