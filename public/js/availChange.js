const availChangeHandler = async (event) => {
    event.preventDefault();
  
    const works_sunday = document.querySelector('#works_sunday').checked;
    const works_monday = document.querySelector('#works_monday').checked;
    const works_tuesday = document.querySelector('#works_tuesday').checked;
    const works_wednesday = document.querySelector('#works_wednesday').checked;
    const works_thursday = document.querySelector('#works_thursday').checked;
    const works_friday = document.querySelector('#works_friday').checked;
    const works_saturday = document.querySelector('#works_saturday').checked;

      const response = await fetch('/api/request/availability', {
        method: 'PUT',
        body: JSON.stringify({ works_sunday, works_monday, works_tuesday, works_wednesday, works_thursday, works_friday, works_saturday}),
        headers: { 'Content-Type': 'application/json' },
      });
    }

  document
  // save button class here
    .querySelector('.availability-form')
    .addEventListener('submit', availChangeHandler);