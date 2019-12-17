let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify(formData)
};

function addDog() {
  fetch("http://localhost:3000/dogs", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });
}

function configObj2(name, email) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`
    })
  };
}

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      document.body.innerHTML = object["id"];
    })
    .catch(function(error) {
      debugger;
      alert("Bad things! Ragnarők!");
      document.body.innerHTML = error.message;
    });
}

// function submitData(name, email) {
//   return fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify({
//       name,
//       email
//     })
//   })
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       document.body.innerHTML = object["id"];
//     })
//     .catch(function(error) {
//       document.body.innerHTML = error.message;
//     });
// }
