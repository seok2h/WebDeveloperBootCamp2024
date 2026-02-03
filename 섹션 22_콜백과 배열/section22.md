# 콜백과 배열

## FOREACH
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

## MAP
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

## Arrow function
```JavaScript
const square = (x) => {
    return x * x;
}

const sum = (x, y) => {
    return x + y;
}

const sum = (x, y) => ( 
    x + y;
)
// 중괄호에서 소괄호로 변경하면 return 문 없어 return 할 수 있다. 코드를 더 짧게 만들 수 있으며, 한줄로 작성할 수도 있다.
const sum = (x, y) => a + b

// 하지만 리턴할 딱 하나의 표현식만 존재해야 한다.
const sum = (x, y) => (
    let a = x;
    let b = y; 
    a + b;
) // ERROR
```

## setTimeout
다른 언어의 sleep 함수와 비슷하지만 다르다.
```JavaScript
console.log("HELLO!!!...");
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)

console.log("GOODBYE!!!"); // 이건 바로 출력 됨

>>> HELLO!!!...
>>> GOODBYE!!!
>>> ...are you still there?
```
밑의 명령어는 정상 작동하지 않는다.
```JavaScript
setTimeout(console.log("hi!"), 3000)
```
setTimeout의 인수로 콜백 함수가 와야한다.

## setInterval
원하는 시간을 간격으로 무한 반복하게 한다.
```JavaScript
setInterval(() => {
    console.log(Math.random())
}, 2000 )
```
Math.random()이 2초를 간격으로 무한 출력

**interval을 멈추는 법: clearInterval**
setInterval을 호출할 때마다 id를 반환한다. 이 id를 이용하여 중단시킬 수 있음.
```JavaScript
const id = setInterval(() => {
    console.log(Math.random())
}, 2000 )

clearInteval(id) // setInterval이 중단된다.
```

## FILTER
필터링 한 후 참인 값에 대해서만 새로운 배열을 생성한다.
```JavaScript
const numbers = [1,2,3,4,5,6,7,8,9];

numbers.filter(n => {
    return n < 10
})
// 위 함수의 출력 : [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
**filter 활용**
```JavaScript
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

goodMovies
>>> 0
: 
{title: 'Amadeus', score: 99, year: 1984}

// 더 짧게 하는 법
const goodMovies = movies.filter(movie => m.score > 80)

const recentMovies = movies.filter(m => m.year > 2000)

movies.filter(m => m.score > 80).map( => m.title);
// 80점 이상의 타이틀만 보여줌
``` 

## EVERY & SOME
BOOLEAN 메서드
* every : 배열안에 모든 조건값이 참이면 true
```JavaScript
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

exams.every(score => score >= 75)
>>> true

const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77]

exams.every(score => score >= 75)
>>> false
```
* some : 배열안에 일부가 참이면 참
```JavaScript
const movies = [
    {
        title: 'Amadues',
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
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1979
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    }
]

movies.some(movie => movie.year > 2015)
>>> true // 하나 이상 있음
```

## REDUCE
**배열을 상대로 각 요소인자로 넘어온 콜백 함수를 실행하여 누적된 하나의 결과값을 반환.**<br>
**reduce 함수 구조:**<br>
&emsp;&emsp;array.reduce(콜백 함수, 초기값);<br>
&emsp;&emsp;array.reduce((accumulator, currentValue));<br>

첫 매개변수는 accumulator, 두번째 매개변수는 배열의 각각 element

첫 번째 순회에서는 accumulator에 
```JavaScript
```