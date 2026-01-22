const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function print(element) {
//     console.log(element)
// }

// numbers.forEach(print)

// >>> 1
//     2
//     3
//     4
//     5
//     6
//     7
//     8
//     9

// 위와 동작이 같음. same outcome
numbers.forEach(function (el) {
    console.log(el)
})

// for (let el of numbers) {
//     console.log(el);
// }

numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }
})

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

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})