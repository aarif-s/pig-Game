'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

//starting condition

 let scores, currentScore , activeplayer , palying;
 
let intializingGame = function(){

    scores = [0,0];
    currentScore =0;
    activeplayer =0;
    palying = true;
 
   current0El.textContent=0;
   current1El.textContent=0;
   score0El.textContent=0;
   score1El.textContent=0;

   diceEl.classList.add('hidden');
   document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner');
   player0El.classList.add('player--active');
   player1El.classList.remove('player--active');
}  
intializingGame();

const switchplayer = function (){
   document.getElementById(`current--${activeplayer}`).textContent=0;
   currentScore =0;
   activeplayer = activeplayer === 0 ? 1 : 0;
   player0El.classList.toggle('player--active');
   player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click',function(){
   if (palying){

    let dice =Math.trunc(Math.random()*6)+1;

    diceEl.classList.remove('hidden');
    diceEl.src =`dice-${dice}.png`;

    if(dice !=1){
       currentScore += dice;
      document.getElementById(`current--${activeplayer}`).textContent= currentScore;
    }else{
        switchplayer();
    }
   }
});

btnHold.addEventListener('click',function(){
   if(palying){

   scores[activeplayer]+= currentScore;
   document.getElementById(`score--${activeplayer}`).textContent= scores[activeplayer];
   
   if(scores[activeplayer] >= 100){
      palying= false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
       
   }
   else{
      switchplayer();
   }
  }
   
});
  
// new game btn

btnNew.addEventListener('click', intializingGame );
 





