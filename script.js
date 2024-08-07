'use strict'
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let qw = prompt("Введите обязательную статью расходов в этом месяце");
let qw2 = prompt("Во сколько обойдется?");
let arr=[];
let expenses;

let appData = {
    budget:money,
    timeData:time,
    expenses: {answer:qw,answer2:qw2},
    optionalExpenses: {},
    income:arr,
    savings: false
};
 alert(money/30);
 console.log(money/30);
 console.log(appData.expenses.answer);
