//  function add(){
//  var ul=document.querySelector("ul");
// // console.log(ul);
// //  //  ADD ITEMS:

//  document.getElementById("add-btn").addEventListener("click",function(e){
//     e.preventDefault();
//      console.log('Shashi');

//      var addInput=document.getElementById("add-input");

//      if(addInput.value!=="")
//      {
//         var li=document.createElement("li"),
//          firstNote=document.createElement("p"),
//          SecondPar=document.createElement("p"),
//          firstIcon=document.createElement("i"),
//          secondIcon=document.createElement("i"),
//         input=document.createElement("input");

        
//         firstNote.textContent=addInput.value;
//         firstIcon.className='fa fa-pencil-square-o';
//         SecondPar.appendChild(firstIcon);
//         SecondPar.appendChild(secondIcon);
//         secondIcon.className='fa fa-times';
//         input.className='edit-note';
//         input.setAttribute("type","text");

//         li.appendChild(firstNote);
//         li.appendChild(SecondPar);
//         li.appendChild(input);
//         ul.appendChild(li);

//         addInput.value="";
//         edit();

//      }
// });
//  }
//  add();




//          //DELETE EDIT  ITEMS


ul.addEventListener("click",function(e)
{
     //console.log(e.target.classlist[1]);
    
     if(e.target.classlist[1]=="fa fa-pencil-square-o")
     {
          var parentPar=e.target.parentNode;
          parentPar.style.display="none";

          var note=parentPar.previousElementSibling;
          var input=parentPar.nextElementSibling;

          input.style.display="block";
          input.value=note.textcontent;

          input.addEventListener("keypress",function(e){
               if(e.keycode===13)
               {
                    if(input.value!=="")
                    {
                         note.textcontent=input.value;
                         parentPar.style.display="block";
                         input.style.display="none";
                    }
                    else
                    {
                         var li=input.parentNode;
                         li.parentNode.removechild(li);
                    }
               }
          });
         }
      
     
     else if(e.target.classlist[1]=='fa-times')
     {
          var list=e.target.parentNode.parentNode;
          list.parentNode.removechild(list);

     }
})




//    // HIDE ITEMS

   var hideItem=document.getElementById("hide");
   hideItem.addEventListener("click",function()
   {
      var label=document.querySelector('label');

      if(hideItem.checked){
         label.textContent="unhide notes";
         ul.style.display='none';
      }
      else
      {
         label.textContent="Hide notes";
          ul.style.display="block";
      }
   });



   //SEARCH FILTER


   var searchInput=document.querySelector("#search-note input");

   searchInput.addEventListener("keyup",function(e)
   {
      var searchInput=e.target.value.toUppercase();
      
      var notes=ul.getElementsByTagName("li");
      Array.from(notes).forEach(function(note)
      {
         var perText =note.firstElementChild.textContent;
         if(perText.toUpperCase().indexOf(searchInput)!==-1)
         {
            note.style.display='block';
         }
         else
         {
            note.style.display='none';
         }
      });
   })