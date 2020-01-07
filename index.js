// Add your code here

function submitData(name, email){
  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  }

  return fetch("http://localhost:3000/users", configObject)
  .then(response => {return response.json()})
  .then(object => {
    // let element = document.createElement("p")
    // element.innerText = (object.id)
    // document.body.appendChild(element)
    document.body.innerHTML = object.id
  }).catch(message => {
    console.log(message)
    document.body.innerHTML = message
  })
}