let elProductList = document.querySelector(".product-list")
let productData =  JSON.parse(localStorage.getItem("products"))

console.log(productData);

function renderProducts(arr, list) {
    arr.forEach(item => {
        let elItem = document.createElement("li")
    elItem.className = "py-[97px] w-[340px]  bg-white shadow-lg pl-[34px] pb-[10px] pt-[31px] rounded-tr-[35px] rounded-bl-[35px] rounded-br-[35px] relative"
    elItem.innerHTML = `
         <img src="images/pool-2.png" alt="pool img" width="306" height="172">
                <div class="flex justify-between pr-[10px] mt-[30px]">
                    <strong class="text-[15px] font-bold">Size: ${item.size} m2</strong>
                    <strong class="text-[15px] font-bold">Depth: ${item.depth} cm</strong>
                </div>
                    <div>
                        <div class="mt-[10px] flex items-center">
                            <div class="text-[20px] w-[140px] font-normal leading-[35px] py-[7px] flex flex-col text-center">
                              <span class="relative before:content-[''] before:absolute before:w-[70px] before:rotate-[-13deg] before:top-[4px] before:left-[45px] before:h-[2px] before:bg-[#ff0000] text-[14px] text-[#848484] leading-[13.5px]">
                                 ${item.oldPrice} cyм
                              </span>
                              <strong>${item.newPrice} cyм</strong>
                            </div>
                            <button class="w-[107px] h-[24px] justify-center items-center text-[15px] font-bold bg-[#FFE600] inline-block rounded-tr-[10px] rounded-bl-[10px]">Заказать</button>
                          </div>
                          <div class="absolute text-[15px] font-bold text-white bg-[#139D4B] w-[140px] h-[27px] rounded-br-[10px] top-0 left-0">
                            Рекомендуем
                          </div>
                    </div>
    `
    list.append(elItem)
    })
    
}
renderProducts(productData, elProductList)