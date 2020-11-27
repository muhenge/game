
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
       
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
    return response.json();
  }
  
  postData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', { name: 'My cool new game' })
    .then(data => {
      console.log(data); 
    });