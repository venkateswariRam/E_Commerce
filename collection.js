var product=document.getElementById("product")
var search=document.getElementById("search")
var productitem=product.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
      
    for(count=0;count<productitem.length;count=count+1)
    {
        var productname=productitem[count].querySelector("p").textContent
    if(productname.toUpperCase().indexOf(enteredValue)<0){
        productitem[count].style.display="none"
    }
else{
    productitem[count].style.display="block"
}
    }
})