let addCartBtn = document.getElementsByClassName("addToCart")[0];
let getAddedSign = document.getElementById("cartAddedSign");

let cartBtn = document.getElementById("cartDisplayControl");
let getCartDisplay = document.getElementsByClassName("showAddedItems")[0];
function openCart() {
    getCartDisplay.style.display = "block";
}

function closeCartBtn() {
    getCartDisplay.style.display = "none";
}

function displayAddedSign() {
    getAddedSign.style.display = "block";

    self.setTimeout("hideAddedSign()", 1000);
}

function hideAddedSign() {
    getAddedSign.style.display = "none";
}
//https://velog.io/@cnsrn1874/HTML-%EA%B0%84-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%84%EC%86%A1
//https://kgu0724.tistory.com/229
//html간 데이터 전송

function sendToCartPage(thisId) {
    let cartItemDisplay = document.getElementsByClassName("showAddedItems")[0];
    
    let getAddedItemImg = document.getElementById("mainItemImg_" + thisId);
    let getAddedItemName = document.getElementById("mainItemName_" + thisId);
    let getAddedItemIntro = document.getElementById("mainItemIntroSpan_" + thisId);
    /*
    localStorage.setItem("selectedItemId", thisId);
    localStorage.setItem("cartItemImg", getAddedItemImg);
    localStorage.setItem("cartItemName", getAddedItemName);
    localStorage.setItem("cartItemIntro", getAddedItemIntro);
    */
    let cartItemCon = document.createElement("div");
    let cartImgCon = document.createElement("img");
    let cartNameCon = document.createElement("span")
    let cartIntroCon = document.createElement("span");

    cartImgCon.src = getAddedItemImg.src;
    cartImgCon.style.width = "150px";
    cartImgCon.style.height = "150px";

    cartNameCon.innerText = getAddedItemName.innerText;
    cartNameCon.style.position = "relative";
    cartNameCon.style.left = "10px";
    cartNameCon.style.bottom = "100px";

    cartIntroCon.innerText = getAddedItemIntro.innerText;
    cartIntroCon.style.display = "block";
    cartIntroCon.style. position = "relative";
    cartIntroCon.style.bottom = "100px";
    cartIntroCon.style.left = "160px";
    cartIntroCon.style.width = "200px";

    cartItemCon.setAttribute("id", "cartItem_" + thisId);
    cartItemCon.style.marginLeft = "10px";

    cartItemCon.appendChild(cartImgCon);
    cartItemCon.append(cartNameCon);
    cartItemCon.appendChild(cartIntroCon);

    cartItemDisplay.appendChild(cartItemCon);
    //getAddedItem();
}
//localStorage를 이용한 데이터 전송 ?
/*
function getAddedItem() {
    let cartItemList = document.getElementsByClassName("showAddedItems")[0];

    let receivedItemId = localStorage.getItem("selectedItemId");
    let receivedCartImg = localStorage.getItem("cartItemImg");
    let receivedCartName = localStorage.getItem("cartItemName");
    let receivedCartIntro = localStorage.getItem("cartItemIntro");
    alert(receivedCartImg.src);
    cartItemList.setAttribute("id", "cartItem_" + receivedItemId);

    cartImgCon.src = receivedCartImg.src;
    cartNameCon.innerText = receivedCartName.innerText;
    cartIntroCon.innerText = receivedCartIntro;

    cartItemList.appendChild(cartImgCon);
}
*/

function checkAlert() {
    alert("check");
}