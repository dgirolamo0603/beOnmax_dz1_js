'use strict';
let money, time;
function start(){
     money = +prompt("Ваш бюджет на месяц?");
     time =prompt("Введите дату в формате YYYY-MM-DD");

     while(isNaN(money) || money =="" || money == null){

        money = +prompt("Ваш бюджет на месяц?");
     }

}

start();


let appData = {
    budget:money,
    timeData:time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: false
};
function chooseExpenses(){
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

}

chooseExpenses();

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
function detectDayBudget(){
 appData.moneyPerDay = (appData.budget/ 30).toFixed(2);
 alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

 function detectLevel(){
 if(appData.moneyPerDay<100){
    console.log("минимальный уровень достатка")
 }else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
    console.log("средний уровень достатка");
 } else if(appData.moneyPerDay>2000){
    console.log("высокий уровень достатка");
 }else {
    console.log("Произошла ошибка ")
 }
 }
 detectLevel();
let answer = 0; 
 function chooseOptExpenses(){

  for(let i=0; i<=3; i++){
   answer = prompt("Статья необязательных расходов?");
   appData.optionalExpenses[i]= answer;
  }
 }
 chooseOptExpenses();


 function checkSavings(){
    if(appData.savings ==true){
      let save=+prompt("Какова сумма накоплений?"),
        percent =+prompt("Под какой процент");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяцс вашего депозита: " + appData.monthIncome);
    }
 }

 checkSavings();