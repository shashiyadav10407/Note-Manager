    // HIDE ITEMS

    function Hide(){
        var x = document.getElementById("hide-list");
        var sha=document.getElementById("list");   
        x.children[0].addEventListener("click",function(){  
      //   e.preventDefault();
        
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
