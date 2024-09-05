let num1 = 90;
let num2 = 88;


let sum = num1 + num2;
console.log(sum);

let diff = num1 - num2;
console.log(diff);

let prod = num1 * num2;
console.log(prod);

let quotient = num1 / num2;
console.log(quotient);

if(num1<num2){
    console.log(num1 +"is grater than "+ num2);
}else if (num1>num2){
    console.log(num2 + "is less than "+ num1);
}

switch(sum){
    case 1:
        console.log("saturday");
        break;
        case 2:
            console.log("sunday");
            break;
            case 3:
                console.log("monday");
                break;
                default:
                    console.log("invalid ");
}

for (let i=0; i<=sum; i++){
    console.log(i);
}
if (sum % 2 == 0 ){
    console.log(sum + "is even.");
}else{
console.log(sum + " is odd.");
}