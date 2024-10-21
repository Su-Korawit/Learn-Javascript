let scores = [86, 50, 60, 33, 48, 10, 100];


// find() SEEM map
// BUT RETURN TURN FALSE KEEP VALUE ONLY FIRST FIND
let valfind = scores.find((scores) => {
    return scores <= 50;
});
console.log(valfind);

// findIndex SEEM find
// BUT RETURN TRUE FLASE KEEP INDEX
let indfind = scores.findIndex((scores) => {
    return scores <= 50;
});
console.log(indfind);

// every SEEM find
// BUT JUST ONE FALSE EVERYTHIGH FALSE
// RETURN TRUE FALSE KEEP TRUE AND FALSE
let bolevery = scores.every((scores) => {
    return scores >= 50;
});
console.log(bolevery)

// some SEEM every
// BUT JUST ONE TRUE EVERYTHING TRUE
let bolesome = scores.some((scores) => {
    return scores >= 50;
});
console.log(bolesome)