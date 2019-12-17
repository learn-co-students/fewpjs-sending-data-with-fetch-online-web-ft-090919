let bod = document.getElementsByTagName('body')[0];

function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  };

  let configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  };
  return fetch('http://localhost:3000/users', configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let someText = object.id.toString();
      bod.innerHTML = someText;
    })
    .catch(function(error) {
    bod.innerHTML += ` || error message: ${error.message}`;
  });
}
