// let myName = "Inder"

// console.log(myName.length);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.inder = function (){
    console.log(`Inder is present in all object`);
}

Array.prototype.heyInder = function (){
    console.log(`Inder say hello`);
}

// heroPower.inder()
myHeros.inder()
myHeros.heyInder()
// heroPower.heyInder()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// mordern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

// ============================================

let anotherUserName  = "InderDev        "

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`);
}

anotherUserName.trueLenght()
"hitesh".trueLenght()
"Sachin".trueLenght()