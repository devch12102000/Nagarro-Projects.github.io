function color(num){
    if (num==1){
        document.getElementById('textarea').style.backgroundColor="black";
        document.getElementById('textarea').style.color="white";
        document.getElementById('textarea').style.border="1px solid white";
    }
    if (num==2){
        document.getElementById('textarea').style.backgroundColor="green";
        document.getElementById('textarea').style.color="white";
        document.getElementById('textarea').style.border="3px solid green";
    }
    if (num==3){
        document.getElementById('textarea').style.backgroundColor="yellow";
        document.getElementById('textarea').style.color="white";
        document.getElementById('textarea').style.border="3px solid yellow";
    }
    if (num==4){
        document.getElementById('textarea').style.backgroundColor="blue";
        document.getElementById('textarea').style.color="white";
        document.getElementById('textarea').style.border="3px solid blue";
    }
}