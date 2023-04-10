const ptoHandler = async (event) => {
    event.preventDefault();
  
    const ptoStartDate = document.querySelector('#pto-start-date').value;
    const ptoEndDate = document.querySelector('#pto-end-date').value;
    // const ptoReason = document.querySelector('#pto-reason').value;
  
      const response = await fetch('/api/request/pto', {
        method: 'POST',
        body: JSON.stringify({ptoStartDate, ptoEndDate, type: 'pto'
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // save button class here
  document
    .querySelector('.pto-form')
    // Need to add re-direct to a different page after submitting
    .addEventListener('submit', ptoHandler);