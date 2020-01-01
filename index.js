// Add your code here
function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json"
        },
        body: JSON.stringify( {
            name,
            email
        } )
    })
    .then(function (response) {
        return response.json()
      } )

      .then(function (object) {
          document.body.innerHTML = object["id"]
      })
      .catch(function(error){
        document.body.innerHTML = error.message
      })
}

// there is no fourth test I mean ther is a fourth test but there is nothing to test with 
// for the first one the fecth needs to go some where then it needs to know where its going what its going to be and what it wants in return (application/json)
// after that it wants the what is being sent so in this case its going to be a name and an email. the stringify turns it into a string 
// the respons wants the data in the post request 