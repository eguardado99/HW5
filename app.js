
var init=16 ;

window.addEventListener("keydown",arrow) ;

function arrow(event) { 
    event.preventDefault(); 
    var balloon = document.getElementById("balloon");
    // console.log(event)    
        switch (event.key) {
            case "ArrowDown":
                init=init-2 ;
                 balloon.style.fontSize=init+"px" ;
            if (init <=7){ 
            balloon.textContent="Done" ;
            balloon.style.fontSize = "60px" ;
            window.removeEventListener('keydown',arrow);      
        }
        break;
            case "ArrowUp":
            if (init >=60){ 
            balloon.textContent="💥" ;
            window.removeEventListener('keydown',arrow);
        }
        else{
            init=init+2 ;
            balloon.style.fontSize=init+"px" ;
        }break;
    }
}

