const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.filter(n => {
    return n === 4
}) // 필터링 된 새로운 array에 추가한다.

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 35,
        year: 2013,
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    }
]

const goodMovies = movies.filter(movie => {
    return movie.score > 80
})

const goodMovies2 = movies.filter(m => m.score > 80)

const recentMovies = movies.filter(m => m.year > 2000)