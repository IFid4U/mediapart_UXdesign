var ladate=new Date();

var tab_jour=new Array("DIM.", "LUN.", "MAR.", "MER.", "JEU.", "VEN.", "SAM.");
var tab_month=new Array("JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOÛT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DÉCEMBRE");

var h=ladate.getHours();

if(h<16 && h>3){
    h = "MATIN";
}
else{
    h = "SOIR";  
}

document.write((tab_jour[ladate.getDay()])+" "+ladate.getDate()+" "+(tab_month[ladate.getMonth()])+
" "+ladate.getFullYear()+" "+"-"+" "+"EDITION DU"+" "+h);