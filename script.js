'use strict';
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let arr=[];
let expenses;

let appData = {
    budget:money,
    timeData:time,
    expenses: {},
    optionalExpenses: {},
    income:arr,
    savings: false
};
for (let i=0; i<2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = prompt("Во сколько обойдется?");

    if(typeof(a)==='string' && typeof(a) != null && typeof(b)!= null && typeof(a)!='' && typeof(b)!=''
    && a.length<50){
        console.log("done")
        appData.expenses[a]= b;
    }
    else {
        console.log ("bad result");
        i--;
    }

 };

//  let i=0;
//  while(i<2){
//      let a = prompt("Введите обязательную статью расходов в этом месяце");
//      let b = prompt("Во сколько обойдется?");
 
//      if(typeof(a)==='string' && typeof(a) != null && typeof(b)!= null && typeof(a)!='' && typeof(b)!=''
//      && a.length<50){
//          console.log("done")
//          appData.expenses[a]= b;
//      }
//      else {
 
//      }
 
 
 
//  };

// let i=0;
// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//          let b = prompt("Во сколько обойдется?");
     
//          if(typeof(a)==='string' && typeof(a) != null && typeof(b)!= null && typeof(a)!='' && typeof(b)!=''
//          && a.length<50){
//              console.log("done")
//              appData.expenses[a]= b;
//          }
//          else {
//             console.log ("bad result");
//            i--;
     
//          }
//          } while(i<2);

 appData.moneyPerDay = appData.budget/ 30;
 alert("Ежедневный бюджет: " + appData.moneyPerDay);
 
 if(appData.moneyPerDay<100){
    console.log("минимальный уровень достатка")
 }else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
    console.log("средний уровень достатка");
 } else if(appData.moneyPerDay>2000){
    console.log("высокий уровень достатка");
 }else {
    console.log("Произошла ошибка ")
 }
