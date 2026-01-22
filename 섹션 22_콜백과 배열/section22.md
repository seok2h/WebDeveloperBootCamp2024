# 콜백과 배열

### foreach
for ... of 문과 거의 비슷 (새로운 배열을 생성 X)
```JavaScript
const = nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]

nums.forEach(function (n) {
    console.log(n * n)
    // prints: 8, 64, 49, ... , 1
});

nums.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
})
```

### map
새로운 배열을(리스트) 생성하고 함수 적용한 결과를 새로운 배열에 저장.
```JavaScript
const text = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t) {
    return t.toUpperCase();
})
texts;
caps;


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

const titles = movies.map(function (movie) {
    return movie.title;
})

>>> ["Amadues", "Stand By Me", "Parasite", "Alien"]
```