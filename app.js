onSubmit= () => {
    const email=document.getElementById("email");
    if (email.value === "") {
        email.classList.add("error");
        console.log ("Please enter a valid email.");
    }
    return  document.getElementById("error-message").innerHTML += "Please provide a valid email.";
    
}





        