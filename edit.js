// function editText(){
//     var edit=document.getElementsByClassName("fa fa-pencil-square-o");
//     Array.from(edit).forEach(function(pencil)
//     {
//      pencil.addEventListener("click",function(e)
//     {
//        var x=pencil.parentElement.parentElement.children[2];
//        var y=pencil.parentElement.nextSibling.nextSibling;
//        console.log(y)
//        x.style.display="block";
//        console.log(x)
//      var note=pencil.parentElement.parentElement.firstElementChild;
//      x.value=note.textContent;
//      console.log(note);
//      x.addEventListener("keypress",function(event){
//           if(event.key=="Enter")
//           {
//                if(note.value===" ")
//                {
//                     alert("its can not be blank");
//                     x.style.display="none";
//                     event.preventDefault();
//                     return;
//                }
//                else
//                {
//                     note.textContent=x.value;
//                     x.style.display="none";
                   
//                }
//           }
//      })
// })
//     })
// }
// editText();





