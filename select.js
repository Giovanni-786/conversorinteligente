//simulando um banco de dados
function mudaimagem(item) {
    var img = document.getElementById('bandeira1');
    img.innerHTML = '<img src="' + item + '"width="200px">';
    itemSlc =item;
    switch(itemSlc) {
case 'imagens/bandeira-brasil.png':
        salarioMinimo= 4.72;
        //salarioMinimo= 5;
        moeda=" Reais";
        jornada=8;
break;
case 'imagens/bandeira-eua.png':
        salarioMinimo= 7.25;
        moeda=" Dolares";
        jornada=8;
break;
case 'imagens/bandeira-franca.png':
        salarioMinimo= 9.67;
        moeda=" Euros";
        jornada=7;
break;
case 'imagens/bandeira-irlanda.png':
        salarioMinimo= 9.55;
        moeda=" Euros";
        jornada=8;
break;
case 'imagens/bandeira-portugal.png':
        salarioMinimo= 4.37;
        moeda=" Euros";
        jornada=8;
break;
case 'imagens/bandeira-belgica.png':
        salarioMinimo= 9.88;
        moeda=" Euros";
        jornada=8;
break;
case 'imagens/bandeira-holanda.png':
        salarioMinimo= 7.33;
        moeda=" Euros";
        jornada=8;
break;
case 'imagens/bandeira-reino.png':
        salarioMinimo= 6.70;
        moeda=" Libras";
        jornada=8;
break;
case 'imagens/bandeira-chile.png':
        salarioMinimo= 1506.25;
        moeda=" Pesos chilenos";
        jornada=8;
break;
default:
}
   }
function mudaimagem2(item) {
        var img = document.getElementById('bandeira2');
        img.innerHTML = '<img src="' + item + '"width="200px">';
        itemSlc2=item; 
switch(itemSlc2) {
case 'imagens/bandeira-brasil.png':
        salarioMinimo2= 4.72;
        moeda2=" Reais";
        jornada2=8;
break;
case 'imagens/bandeira-eua.png':            
        salarioMinimo2= 7.25;
        moeda2=" Dolares";
        jornada2=8;
break;
case 'imagens/bandeira-franca.png':            
        salarioMinimo2= 9.67;
        moeda2=" Euros";
        jornada2=7;
break;
case 'imagens/bandeira-irlanda.png':
        salarioMinimo2= 9.55;
        moeda2=" Euros";
        jornada2=8;
break;
case 'imagens/bandeira-portugal.png':            
        salarioMinimo2= 4.37;
        moeda2=" Euros";
        jornada2=8;
break;
case 'imagens/bandeira-belgica.png':            
        salarioMinimo2= 9.88;
        moeda2="Euros";
        jornada2=8;
break;
case 'imagens/bandeira-holanda.png':            
        salarioMinimo2= 7.33;
        moeda2=" Euros";
        jornada2=8;
break;
case 'imagens/bandeira-reino.png':            
        salarioMinimo2= 6.70;
        moeda2=" Libras";
        jornada2=8;
break;
case 'imagens/bandeira-chile.png':            
        salarioMinimo2= 1506.25;
        moeda2=" Pesos chilenos";
        jornada2=8;
break;
default:
}
   }
