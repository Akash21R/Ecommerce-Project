var productContainer = document.getElementById("product")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup", (event)=>{
    var enteredText = event.target.value.toUpperCase();

    for(i=0;i<productList.length;i++){
        var productName = productList[i].querySelector("p").textContent
        if(productName.toUpperCase().indexOf(enteredText)<0){
            productList[i].style.display = "none"
        }
        else{
            productList[i].style.display ="block"
        }
    }
})


