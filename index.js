var billAmount = document.getElementById("bill-amount").value;
var numberOfPeople = document.getElementById("party-amount").value;
var fivePercent = document.getElementsById("five").value; 
var tenPercent = document.getElementById("ten").value;
var fifteenPercent = document.getElementById("fifteen").value;
var twentyFivePercent = document.getElementById("twenty-five").value;
var fiftyPercent = document.getElementById("fifty").value;
var customPercent = document.getElementById("custom").value;
var partySize = document.getElementById("party-amount").value;


function findTip(billAmount, percentage){
    var tip = billAmount * percentage;
    var finalTip = billAmount - tip;
    return finalTip / partySize
    
}


fivePercent.addEventListener('click', findTip);
tenPercent.addEventListener('click', findTip);
fifteenPercent.addEventListener('click', findTip);
twentyFivePercent.addEventListener('click', findTip);
fiftyPercent.addEventListener('click', findTip);

var tipTotal = document.getElementById("tip-answer");
var showTotal = document.getElementById("total-answer");
