const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const titles = movies.map(function (movie) {
//     return movie.title;
// })

// const add = function(x, y) { // 변수에 저장된 함수
//     return x + y;
// }

// function add(x, y) { // 함수 그 자체
//     return x + y;
// }

const add = (x, y) => {
    return x + y;
}

const square = (x) => {
    return x * x;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const greet = (name) => {
    return "Hey " + name + "!";
}