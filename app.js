onSubmit= () => {
    const email=document.getElementById("email");
    if (email.value === "") {
        email.classList.add("error");
    }
}