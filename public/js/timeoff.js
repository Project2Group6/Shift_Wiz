const timeOffHandler = async (event) => {
    event.preventDefault();
  
    const sickDate = document.querySelector('#sickCallDate').value;
    const sickReason = document.querySelector('#sickCallReason').value;
  
      const response = await fetch('/api/request/sick-calls', {
        method: 'POST',
        body: JSON.stringify({ sickDate, sickReason}),
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // save button class here
  document
    .querySelector('#save-sick-call')
    .addEventListener('submit', timeOffHandler);