const timeOffHandler = async (event) => {
    event.preventDefault();
  
    const sickDate = document.querySelector('#sickCallDate').value;
    const sickReason = document.querySelector('#sickCallReason').value;
  
      const response = await fetch('/api/request/sick-calls', {
        method: 'POST',
        body: JSON.stringify({ 
          "start_date": sickDate,
          "type" : "sick",
          "call_in_sick_reason": sickReason,
        //   made default id to 1 for the timebeing
          "employee_id" : 1
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // save button class here
  document
    .querySelector('.sick-call-form')
    // Need to add re-direct to a different page after submitting
    .addEventListener('submit', timeOffHandler);