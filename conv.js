var capturando = "";
var capturando2 = "";
itemSlc ="imagens/bandeira-brasil.png";
itemSlc2 ="imagens/bandeira-eua.png";
salarioMinimo = 4.72;
moeda="Reais";
salarioMinimo2 = 7.25;
moeda2="Dolares";
resultado = 0;
dias=8;
dias2=8;
tempo = 0;
horas = 10;
minutos = 20;
segundos = 30;
horas_seg=3600;
horas2 = 10;
minutos2 = 20;
segundos2 = 30;
jornada=8;
jornada2=8;
salarioModo=0;
jornadaModo=0;

function capturar () {
        capturando = document.getElementById('valor').value;      
        capturando = parseFloat(capturando.replace(/[^0-9,.]/g, '').replace(/[.]/g, '').replace(',', '.'));

        resultado=(capturando*60)/salarioMinimo;     //convertendo dinhiero pra minuto
        tempo=resultado*60;                    //convertendo minuto para segundos
        
        horas = Math.floor((tempo/horas_seg));              //resultado da hora
        minutos = Math.floor((tempo -(horas_seg*horas))/60);    //resultado dos minutos
                
        dias= Math.floor(horas/8);
        horas-= (dias*8);

        document.getElementById('dias').innerHTML = dias;
        document.getElementById('horas').innerHTML = horas;
        document.getElementById('minutos').innerHTML = minutos;

        document.getElementById('moeda').innerHTML = "Para esse tempo esta considerando o salario minimo de $"+salarioMinimo+" "+moeda+" por hora";    
}
function capturar2 () {
    capturando2 = document.getElementById('valor2').value;
    capturando2 = parseFloat(capturando2.replace(/[^0-9,.]/g, '').replace(/[.]/g, '').replace(',', '.'));
        resultado=(capturando2*60)/salarioMinimo2;     //convertendo dinhiero pra minuto
        tempo=resultado*60;                    //convertendo minuto para segundos        

	horas2 = Math.floor((tempo/horas_seg));              //resultado da hora
        minutos2 = Math.floor((tempo -(horas_seg*horas2))/60);    //resultado dos minutos

        dias2= Math.floor(horas2/8);
        horas2-= (dias2*8);

        document.getElementById('dias2').innerHTML = dias2;
        document.getElementById('horas2').innerHTML = horas2; 
        document.getElementById('minutos2').innerHTML = minutos2;

        document.getElementById('moeda2').innerHTML = "Para esse tempo esta considerando o salario minimo de $"+salarioMinimo2+" "+moeda2+" por hora";
 }
function teste(obj) {
        if (obj == "simples") {
        var pega = document.getElementById('escolhamodo').value
        document.getElementById("config").innerHTML=""
        }else{
        var pega = document.getElementById('escolhamodo').value
        document.getElementById("config").innerHTML= '<br><input type="text" id=salarioM onkeypress=return(formataMoeda(this,".",",",event))> salario <br> <input type="number" id=jornadaM> horas diarias <br> <input type="button" onclick="personalizar()" value="Aplicar">'
        }
}
function personalizar(){
        salarioModo = document.getElementById('salarioM').value;
        jornadaModo = document.getElementById('jornadaM').value;
        
        salarioModo = parseFloat(capturando2.replace(/[^0-9,.]/g, '').replace(/[.]/g, '').replace(',', '.'));
        if (salarioModo==null){
                salarioMinimo=0;
        }else{
                salarioMinimo=salarioModo;
        }
        if (jornadaModo==null){
                jornada=0;
        }else{
                jornada=jornadaModo;
        }
}