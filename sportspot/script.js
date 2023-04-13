db.collection("users").get().then((snapshot) => {
    console.log(snapshot.docs)
})
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));

const register = () => {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    console.log(name, email, password)
    db.collection("users")
    .add({
        name: name,
        email: email,
        password: password
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id)
    })
    .catch((error) => {
        console.error("Error adding document: ", error)
    })
    auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res.user)
        })
        .catch((err) => {
            alert(err.message)
            console.log(err.code)
            console.log(err.message)
        })
}

const login = () => {
    const lemail = document.getElementById('lemail').value
    const lpassword = document.getElementById('lpassword').value
    auth.signInWithEmailAndPassword(lemail, lpassword)
        .then((res) => {
            console.log(res.user)
        })
        .catch((err) => {
            alert(err.message)
            console.log(err.code)
            console.log(err.message)
        })
}

