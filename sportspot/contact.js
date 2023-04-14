function eventdata() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const company = document.getElementById('company').value
    const message = document.getElementById('message').value
    db.collection("events")
        .add({
            name: name,
            email: email,
            company: company,
            message: message
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id)
        })
        .catch((error) => {
            console.error("Error adding document: ", error)
        })
}