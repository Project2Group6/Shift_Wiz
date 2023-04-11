const timeOffHandler = async (event) => {
  event.preventDefault();

  const sickDate = document.querySelector('#sickCallDate').value;
  const sickReason = document.querySelector('#sickCallReason').value;

  // // prompting and closing the modal
  const modal = document.getElementById("sick-modal");
  const emptyModal = document.getElementById("empty-modal");
  const sickSaveBtn = document.getElementById("save-sick-call");
  const modalClose = document.querySelector("#sick-modal-close");
  const emptyModalClose = document.querySelector("#empty-modal-close");

  modal.style.display = "none";
  emptyModal.style.display = "none";

  modalClose.addEventListener("click", function() {
    modal.style.display = "none";
    document.location.href = "/schedule";
  });

  emptyModalClose.addEventListener("click", function() {
    emptyModal.style.display = "none";
  });

  if (sickReason ==="" && sickDate ==="") {
    emptyModal.style.display = "block";
    // Open the modal
    // ...
  } else {
    // Show an error message or do nothing
    // ...
    const response = await fetch('/api/request/sick-calls', {
      method: 'POST',
      body: JSON.stringify({sickDate, type : "sick", sickReason,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    modal.style.display = "block";
  }

  
}

  // save button class here
document
  .querySelector('.sick-call-form')
  // Need to add re-direct to a different page after submitting
  .addEventListener('submit', timeOffHandler);