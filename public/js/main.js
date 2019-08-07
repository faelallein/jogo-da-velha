var turn = 1
var pt = [0,0,0,0,0,0,0,0,0]
var scoreP1 = 0;
var scoreP2 = 0;
var time;
var jogando;

function position(a){
     var obj = event.target;
     var obj2 = document.querySelector('#turn');

     if(turn == 1 && jogando == 1){
          obj.value = "X";
          obj2.innerHTML = "Vez de O"
          pt[a] = 1;
          turn = 2;
     }else if(turn == 1 && jogando == 2){
          obj.value = "X";
          obj2.innerHTML = "Vez de O"
          pt[a] = 1;
          sorteio();
          turn = 1;
     }else if(turn == 2 && jogando == 1){
          obj.value = "O";
          obj2.innerHTML = "Vez de X"
          pt[a] = 2;
          turn = 1;
     }

     obj.setAttribute("disabled", "true");
     setTimeout(check,50);
}

function check(){
     if (((pt[0]==1)&&(pt[1]==1)&&(pt[2]==1)) || ((pt[3]==1)&&(pt[4]==1)&&(pt[5]==1)) || ((pt[6]==1)&&(pt[7]==1)&&(pt[8]==1))
     || ((pt[0]==1)&&(pt[3]==1)&&(pt[6]==1))  || ((pt[1]==1)&&(pt[4]==1)&&(pt[7]==1)) || ((pt[2]==1)&&(pt[5]==1)&&(pt[8]==1))
     || ((pt[0]==1)&&(pt[4]==1)&&(pt[8]==1))  || ((pt[2]==1)&&(pt[4]==1)&&(pt[6]==1))) {
          alert("JOGADOR 1 GANHOU");
          scoreP1++;
          reset();
     } else if(((pt[0]==2)&&(pt[1]==2)&&(pt[2]==2)) || ((pt[3]==2)&&(pt[4]==2)&&(pt[5]==2))  || ((pt[6]==2)&&(pt[7]==2)&&(pt[8]==2))
     || ((pt[0]==2)&&(pt[3]==2)&&(pt[6]==2))  || ((pt[1]==2)&&(pt[4]==2)&&(pt[7]==2))  || ((pt[2]==2)&&(pt[5]==2)&&(pt[8]==2))
     || ((pt[0]==2)&&(pt[4]==2)&&(pt[8]==2))  || ((pt[2]==2)&&(pt[4]==2)&&(pt[6]==2))){
          if(jogando == 1){
               alert("JOGADOR 2 GANHOU");
          } else { alert("MAQUINA GANHOU");}
          scoreP2++;
          reset();
     }else if(turn == pt.length){
          alert("Empate!");
          reset()
     }
}

function reset(){

     var objt = document.querySelectorAll('.btgame');

     objt.forEach(function (item){
       item.removeAttribute("disabled");
       item.value = "";
     })

     for (var i = 0; i < objt.length; i++) {
          pt[i] = 0;
     }
     turn = 1;
     document.querySelector('#p1').innerHTML = "Player X: "+scoreP1;
     document.querySelector('#p2').innerHTML = "Player O: "+scoreP2;
     document.querySelector('#turn').innerHTML = "Jogo da Velha";
}

function sorteio(){
     var p  = Math.round(Math.random()*8);
     var obj = document.querySelectorAll('.btgame');
     var obj2 = document.querySelector('#turn');
     var aux = 0;

     for (var i = 0; i < pt.length; i++) {
          if(pt[i] != 0){
               aux++
          }
     }
     if(aux!=9){
          if(pt[p] == 0 && jogando == 2){
               obj[p].value = "O";
               obj2.innerHTML = "Vez de X"
               pt[p] = 2;
               obj[p].setAttribute("disabled", "true");
          }else{
               sorteio();
          }
     }
     setTimeout(check,50);
}

function inicia(){
     jogando = prompt("Digite 1 - Vs.PLAYER , 2 - Vs.COM ");
     if(jogando > 2 || jogando == 0 ){
          alert("Digite um valor valido");
          inicia();
     }
}

window.addEventListener("load",inicia);
