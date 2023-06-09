onSubmit= () => {
    const email=document.getElementById("email");
    if (email.value === "") {
        email.classList.add("error");
    }
    return  document.getElementById("error-message").innerHTML += "Please provide a valid email.",
    document.getElementById("email").value += "janeappleseed#email.com";
    
}





        