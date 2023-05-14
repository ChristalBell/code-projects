const email = document.getElementById ("email")
const onSubmit = document.getElementById("onSubmit")

const validateEmail = (email) => {
    if (email === null ) {
        return document.getElementById("errorMessage").innerHTML += "Please enter a valid email.";
    } 
}