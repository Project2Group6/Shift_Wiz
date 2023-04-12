const ptoHandler = async (event) => {
  event.preventDefault();

  const ptoStartDate = document.querySelector('#pto-start-date').value;
  const ptoEndDate = document.querySelector('#pto-end-date').value;
  // const ptoReason = document.querySelector('#pto-reason').value;
  // // prompting and closing the modal
  const modal = document.getElementById("pto-modal");
  const emptyModal = document.getElementById("empty-modal");
  const ptoSaveBtn = document.getElementById("save-pto");
  const modalClose = document.querySelector("#pto-modal-close");
  const emptyModalClose = document.querySelector("#empty-modal-close");

  modal.style.display = "none";
  emptyModal.style.display = "none";

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
    document.location.href = "/schedule";
  });

  emptyModalClose.addEventListener("click", function () {
    emptyModal.style.display = "none";
  });

  if (ptoStartDate === "" && ptoEndDate === "") {
    emptyModal.style.display = "block";
    // Open the modal
    // ...
  } else {
    // Show an error message or do nothing
    const response = await fetch('/api/request/pto', {
      method: 'POST',
      body: JSON.stringify({
        ptoStartDate, ptoEndDate, type: 'pto'
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    modal.style.display = "block";
  }
}



var ptoInput = document.getElementById('pto-start-date');
var ptoEndDate = document.getElementById('pto-end-date');
  var todaysDate = new Date(); // Get today's date.

  // Get today's date.

  var year = todaysDate.getFullYear(); // yyyy

  var month = ("0" + (todaysDate.getMonth() + 1)).slice(-2); // mm

  var day = ("0" + todaysDate.getDate()).slice(-2); // dd

  var dtToday = year + "-" + month + "-" + day; // Results in yyyy-mm-dd

  // Now set the max date value for the calendar to be that date.

  //$(".Past input").attr("max", dtToday);
ptoInput.setAttribute('min', dtToday);

console.log("hello" + ptoInput.value);

if(!ptoInput.value){
  ptoEndDate.disabled = true
}
ptoInput.onchange = function (){
  console.log(ptoInput.value);
  ptoEndDate.disabled = false;

  ptoEndDate.setAttribute('min', ptoInput.value);
}



// save button class here
document
  .querySelector('.pto-form')
  // Need to add re-direct to a different page after submitting
  .addEventListener('submit', ptoHandler);