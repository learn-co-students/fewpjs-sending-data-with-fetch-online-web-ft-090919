// Add your code here

function submitData(name, email) {
    
    let formData = {
        name: name,
        email: email
    };

   let configObj = {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           "Accept": 'application/json'
       },
       body: JSON.stringify(formData)
   }

   return fetch('http://localhost:3000/users', configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object){
            let body = document.getElementsByTagName('body')[0];
            let h1 = document.createElement('h1');
            h1.innerHTML = object.id;
            body.appendChild(h1);
        })
        .catch(function(error){
            let body = document.getElementsByTagName('body')[0];
            let h1 = document.createElement('h1');

            h1.innerHTML = error.message;
            body.appendChild(h1);
        })
};