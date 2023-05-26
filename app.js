onSubmit= () => {
    const email=document.getElementById("email");
    if (email.value === "") {
        email.classList.add("error");
        console.log ("Please enter a valid email.");
    }
}
validate = ()=> {
    
    const errorMessage= document.getElementById("error-message");
    if (onSubmit= true){
        errorMessage.innerHTML += "Please enter a valid email."
    }
}




        