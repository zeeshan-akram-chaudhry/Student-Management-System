let user_name = document.getElementById("name")
let user_email = document.getElementById("user_email")
let user_phone = document.getElementById("phone")
let role = document.getElementById("role")
let user_password = document.getElementById("user_password")
let confirm_password = document.getElementById("confirm_password")
let signup_btn = document.querySelector(".signup_btn")
let users = getUsers();
console.log(users)
signup_btn.addEventListener("click", function (e) {
    e.preventDefault();
    let alertBox = document.querySelector(".alert")
    if (user_name.value.trim() === "" || user_email.value.trim() === "" || user_phone.value.trim() === "" || role.value.trim() === "" || user_password.value.trim() === "" || confirm_password.value.trim() === "") {
        alertBox.classList.add("error")
        return
    }
    if (user_password.value !== confirm_password.value) {
        alertBox.classList.add("error");
        alertBox.textContent = "Password does not match";
        return
    }
    let emailExist = users.some(function (info) {
        return info.email === user_email.value;
    })
    if (emailExist) {
        alertBox.classList.add("error");
        alertBox.textContent = "Email Already Exist";
        return
    }
    let phoneExist = users.some(function (info) {
        return info.phone === user_phone.value
    })
    if (phoneExist) {
        alertBox.classList.add("error");
        alertBox.textContent = "Phone Number Already Exist";
        return
    }
    let users_info = {
        "name": user_name.value,
        "email": user_email.value,
        "phone": user_phone.value,
        "role": role.value,
        "password": user_password.value,
    }
    users.push(users_info)
    localStorage.setItem("users", JSON.stringify(users))
    alertBox.classList.remove("error")
    window.location.href = "login.html"
})