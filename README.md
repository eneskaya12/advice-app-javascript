## Advice App

A website which generates random advice for users. It's made with HTML, CSS and JS.

I used **fetch( )** method to generate random advice. I also used the **async/await** because **fetch( )** method returns a **promise**.

When we use **fetch( )** method to make request to servers from the web browsers and the request completes, the resource is avaliable and the **promise** will resolve into a **Response** object. The **Response** object has lots of useful properties and methods to inspect the response. Then, I used **json( )** method and it returns a **promise** that resolves with the complete contents of the fetched resource. After then, I used data variable to keep the advice and it's id as a slip object. Finally, I changed the DOM to show a random advice and it's id.

To sum up briefly, I used **fetch( )** to make request to the API from [this address](https://api.adviceslip.com/) and I used the data which I fetched from the API to change DOM.