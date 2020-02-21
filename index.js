// Add your code here
function submitData(name, email) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name, 
            email: email
        })
    };
    return fetch('http://localhost:3000/users', options)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                let p = document.createElement('p');
                p.textContent = json.id;
                document.body.appendChild(p);
            }
        ).catch(
            json => {
                let p = document.createElement('p');
                p.textContent = json.message;
                document.body.appendChild(p);
            }
        );
}
