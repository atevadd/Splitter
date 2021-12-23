// The reset button
const resetBtn = document.querySelector('.reset');
// The bill input field
const billField = document.getElementById('bill');
// The number of people field
const peopleField = document.getElementById('people');
// The grid area for the tip buttons on the page
const gridArea = document.querySelector('.grid');
// The custom tip input
const customTip = document.getElementById("custom-input")
// The total tip amount
const totalTip = document.querySelector("#tip-amount")
// The total amount per person
const totalAmount = document.querySelector("#total-amount");


billField.addEventListener("keyup", function () {
  // This is to enable or disable the reset button
  if (billField.value === "") {
    resetBtn.setAttribute('disabled', "");
  } else {
    resetBtn.removeAttribute("disabled");
  }
})

// Calculating the tip function
function calculateTip(tip=10){
  let billAmount = billField.value === "" ? "error" : billField.value;
  let peopleNum = peopleField.value === "" ? "error" : peopleField.value;

  if(billAmount === "error" || peopleNum === "error"){
    return "error";
  }else{
    return Number( (billAmount / peopleNum) * (tip / 100) );
  }
}

// clearing the tip calculator
resetBtn.addEventListener("click", e =>{
  totalAmount.textContent = "0.00"
  totalTip.textContent = "0.00"
})

// Calculating the tip amount after selecting the tip %
gridArea.addEventListener("click", function (e) {
  totalAmount.textContent = Math.floor(calculateTip(e.target.value));
  totalTip.textContent = Math.floor(Math.floor(calculateTip(e.target.value)) / peopleField.value)
});

// calculating the tip amount after a custom tip %
customTip.addEventListener("keyup", function(e){
  totalAmount.textContent = Math.floor(calculateTip(e.target.value));
  totalTip.textContent = Math.floor(Math.floor(calculateTip(e.target.value)) / peopleField.value)
})