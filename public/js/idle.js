let counter = 0;

const intervalId = setInterval(() => {
  counter++;
  console.log(`Counter: ${counter}`);
}, 60000); // 60000 milliseconds = 1 minute

const stopAfterMinutes = 30;
const stopAfterMilliseconds = stopAfterMinutes * 60000;

setTimeout(() => {
  clearInterval(intervalId);
  console.log(`Loop stopped after ${stopAfterMinutes} minutes.`);

  // Perform your fetch operation here
  fetch(`${siteUrl}api/users/logout`, {
    method: 'POST', // or 'GET', 'PUT', etc.
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data here
      console.log('Fetch response:', data);
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
}, stopAfterMilliseconds);
