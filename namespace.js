var SAMA0059 = {
    init: function () {
        
    var div = document.createElement("div");
    div.className = "box";
    div.textContent = "SAMA0059";
    document.getElementById("boxes").appendChild(div);
   
        
    div.addEventListener("Click", Color_box);
    
    div.addEventListener("mouseover", highlight);
        
    div.addEventListener("mouseout", highlight);
        
         
        function Color_box(ev) {
            this.style.borderColor ="red";
            this.style.backgroundColor = "blue";
        }
        function highlight(ev){
            ev.currentTarget.classList.toggle ("highlight");
        }
        
   
   
    }
};

