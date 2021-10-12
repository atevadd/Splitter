// The reset button
const resetBtn = document.querySelector('.reset');
// The bill input field
const billField = document.getElementById('bill');
// The number of people field
const peopleField = document.getElementById('people');
// The grid area for the tip buttons on the page
const gridArea = document.querySelector('.grid');

gridArea.addEventListener('click', function(e){
  console.log(e.target);
  e.target.classList.toggle('selected');
})


billField.addEventListener("keyup", function () {
  // This is to enable or disable the reset button
  if (billField.value === "") {
    resetBtn.setAttribute('disabled', " ");
  } else {
    resetBtn.removeAttribute("disabled");
  }
})


function calculateTip(tip){
  let billAmount = billField.value === "" ? "error" : billField.value;
  let peopleNum = peopleField.value === "" ? "error": peopleField.value;

  if(billAmount === "error" || peopleNum === "error"){
    return "error";
  }else{
    return Number( (billAmount / peopleNum) * (tip / 100) );
  }
}

resetBtn.addEventListener("click", e =>{
  console.log(calculateTip(15))
})