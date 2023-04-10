const timeOffHandler = async (event) => {
    event.preventDefault();
  
    const sickDate = document.querySelector('#sickCallDate').value;
    const sickReason = document.querySelector('#sickCallReason').value.trim();
  
      const response = await fetch('/api/request/sick-calls', {
        method: 'POST',
        body: JSON.stringify({sickDate, type : "sick", sickReason,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // save button class here
  document
    .querySelector('.sick-call-form')
    // Need to add re-direct to a different page after submitting
    .addEventListener('submit', timeOffHandler);