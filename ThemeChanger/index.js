function color(num){
    if (num==1){
        document.getElementById('text').style.backgroundColor="black";
        document.getElementById('textarea').style.backgroundColor="black";
        document.getElementById('textarea').style.color="white";
        document.getElementById('textarea').style.border="1px solid white";
    }
    if (num==2){
        document.getElementById('text').style.backgroundColor="green";
        document.getElementById('textarea').style.backgroundColor="green";
        document.getElementById('textarea').style.color="black";
        document.getElementById('textarea').style.border="1px solid black";
    }
    if (num==3){
        document.getElementById('text').style.backgroundColor="yellow";
        document.getElementById('textarea').style.backgroundColor="yellow";
        document.getElementById('textarea').style.color="black";
        document.getElementById('textarea').style.border="1px solid black";
    }
    if (num==4){
        document.getElementById('text').style.backgroundColor="blue";
        document.getElementById('textarea').style.backgroundColor="blue";
        document.getElementById('textarea').style.color="white";
        document.getElementById('textarea').style.border="1px solid white";
    }
}