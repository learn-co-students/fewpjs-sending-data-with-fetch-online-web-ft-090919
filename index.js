// Add your code here
const url = "http://localhost:3000/users"
const body = document.querySelector("body")

const createConfigObj = function (data) {
    return {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }
}

function submitData(name, email) {
    let data = {
        name: name,
        email: email
    }
    let configObj = createConfigObj(data)
    return fetch(url, configObj)
        .then(function(response){
            return response.json()
        })
        .then(function(object){
            body.innerHTML += `<div>${object.id}<\div>`
        })
        .catch(function(error){
            body.innerHTML += `<div>${error.message}</div>`
        })

}



