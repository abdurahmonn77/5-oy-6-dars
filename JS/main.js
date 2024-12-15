document.addEventListener("DOMContentLoaded", function() {
    let elBtn = document.querySelector(".register-btn");
    let elForm = document.querySelector(".login-form");

    if (elForm && elBtn) {
        elForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const data = {
                username: e.target.username.value,
                password: e.target.password.value
            };
            elBtn.innerHTML = `<img src="images/Spin@1x-1.0s-200px-200px.png" alt="loading" width="40" height="40">`;
            if (data.username == "Abdurahmon" && data.password == "123") {
                setTimeout(() => {
                    elBtn.innerHTML = "Войти";
                    localStorage.setItem("user", JSON.stringify(data));
                    location.pathname = "./products.html";
                }, 1000);
            } else {
                setTimeout(() => {
                    elBtn.className = "register-btn mt-[47px] w-[237px] h-[48px] text-[25px] text-red-600 bg-[#3F8C8E] rounded-[10px] flex justify-center items-center";
                    elBtn.innerHTML = "Ошибка входа";
                }, 1000);
                setTimeout(() => {
                    elBtn.className = "register-btn mt-[47px] w-[237px] h-[48px] text-[25px] text-white bg-[#3F8C8E] rounded-[10px] flex justify-center items-center";
                    elBtn.innerHTML = "Войти";
                }, 2500);
            }
        });
    } else {
        console.error("Element not found: Check your selectors for '.register-btn' and '.login-form'");
    }
});
    console.log(document.querySelector('.register-btn')); // Check if the button is found
    console.log(document.querySelector('.login-form'));   // Check if the form is found


