let num = 50;

if(num<49){
    console.log("неверно");
}
else if(num>100){
    console.log("многовато")

}
else{
    console.log('верно')
};

(num ==50) ? console.log("верно") : console.log("неверно");

switch(num){
    case num<49:
        console.log("неверно");
        break;
    case num>100:
    console.log("многовато");
    break;
    case 50:
        console.log("верно");
        break;
    default:console.log("Что-то пошло не так");
    break;
}
