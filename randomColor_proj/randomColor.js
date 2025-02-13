

function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i=0; i<6; i++){
        let x= Math.floor(Math.random()*16)
        color=color+ letters[x];
    }
    return color;
}

document.getElementById("buttonClick").addEventListener("click", function (){
    let x= getRandomColor();
    document.body.style.backgroundColor = x;
    document.getElementById("nameColor").innerText = x;
});

