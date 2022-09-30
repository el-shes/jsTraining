(function () {
  'use strict';
  document.getElementById('convert').addEventListener('submit', function (event) {
    event.preventDefault();
    const distance = parseFloat(document.getElementById('distance').value);
    const answer = document.getElementById('answer');

    if (distance) {
      const roundedConversion = (distance * 1.609344).toFixed(2);
      answer.innerHTML = `<h2>${distance} miles converts to ${roundedConversion} kilometers</h2>`;

    } else {
      answer.innerHTML = '<h2>Please provide a NUMBER</h2>'
    }
  });
})();
