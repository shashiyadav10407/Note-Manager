//    ADD ITEMS

var ul=document.querySelector("ul");
 // console.log(ul);

  var sha=document.getElementById("add-btn");
  //console.log(sha);
  sha.addEventListener("click",function(e){
    e.preventDefault();
  //console.log('Shashi');

      var sh=document.getElementById("add-input");
      console.log(sh);
   if(sh.value!=="")
     {
        var li=document.createElement("li"),
      
          firstNote=document.createElement("p"),
         firstIcon=document.createElement("i"),
         SecondNote=document.createElement("p"),
         secondIcon=document.createElement("i"),
         thirdNote=document.createElement("p"),
         thirdIcon=document.createElement("i"),

        input=document.createElement("input");
       
        firstNote.textContent=sh.value;
        firstIcon.className='fa fa-pencil-square-o';
        secondIcon.className='fa fa-times';
        thirdIcon.className='fa fa-times';
        input.className='edit-note';
        input.setAttribute("type","text");
        

        firstNote.textContent=sh.value;
        SecondNote.appendChild(firstIcon);
        SecondNote.appendChild(secondIcon);
        // thirdNote.appendChild(thirdIcon);
         li.appendChild(firstNote);
         li.appendChild(SecondNote);
        // li.appendChild(thirdNote);
      li.appendChild(input);
        ul.appendChild(li);

        sh.value="";
        removinge();
        editText();
        Hide();
        search();
     }
 });


 // DELETE ITEM

function removinge(){
    var button=document.getElementsByClassName("fa-times")
    Array.from(button).forEach(function(i){
        i.addEventListener("click",function(){    
        this.parentElement.parentElement.remove();
    });
    
    });
    }
    removinge();
     
    // EDIT ITEMS

    function editText(){
      pencil.addEventListener("click",function(e)
      {
     
     if(e.target.classlist[1]=='fa fa-pencil-square-o')
     {
      var parent=e.target.parentNode;
           parent.style.display="none"
      
                var note=parent.previousElementSibling;
                var input=parent.nextElementSibling;
      
                input.style.display='block';
               
       input.value=note.textContent;
     
       input.addEventListener("keypress",function(event){
            if(event.key=="Enter")
            {
                 if(input.value!=="")
                 {
                      note.textContent=input.value;
                      parent.style.display="block";
                      input.style.display="none";
              
                 }
                 else
                 {
                     var li=input.parentNode;
                     li.parentNode.removeChild();
                 }
            }
       });
  }
      });
  }
 editText();

  
     // HIDE ITEMS
     
      function Hide(){
        var x = document.getElementById("hide-list");
        var sha=document.getElementById("list");   
        x.children[0].addEventListener("click",function(){  
      
        if (sha.style.display == "block")
         {
             sha.style.display = "none";
             x.children[0].textContent="Unhide notes";
        } 
        else 
        {
            sha.style.display = "block";
            x.children[0].textContent="Hide notes";
        }
    
      });
  }
  Hide();



   
      // SEARCH ITEMS
     
  function search(){
  
      var search = document.getElementById("search-note");
     search.addEventListener("keypress",function(e)
      {
       var filter=search.children[0].value.toUpperCase();
      var ul=document.getElementById("list");
      var li = ul.getElementsByTagName("li");
        
      for (i = 0; i <li.length; i++) 
      { 
        var a=li[i].getElementsByTagName("p")[0];
        var txtValue=a.textContent || a.innerText;

          if (txtValue.toUpperCase().indexOf(filter)> -1) 
          {
              li[i].style.display="";
          }
          else
           {
              li[i].style.display="none";                 
          }
      }
  });
}
   search();


        
  
  
