const user = JSON.parse(localStorage.getItem("user"))
let loginName = document.querySelector(".login-name")
let elModalWrapper = document.querySelector(".modal-wrapper")
let elModalInner = document.querySelector(".modal")
let productBtn = document.querySelector(".add-product")
loginName.textContent = user.username

// CATEGORY PART START
let elCategory1 = document.querySelector(".category-1")
let elCategory2 = document.querySelector(".category-2")
elCategory1.addEventListener("click", function(e) {
    elCategory1.className = "category-1 text-[#009398] pb-[8px] text-[35px] font-bold border-b-[3px] cursor-pointer border-[#009398]"
    elCategory2.className = "category-2 text-[#A6A6A6]  pb-[8px] text-[35px] font-bold border-b-[3px] cursor-pointer border-transparent"
})
elCategory2.addEventListener("click", function(e) {
    elCategory2.className = "category-1 text-[#009398] pb-[8px] text-[35px] font-bold border-b-[3px] cursor-pointer border-[#009398]"
    elCategory1.className = "category-2 text-[#A6A6A6]  pb-[8px] text-[35px] font-bold border-b-[3px] cursor-pointer border-transparent"
})
// CATEGORY PART END 


function closeModal(e) {
    if (e.target === elModalWrapper) {
        elModalWrapper.classList.add("scale-0"); 
    }
}

elModalWrapper.addEventListener("click", closeModal);
productBtn.addEventListener("click", function(e) {
    e.preventDefault();
    elModalWrapper.classList.remove("scale-0");
});