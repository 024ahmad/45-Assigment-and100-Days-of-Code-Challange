"use strict";
// Task No 45 : Cars 
function make_car(manufacture, model, Optional) {
    return Object.assign({ manufacture,
        model }, Optional);
}
let myCar = make_car("Toyota", "Corolla", { "Color": "Black" });
console.log(myCar);
console.log(make_car("Automobili Lamborghini S.p.A.", "Lamborghini Gallardo", { "Color": "Red" }));
