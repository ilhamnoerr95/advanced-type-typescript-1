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
        console.log("tests")
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


// TYPECASTING
const contoh = <HTMLElement> document.getElementById("contoh")

// INDEX PROPERTIES: MEMBUAT INDEX KEY DALAM OBJECT TNTERFACES FLEXIBLE

interface ContohLagi  {
    [props:string] : string
}

const obcContoh : ContohLagi = {
    pler: "enak",
    // ewew: 2
}


// FUNGCTION OVERLOAD
// penggunaan function overload tidak bisa menggunakan arrow function
// function overload akan menggabungkan semua function yg ada kedalam fungsi utamanya
type kombinasi = number | string

function exover(a:number,b: number): string;
function exover(a:string,b: number): string;
function exover(a:number,b: number): number;
function exover(a:string,b: string): string;
function exover(a: kombinasi, b:kombinasi){
    if(typeof a === "string" || typeof b === "string"){
            return a.toString() + b.toString()
    }
    return a + b
}

const hasil = exover("aya", "bebe")
hasil.split("") //hasil dari seperti tidak bisa kebaca oleh typescript maka diperlukan overload function

// CHAIN OPTIONAL MENGGUNAKAN ?
// pertama kita tidak mengetahui bentuk dari objek be yg akan dilempar, sewaktu2 pasti akan berubah
// disaat kita sudah mendefinisikan value dengan objek be yg sudah ditentukan lalu salah satu key tersebut tidak ada
// akan terjadi error
// guna dari chain optional ini kita bisa cek satu2 keberdaan datanya

const be = {
    bera: "enak",
    ad: "uhu",
    chain: {a:"a", b:"B"}
}

console.log(be?.chain?.a)


// NULLISH COALESHING: PENANGANAN NULL DAN UNDEFINED CASE ADA DIBAWAH

const nilai = undefined

// PENGGUNAAN SEPERTI INI MEMANG BENAR AKAN TETAPI APABILA HASIL DARI NILAI 0
// MAKA YG AKAN DILEMPAR ADALAH DEFAULT
const storing = nilai || "DEFAULT"
console.log(storing)

// apabila kita ganti operator || menjadi ?? MAKA operator dimana nilai pertama hanya
// mengenmabilakn undefine & null , apabila nilai kosong maka returnya kosong 
const coaleshing = nilai ?? "default"
console.log(coaleshing)