### Node-Js-Discord-Webhook-Deleter
* A simple example on how to delete an webhook using node js (JavaScript)

Please add `"type": "module",` to your package.json or it won't work!

```
import fetch from 'node-fetch';


var url = 'YOUR WEBHOOK URL'

fetch(url, {
    method: 'DELETE',
    headers: {
        'Content-type': 'application/json'
    }
})
  
.then(console.log("Webhook has been deleted! \n"))
```


  




