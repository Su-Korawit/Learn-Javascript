// GET VALUE AND INDEX
// .forEach((parameter, index) => {
//   if (score >= 50) {
//     starement
//   }
// })

let scores = [86, 50, 60, 33, 48, 10, 100];

scores.forEach((scores) => {
    if (scores >= 50) console.log(scores);
});

scores.forEach((scores, index) => {
    if (scores >= 50) console.log(scores, index);
});