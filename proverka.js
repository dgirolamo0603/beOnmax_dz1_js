'use strict'

let money;

function start(){
money =+ prompt("Какой дохож у Вас?");

while(isNaN(money)|| money ==""|| money ==null){

    money =+ prompt("Какая у Вас зарплата?");

}


}

start();