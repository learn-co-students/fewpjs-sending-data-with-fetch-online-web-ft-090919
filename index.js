// Add your code here

function submitData(x, y) {
    return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name: x,
    email: y
  })
})
.then(resp => resp.json())
.then(user => renderUser(user))
.catch(function(error) {
    const body = document.querySelector('body')
    body.innerHTML = `${error.message}`
  })
}

function renderUser(user) {
    const body = document.querySelector('body')
    body.innerHTML = `${user.id}`
  }