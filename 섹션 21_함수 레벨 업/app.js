// function collectEggs() {
//     let totalEggs = 6;
// }

// collectEggs()
// console.log(totalEggs) // undefined

let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'HIII!';
}

console.log(radius);
console.log(PI)

function backRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman'];
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
        }
    }
    cryForHelp();
}