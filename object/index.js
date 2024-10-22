// Intionalize
// let Rabbit = {}//object
// in {}
// {
// name: 'name'
// color: ''
//}

let rabbit = {
    name: "momo",
    color: "white"
};

// Assign
// rabbit.name = 'newname'

console.log(rabbit.name)

rabbit.name = 'meme'
console.log(rabbit.name)

// array & object
// let rabbit = [
//   {} //object
//   {} //object
//   {} //object
// ]

let dogs = [
    {
        name: "Lucky",
        color: "Gold"
    },
    {
        name: "Micro",
        color: "gray"
    }
]

console.log(dogs[1].name);

dogs.forEach((dogs) => {
    console.log(dogs.name);
});

// Method, this
// Medthod is function in objects
// talk: function () {
//    variable if name(global) this.name(local)
// }
// talk() {} // short-hand
// call object.name.function();

let _rabbit = {
    name: "momo",
    color: "white",
    talk: function() {
        console.log(this.name, 'Oung'); // full version
    },
    talk_() {
        console.log('Oung', this.name); // short-hand
    }
};

_rabbit.talk();
_rabbit.talk_();

// constructot function, new
// function Rebbit() {parameter} //capitalize.name
// {
//    this.name = parameter // like name: "parameter"
// }
// let new Rebbit(parameter);
// new receive object(constructot)
// Medthod in constructot function
//  this.talk = fuction() {} // no use short-hand

function Rabbit(name, color) {
    this.name = name,
    this.color = color,
    this.talk = function() { // only full version
        console.log(this.name, this.color);
    }
}

rabbit_hykee = new Rabbit('Hykee', 'Blue');
rabbit_hykee.talk();