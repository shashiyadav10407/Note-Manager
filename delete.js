    // DELETE ITEMS
 

function removinge(){
var button=document.getElementsByClassName("fa-times")
Array.from(button).forEach(function(i){
    i.addEventListener("click",function(){    
    this.parentElement.parentElement.remove();
});

});
}
removinge();
 