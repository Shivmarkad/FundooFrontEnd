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
    console.log(data)
    $.ajax({
        url:"http://localhost:3000/api/v1/users/login",
        type:"POST",
        data:data,
        success: function(result){
            console.log("Login Successfully")
            console.log(result);
            let token = result.data;
            localStorage.setItem('token',token);
            window.location.href = 'http://127.0.0.1:5500/pages/dashboard.html'
        }
    })
})