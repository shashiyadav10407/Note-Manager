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
  

     function search(){
  
        var search = document.querySelector("search-note");
        var filter=search.children[0].value.toUpperCase();
        var list=document.getElementById("list");
        var li = list.getElementsByTagName("li");
          
        for (i = 0; i <li.length; i++) 
        { 
          var a=li[i].getElementsByTagName("p")[0];
          var txtValue=a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter)> -1) 
            {
                li[i].style.display=" ";
            }
            else
             {
                li[i].style.display="none";                 
            }
        }
  }
     search();
  
  



  
