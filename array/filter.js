let scores = [86, 50, 60, 33, 48, 10, 100];

// CREATE NEW ARRAY WITH map SEEM forEasch
// map((score) => {
//   return to array (value)
// })

let map_array = scores.map((scores) => {
    if (scores >= 50) return 'passed';
    return 'failed'
});
console.log(map_array);

// QL ARRAY WITH filter SEEM map
// BUT RETURN TRUE OR FALSE KEEP value
// Return score >= 50
let filter_array = scores.filter((scores) => {
    if (scores >= 50) return true;
    return false;
});
console.log(filter_array);

// SUM ARRAY WITH reduce SEEM filter
// BUT parameter is(sum, score) sum Keep value though loop

let sum_array = scores.reduce((sum, scores) => {
    return sum += scores; // RETURN TO SUM
});
console.log(sum_array);