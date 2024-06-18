/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generadordeExcusas(){
    const quien = ['My perro', 'Mi abuela', 'mi mama', 'Mi gato'];
    const action = ['se comio', 'se orino', 'destruyo', 'escondio'];
    const que = ['mi tarea', 'mi computadora', 'Las llaves'];
    const cuando = ['antes de la llamada', 'cuando dormia', 'mientras hacia ejercicio', 'Almorzando', 'Mientras rezaba el Rosario'];
  
    // Donde inicia la magia del excusometro
    const quienAleatorio = quien[Math.floor(Math.random() * quien.length)];
    const actionAleatorio =  action[Math.floor(Math.random() * action.length)];
    const  queAleatorio =    que[Math.floor(Math.random() * que.length)];
    const  cuandoAleatorio =    cuando[Math.floor(Math.random() * cuando.length)];

    // falta completar la magia

    const excusaCompleta = `${quienAleatorio} ${actionAleatorio} ${queAleatorio} ${cuandoAleatorio}`;

    return excusaCompleta;
  }

  const excusagenerada = generadordeExcusas();
  console.log(excusagenerada);
};

