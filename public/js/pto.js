const ptoHandler = async (event) => {
    event.preventDefault();
  
    const ptoStartDate = document.querySelector('#pto-start-date').value;
    const ptoEndDate = document.querySelector('#pto-end-date').value;
    const ptoReason = document.querySelector('#pto-reason').value;
  
      const response = await fetch('/api/request/sick-calls', {
        method: 'POST',
        body: JSON.stringify({ 
          "start_date": ptoStartDate,
          "end_date" : ptoEndDate,
          "type" : "pto",
          "call_in_sick_reason": ptoReason,
        //   made default id to 1 for the timebeing
          "employee_id" : 1
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // save button class here
  document
    .querySelector('.pto-form')
    // Need to add re-direct to a different page after submitting
    .addEventListener('submit', ptoHandler);