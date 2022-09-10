let addCartBtn = document.getElementsByClassName("addToCart")[0];
let getAddedSign = document.getElementById("cartAddedSign");


function displayAddedSign() {
    getAddedSign.style.display = "block";
}


function addToCartPage(thisId) {
    let getCartItemContainer = document.getElementsByClassName("showAddedItems")[0];
    alert(getCartItemContainer);

    let getAddedItemImg = document.getElementById("mainItemImg_" + thisId);
    let getAddedItemName = document.getElementById("mainItemName_" + thisId);
    let getAddedItemIntro = document.getElementById("mainItemIntroSpan_" + thisId);

    let cartItemCon = document.createElement("div");
    let cartImgCon = document.createElement("img");
    let cartNameCon = document.createElement("span")
    let cartIntroCon = document.createElement("span");

    cartImgCon.src = getAddedItemImg.src;
    cartNameCon.innerText = getAddedItemName.innerText;
    cartIntroCon.innerText = getAddedItemIntro.innerText;

    cartItemCon.appendChild(cartImgCon);
    cartItemCon.append(cartNameCon);
    cartItemCon.appendChild(cartIntroCon);

    getCartItemContainer.appendChild(cartItemCon);  //문제점: 왜 getCartItemContainer가 undefined로 정의되나 ? -> 다른 html 페이지라서 그런가 ?
}

function alertCheck() {
    alert("check");
}