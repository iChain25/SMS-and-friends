const sendMessage = () => {
  const toNumber = '+639983741908'
  const message = 'TANGA'

  fetch('http://localhost:5500/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ toNumber, message })
  })
  .then((response) => {
    if(!response.ok){
      throw Error(response.statusText);
    }
    return response.json()
  })
  .then((data) => {
    console.log(data.message)
  })
  .catch((err) => {
    console.log(err);
  });
};
