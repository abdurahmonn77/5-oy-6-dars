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

const formButton = document.querySelector(".add-product-btn");

if (formButton) {
    formButton.addEventListener("click", (event) => {
        event.preventDefault(); 
    });
}

const form = document.querySelector(".add-product-form");
const addButton = document.querySelector(".add-product-btn");
const productTable = document.querySelector("#product-table tbody");

document.addEventListener("DOMContentLoaded", () => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    savedProducts.forEach((product) => {
        addProductRow(product);
    });
});

function addProductRow(product) {
    const newRow = document.createElement("tr");
    newRow.classList.add("bg-white", "mb-[8px]");
    newRow.innerHTML = `
        <td class="text-[20px] font-normal leading-[35px] pl-[37px] rounded-l-[30px]">
            <img src="./images/pool-1.png" alt="Image" class="w-[110px] h-[41px] rounded-[10px]">
        </td>
        <td class="text-[20px] font-normal leading-[35px] py-[7px] flex flex-col text-center">
            <span class="relative before:content-[''] before:absolute before:w-[70px] before:rotate-[-13deg] before:top-[4px] before:left-[45px] before:h-[2px] before:bg-[#ff0000] text-[14px] text-[#848484] leading-[13.5px]">
                ${product.oldPrice}
            </span>
            <strong>${product.newPrice}</strong>
        </td>
        <td class="text-[20px] font-normal leading-[35px] py-[7px] text-center">${product.number}</td>
        <td class="text-[20px] font-normal leading-[35px] py-[7px] text-center">${product.category}</td>
        <td class="text-[20px] font-normal leading-[35px] py-[7px] text-center">${product.size}</td>
        <td class="text-[20px] font-normal leading-[35px] py-[7px] text-center">${product.depth}</td>
        <td class="text-[20px] font-normal leading-[35px] py-[7px] text-center rounded-r-[30px]">
            <div class="flex gap-3 items-center mx-auto justify-end pr-[50px]">
                <img src="images/edit.svg" class="edit-btn cursor-pointer">
                <img src="images/delete.svg" class="delete-btn cursor-pointer">
            </div>
        </td>
    `;

    const deleteButton = newRow.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
        newRow.remove();

        const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
        const updatedProducts = savedProducts.filter(
            (savedProduct) =>
                savedProduct.oldPrice !== product.oldPrice ||
                savedProduct.newPrice !== product.newPrice ||
                savedProduct.number !== product.number ||
                savedProduct.category !== product.category ||
                savedProduct.size !== product.size ||
                savedProduct.depth !== product.depth
        );
        localStorage.setItem("products", JSON.stringify(updatedProducts));
    });

    productTable.appendChild(newRow);
}

if (form && addButton && productTable) {
    addButton.addEventListener("click", (event) => {
        event.preventDefault();

        const productCategory = form.querySelector("[name='product-select']").value;
        const productOldPrice = form.querySelector("[name='product-old-price']").value;
        const productSize = form.querySelector("[name='product-size']").value;
        const productNumber = form.querySelector("[name='product-number']").value;
        const productNewPrice = form.querySelector("[name='product-new-price']").value;
        const productDepth = form.querySelector("[name='product-depth']").value;

        if (
            productCategory && productOldPrice && productSize &&
            productNumber && productNewPrice && productDepth
        ) {
            const product = {
                category: productCategory,
                oldPrice: productOldPrice,
                size: productSize,
                number: productNumber,
                newPrice: productNewPrice,
                depth: productDepth,
            };

            addProductRow(product);

            const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
            savedProducts.push(product);
            localStorage.setItem("products", JSON.stringify(savedProducts));

            form.reset();
        }
    });
}
