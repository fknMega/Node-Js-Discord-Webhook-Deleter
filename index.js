//Here's an example on how to delete an discord webhook using JS (https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE)
//Note: Please add "type": "module", to your package.json file or it won't work!

//Using fetch to fetch the url (https://www.npmjs.com/package/node-fetch)
import fetch from 'node-fetch';


//here you can insert your discord webhook url
var url = 'YOUR WEBHOOK URL'

//Then use fetch to make a Request using DELETE method to the url you wanted ^
fetch(url, {
    method: 'DELETE',
    headers: {
        'Content-type': 'application/json'
    }
})
  
//Then Write that the webhook has been deleted.
.then(console.log("Webhook has been deleted! \n"))




  



