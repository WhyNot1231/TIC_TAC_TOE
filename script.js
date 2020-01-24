togglePic=true;

let gameBtn=function(){

    let game=document.getElementById("game");


    image=document.createElement("IMG");
    image.onmouseover=mouseover;
    game.appendChild(image)
};


let TTTTable=function(){
    let table=document.createElement("TABLE");
    let row1=document.createElement("TR");
    row1.style.height="300px";
    let row2=document.createElement("TR");
    row2.style.height="300px";
    let row3=document.createElement("TR");
    row3.style.height="300px";

    let cell1=document.createElement("TD");
    cell1.style.backgroundColor="yellow";
    cell1.style.width="300px";

    let cell2=document.createElement("TD");
    cell2.style.backgroundColor="yellow";
    cell2.style.width="300px";

    let cell3=document.createElement("TD");
    cell3.style.backgroundColor="yellow";
    cell3.style.width="300px";

    let cell4=document.createElement("TD");
    cell4.style.backgroundColor="yellow";
    cell4.style.width="300px";

    let cell5=document.createElement("TD");
    cell5.style.backgroundColor="yellow";
    cell5.style.width="300px";

    let cell6=document.createElement("TD");
    cell6.style.backgroundColor="yellow";
    cell6.style.width="300px";

    let cell7=document.createElement("TD");
    cell7.style.backgroundColor="yellow";
    cell7.style.width="300px";

    let cell8=document.createElement("TD");
    cell8.style.backgroundColor="yellow";
    cell8.style.width="300px";

    let cell9=document.createElement("TD");
    cell9.style.backgroundColor="yellow";
    cell9.style.width="300px";

    row1.appendChild(cell1);
    row1.appendChild(cell2);
    row1.appendChild(cell3);

    row2.appendChild(cell4);
    row2.appendChild(cell5);
    row2.appendChild(cell6);

    row3.appendChild(cell7);
    row3.appendChild(cell8);
    row3.appendChild(cell9);

    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);


};

let mouseover=function(id){
    id.style.backgroundColor="red";
};

let addClass=function(id){
    id.classList.add("change");
};

let removeClass=function(id){
    id.classList.remove("change");
};

let toggleClass=function(id){
    id.classList.toggle("change");
};

