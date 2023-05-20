// Code goes here!
type Data = {
    name: string ,
    umur : number    
}

type SubData = {
    alamat: string,
    date: Date
}
type SumberData = Data & SubData

const booyeah:SumberData = {
    name: "ayam",
    umur: 24,
    alamat: "jalan mana aja",
    date: new Date()

}

type Numeric = number | boolean
type Combinable = string | number

type Universal = Numeric & Combinable


// intersection dalam interface
// interface InterSection extends Data, SubData {}

// type guard:
function typeGuardNum (a: Universal, b: Universal) {
    console.log(typeof a)
    //guard tambahana apbila menggunakan intersection type
    if(typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString()
    }
    return a + b
}

// typeguard untuk object 
function objectGuard (params:SumberData){
    console.log(params.name)
    if("date" in params){
        console.log(params.date)
    }
}

objectGuard(booyeah)
// typeGuardNum("one", "double")

class Car {
    mobil(){
        console.log("mobil ngengg..")
    }
}

class Truck {
    mobil(){
        console.log("test")
    }
    trek(){
        console.log("trukk")
    }
}

type Kendaraan = Car | Truck

const v1= new Car()
const v2 = new Truck()

function nyobaClass(cb: Kendaraan){
    cb.mobil()
    if(cb instanceof Truck) {
        cb.trek()
    }
}

nyobaClass(v1)

// discriminated union
// key property type sebagai trigger untuk membuat discriminated type
interface Bird {
    type: "burung"
    flySpeed: number
}

interface Horse {
    type: "kuda"
    runSpeed: number
}

type Animal = Bird | Horse

function jenisHewan (hewan: Animal){
    // normal type guard
    // if("runSpeed" in hewan){
    //     return console.log("hewan ini sedang", hewan.runSpeed)
    // }
    let speed;
    // discriminated type dimana membuat lebih readble dan simple
    switch(hewan.type){
        case "burung":
            speed = hewan.flySpeed;
            break;
        case "kuda":
            speed = hewan.runSpeed;
            break;
    }

    console.log("kecepatan hewan ini adalah", speed)
}

jenisHewan({type:"burung", flySpeed:10})
