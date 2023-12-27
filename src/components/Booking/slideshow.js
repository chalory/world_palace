const picroom1 = ['/svg/graphs.jpg', '/svg/github.svg', 
'/svg/developer2.png', '/svg/developer3.png' 
]
var i = 0;
function imageslide() {
    picroom1[i] = {document.getElementById("slyde").src};
    
    if(i < picroom1.length -1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(imageslide, 2500);
   };
window.onload = imageslide;
