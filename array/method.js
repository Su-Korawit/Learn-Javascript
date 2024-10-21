// Intionalize
let scores = [86, 50, 60, 33, 48, 10, 100];

// Assign
scores[0] = 10;

// unshift font insert
scores.unshift('Hello');
console.log(scores);

// shift font delete
scores.shift();
console.log(scores);

// push.('') back insert
scores.push(99);
console.log(scores);
// pop.() back dalate
scores.pop();
console.log(scores);

// splice(ตำแหน่ง, จำนวนข้อมูลที่จะลบ, ข้อมูลใหม่) insert, delete
scores.splice(0, 0, 90)
console.log(scores);

scores.splice(0, 1)
console.log(scores);

// .length
console.log(scores.length);

// Array X Loop
for (let i = 0; i < scores.length; ++i) {
    console.log(scores[i]);
}