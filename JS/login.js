let users = getUsers()
let email = document.getElementById("email")
let password = document.getElementById("password")
let login_btn = document.querySelector(".login_btn")
login_btn.addEventListener("click", function (e) {
    e.preventDefault();
    let alertBox = document.querySelector(".alert")
    if (email.value === "" || password.value === "") {
        alertBox.classList.add("error")
        return
    }
    let user = users.some(function (info) {
        return email.value === info.email && password.value === info.password
    })
    let currentUser = users.find(function (info) {
        return email.value === info.email;
    });
    let role = currentUser.role;
    if (user) {
        if (role === "admin") {
            // Admin page logic
        } else if (role === "teacher") {
            // Teacher page logic
        } else if (role === "student") {
            // Student page logic
        }
    } else {
        alertBox.classList.add("error");
        alertBox.textContent = "Invalid Email and Password";
        return
    }
    console.log("hello")
    alertBox.classList.remove("error")
})