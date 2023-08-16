document.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cnfpass = document.getElementById("cnfpass").value;

    const firstNameErr = document.getElementById("ferror");
    const lastNameErr = document.getElementById("lerror");
    const emailErr = document.getElementById("emerror");
    const passwordErr = document.getElementById("passerror");
    const cnfpassErr = document.getElementById("cnferror");

    if (firstName === "") {
        firstNameErr.innerHTML = "enter the first name";
    }
    if (lastName === "") {
        lastNameErr.innerHTML = "enter the last name";
    }
    if (email === "") {
        emailErr.innerHTML = "enter the email address";
    }
    if (password === "") {
        passwordErr.innerHTML = "enter the password";
    }
    if (cnfpass === "") {
        cnfpassErr.innerHTML = "please confirm the password";
    }
    if (password !== cnfpass) {
        cnfpassErr.innerHTML = "Confirm password doesn't match"
    }
    if (!isValidEmail(email)) {
        emailErr.innerHTML = "enter the valid email address"
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }
    let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    }
    console.log(data)
    $.ajax({
        url: "http://localhost:3000/api/v1/users",
        type: "POST",
        data: data,
        'Content-Type': "application/json",
        success: function (result) {
            console.log("registered  succesfully")
            console.log(result)
        }
    })
})