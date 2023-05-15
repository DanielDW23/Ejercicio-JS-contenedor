let caja = document.getElementById("contenedor");

caja.style.display = "flex";

caja.style.flexWrap ="wrap";

var colors = [];
while (colors.length < 18) {
    do {
        var color = Math.floor((Math.random()*(256*256*256)+1));
    } while (colors.indexOf(color) >= 0);
    colors.push("#" + ("000000" + color.toString(16)).slice(-6));
}

for(i = 0; i < 18; i++){
let pieza1 =  document.createElement("div");
pieza1.style.width = "100px";
pieza1.style.height = "50px";
pieza1.style.backgroundColor = colors[i];
pieza1.style.border = "1px solid black";
caja.appendChild(pieza1);
};



