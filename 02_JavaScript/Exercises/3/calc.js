var a = prompt("Enter first number: ");
var b = prompt("Enter Second number: ");
var c = prompt("Select between sum,sub,mul or div: ");

var sum = Number(a)+Number(b);
var sub = Number(a)-Number(b);
var mul = Number(a)*Number(b);
var div = Number(a)/Number(b);

if(c === "sum" ){
    alert(sum);
}else if (c === "sub"){
    alert(sub);
}else if (c === "mul"){
    alert(mul);
}else if (c === "div"){
    alert(div);
}