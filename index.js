var billAmountInput = document.getElementById("bill-amount");
var numberOfPeople = document.getElementById("party-amount");
var fivePercent = document.getElementById("five");

var tenPercent = document.getElementById("ten");
var fifteenPercent = document.getElementById("fifteen");
var twentyFivePercent = document.getElementById("twenty-five");
var fiftyPercent = document.getElementById("fifty");
var customPercent = document.getElementById("custom");

var tipTotal = document.getElementById("tip-answer");
var showTotal = document.getElementById("total-answer");

const resetButton = document.getElementById("reset-button");

CurrentTipPercent = 0;

function parseNumber(num) {
  var num = Number.parseFloat(num);
  num = Math.round(num * 100);
  return num / 100;
}

function getBill() {
  return parseNumber(billAmountInput.value);
}
function getNumberOfPeople() {
  return parseNumber(numberOfPeople.value);
}

function findTip(billAmount, partySize, percentage) {
  partySize = parseInt(partySize, 10);
  if (partySize === 0) {
    console.error("Party size cant be 0");
    return 0;
  }
  percentage = percentage / 100;
  console.log(percentage);
  var tip = billAmount * percentage;
  console.log(tip);
  return tip / partySize;
}

// fivePercent.addEventListener("click", function () {
//   var billamount = getBill();
//   var numPeople = getNumberOfPeople();
//   var tipPerPerson = findTip(billamount, numPeople, 5);
//   tipTotal.textContent = tipPerPerson;
//   showTotal.textContent(billamount + tipPerPerson * numPeople);

//   //    tipTotal.textContent(
//   //        findTip(
//   //            getBill(),
//   //            getNumberOfPeople(),
//   //            5
//   //         )
//   //     );
// });

function formatDollar(num) {
  return `$${Number.parseFloat(num).toFixed(2)}`;
}
function update() {
  var billamount = getBill();
  var numPeople = getNumberOfPeople();
  var tipPerPerson = findTip(billamount, numPeople, CurrentTipPercent);
  console.log(tipPerPerson);
  tipTotal.textContent = formatDollar(parseNumber(tipPerPerson));
  showTotal.textContent = formatDollar(
    parseNumber(billamount / numPeople) //+ parseNumber(tipPerPerson * numPeople)
  );
}

fivePercent.addEventListener("click", function () {
  CurrentTipPercent = 5;
  update();
});

tenPercent.addEventListener("click", function () {
  CurrentTipPercent = 10;
  update();
});

fifteenPercent.addEventListener("click", function () {
  CurrentTipPercent = 15;
  update();
});
twentyFivePercent.addEventListener("click", function () {
  CurrentTipPercent = 25;
  update();
});
fiftyPercent.addEventListener("click", function () {
  CurrentTipPercent = 50;
  update();
});

billAmountInput.addEventListener("blur", update);



resetButton.addEventListener("click", function () {
  billAmountInput.value = 0;
  numberOfPeople.value = 1;
  tipTotal.textContent = `$0.00`;
  showTotal.textContent = `$0.00`;
});
