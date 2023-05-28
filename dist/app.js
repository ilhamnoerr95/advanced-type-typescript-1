"use strict";
var _a;
const booyeah = {
    name: "ayam",
    umur: 24,
    alamat: "jalan mana aja",
    date: new Date()
};
function typeGuardNum(a, b) {
    console.log(typeof a);
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function objectGuard(params) {
    console.log(params.name);
    if ("date" in params) {
        console.log(params.date);
    }
}
objectGuard(booyeah);
class Car {
    mobil() {
        console.log("mobil ngengg..");
    }
}
class Truck {
    mobil() {
        console.log("test");
    }
    trek() {
        console.log("trukk");
    }
}
const v1 = new Car();
const v2 = new Truck();
function nyobaClass(cb) {
    cb.mobil();
    if (cb instanceof Truck) {
        cb.trek();
    }
}
nyobaClass(v1);
function jenisHewan(hewan) {
    let speed;
    switch (hewan.type) {
        case "burung":
            speed = hewan.flySpeed;
            break;
        case "kuda":
            speed = hewan.runSpeed;
            break;
    }
    console.log("kecepatan hewan ini adalah", speed);
}
jenisHewan({ type: "burung", flySpeed: 10 });
const contoh = document.getElementById("contoh");
const obcContoh = {
    pler: "enak",
};
function exover(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const hasil = exover("aya", "bebe");
hasil.split("");
const be = {
    bera: "enak",
    ad: "uhu",
    chain: { a: "a", b: "B" }
};
console.log((_a = be === null || be === void 0 ? void 0 : be.chain) === null || _a === void 0 ? void 0 : _a.a);
const nilai = undefined;
const storing = nilai || "DEFAULT";
console.log(storing);
const coaleshing = nilai !== null && nilai !== void 0 ? nilai : "default";
console.log(coaleshing);
//# sourceMappingURL=app.js.map