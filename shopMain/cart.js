function getAddedItem() {
    let cartItemList = document.getElementsByClassName("showAddedItems")[0];

    let receivedItemId = localStorage.getItem("selectedItemId");
    let receivedCartImg = localStorage.getItem("cartItemImg");
    let receivedCartName = localStorage.getItem("cartItemName");
    let receivedCartIntro = localStorage.getItem("cartItemIntro");

    cartItemList.setAttribute("id", "cartItem_" + receivedItemId);

    let cartItemCon = document.createElement("div");
    let cartImgCon = document.createElement("img");
    let cartNameCon = document.createElement("span")
    let cartIntroCon = document.createElement("span");

    cartImgCon.src = receivedCartImg.src;
    cartNameCon.innerText = receivedCartName.innerText;
    cartIntroCon.innerText = receivedCartIntro;

    cartItemCon.appendChild(cartImgCon);
    cartItemCon.append(cartNameCon);
    cartItemCon.appendChild(cartIntroCon);

    cartItemList.appendChild(cartImgCon);
}