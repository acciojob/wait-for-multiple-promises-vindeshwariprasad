//your JS code here. If required.
// script.js

// Function to generate a random delay between 1 and 3 seconds
function randomDelay() {
  return Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
}

// Function to create a Promise with a random delay
function createPromise(name) {
  const delay = randomDelay() * 1000; // Convert to milliseconds
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`${name} resolved after ${delay / 1000} seconds`);
      resolve({ name, time: delay / 1000 }); // Resolve with an object containing promise name and time taken
    }, delay);
  });
}

// Create an array of Promises
const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3")
];

// Update the table after all promises are resolved
Promise.all(promises).then(results => {
  const tbody = document.getElementById('output');
  tbody.innerHTML = ''; // Clear the loading row

  results.forEach(result => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = result.name;
    const timeCell = document.createElement('td');
    timeCell.textContent = result.time.toFixed(3); // Display time with 3 decimal places
    row.appendChild(nameCell);
    row.appendChild(timeCell);
    tbody.appendChild(row);
  });

  // Calculate and append total time
  const totalTime = results.reduce((acc, curr) => acc + curr.time, 0);
  const totalRow = document.createElement('tr');
  const totalNameCell = document.createElement('td');
  totalNameCell.textContent = 'Total';
  const totalTimeCell = document.createElement('td');
  totalTimeCell.textContent = totalTime.toFixed(3);
  totalRow.appendChild(totalNameCell);
  totalRow.appendChild(totalTimeCell);
  tbody.appendChild(totalRow);
});
