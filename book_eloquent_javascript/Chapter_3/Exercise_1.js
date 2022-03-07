/*
Minimum
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.
*/



console.log(" --- Exercise Minimum : ---");

let resul = minimum(2,10);
let resul1 = minimum(2,-10);
console.log(resul);
console.log(resul1);

function minimum(x,y) {
    if (x<y){
        return x; }
    else{
        return y; }
}

