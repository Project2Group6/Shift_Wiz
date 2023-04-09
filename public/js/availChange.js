const availChangeHandler = async (event) => {
    event.preventDefault();
  
    const works_sunday = document.querySelector('#works_sunday').value;
    const works_monday = document.querySelector('#works_monday').value;
    const works_tuesday = document.querySelector('#works_tuesday').value;
    const works_wednesday = document.querySelector('#works_wednesday').value;
    const works_thursday = document.querySelector('#works_thursday').value;
    const works_friday = document.querySelector('#works_friday').value;
    const works_saturday = document.querySelector('#works_saturday').value;
  
      const response = await fetch('/api/request/availability', {
        method: 'PUT',
        body: JSON.stringify({ works_sunday, works_monday, works_tuesday, works_wednesday, works_thursday, works_friday, works_saturday}),
        headers: { 'Content-Type': 'application/json' },
      });
    }

  document
  // save button class here
    .querySelector('')
    .addEventListener('submit', signupFormHandler);