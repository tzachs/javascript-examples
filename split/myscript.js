function onBodyDraggedOver(event){        
    calc(event.clientY);
}

function calc(clientY){
    console.log(clientY);
    var topp = clientY / window.innerHeight * 100
    var bottomp = 100 - topp;
    if ( clientY == -1){
        topp = 49;
        bottomp = 49;
    }    
    document.querySelector('.top').style.height = topp + "vh";
    document.querySelector('.bottom').style.height = bottomp + "vh";
    document.querySelector('.bottom').innerHTML = bottomp;
    document.querySelector('.top').innerHTML = topp;
}