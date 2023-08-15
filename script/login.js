document.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailErr = document.getElementById("emerror");
    const passwordErr = document.getElementById("passerror");
    
    if(email === ""){
        emailErr.innerHTML = "enter the email address";
    }
    if(password === ""){
        passwordErr.innerHTML = "enter the password";
    }

    if(!isValidEmail(email)){
        emailErr.innerHTML = "enter the valid email address"
    }

    function isValidEmail(email){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email)
    }
    let data = {
        email:email,
        password:password
    }
    $.ajax({
        url:"http://localhost:3000/api/v1/users/login",
        type:"POST",
        data:data,
        SUCCESS: function(result){
            alert(result)
        }
    })
})