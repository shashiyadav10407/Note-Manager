//    ADD ITEMS

 var ul=document.querySelector("ul");
 // console.log(ul);
 document.getElementById("add-btn").addEventListener("click",function(e){
    e.preventDefault();
     console.log('Shashi');

     var addInput=document.getElementById("add-input");

     if(addInput.value!=="")
     {
        var li=document.createElement("li"),
         firstNote=document.createElement("p"),
         SecondPar=document.createElement("p"),
         firstIcon=document.createElement("i"),
         secondIcon=document.createElement("i"),
        input=document.createElement("input");

        
        firstNote.textContent=addInput.value;
        firstIcon.className='fa fa-pencil-square-o';
        SecondPar.appendChild(firstIcon);
        SecondPar.appendChild(secondIcon);
        secondIcon.className='fa fa-times';
        input.className='edit-note';
        input.setAttribute("type","text");

        li.appendChild(firstNote);
        li.appendChild(SecondPar);
        li.appendChild(input);
        ul.appendChild(li);

        addInput.value="";

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
     
     // HIDE ITEMS

     var hideItem=document.getElementById("hide");
     hideItem.addEventListener("click",function()
     {
      // console.log('Checked');
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
  

     
//      
// SEARCH ITEMS
   
      function search(){
  
        let search = document.querySelector("#search-note");
        search.addEventListener("keypress",function(e)
        {
        var filter=search.children[0].value.toUpperCase();
        var list=document.getElementById("list");
        var li = list.getElementsByTagName("li");
          
        for (i = 0; i <li.length; i++) 
        { 
          var a=li[i].getElementsByTagName('p')[0];
          var myText=a.textContent || a.innerHTML;
            if (myText.toUpperCase().indexOf(filter)> -1) 
            {
                li[i].style.display=" ";
            }
            else
             {
                li[i].style.display="none";                 
            }
        }
    });
  }
     search();
  

// EDIT ITEMS

 function editText(){
list.addEventListener("click",function(e){
if(e.target.classList[1]==='fa-pencil-square-o'){
  var parent = e.target.parentNode;
  console.log(parent);
  parent.style.display="none"

  var note = parent.previousElementSibling;
  var input =parent.nextElementSibling;
  input.style.display='block';
  input.value=note.textContent;

  input.addEventListener('keypress',function(event){
    if(event.key=="Enter"){
      if(input.value!==''){
        note.textContent=input.value;
        parent.style.display="block"
        input.style.display="none";
      }
      else{
        var li=input.parentNode;
        li.parentNode.removechild();
      }
    }
  });
}
});

}
editText();