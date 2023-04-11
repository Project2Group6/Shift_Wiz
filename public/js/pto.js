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

// save button class here
document
  .querySelector('.pto-form')
  // Need to add re-direct to a different page after submitting
  .addEventListener('submit', ptoHandler);