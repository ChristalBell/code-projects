const onClick = () => {
    const validEmail = document.getElementById("email"); 
}

const validEmail = (email) => {
    if (email.value === ""){
        return errorMessage.innerHTML = "please provide a valid email. " ;
    } else {
        return false ; 
    }
       
}