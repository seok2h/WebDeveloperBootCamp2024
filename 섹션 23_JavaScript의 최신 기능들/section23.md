# JavaScript의 최신 기능들
## Default Prameter
사용자가 매개변수를 지정하지 않았을 때

구대기 방식
```JavaScript
function rollDie(numSides) {
    if (numSides === undefined) {
        numSides = 6
    }
    return Math.floor(Math.random() * numSides) + 1;
}
```
새로운 방식
```JavaScript
function rollDie(numSides=6) {
    return Math.floor(Math.random() * numSides) + 1;
}
```
## Spread
배열을 전개하는 역할 / 배열 앞에 ...을 붙이면 됨<br>
예)
```JavaScript
Math.max() // 인수 중에서 가장 큰 값을 찾아주는 함수
Math.max(1,2,3) // 3

// but 
arr = [1,2,3,4,5,6,7,8,9]

Math.max(arr) // NaN -> 배열에 들어있는 요소들을 풀어서 넣어줘야 함.
Math.max(...nums)
>>> 9
```
인수로 넣을때에만 작동한다, 문자열에도 적용된다
```JavaScript
console.log(...'hello')
>>> h e l l o
```
배열 합치기도 가능
```JavaScript
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]
allPets
>>> ['Blue', 'Scout', 'Rocket', 'Rusty', 'Wyatt']
```
객체에도 사용가능
```JavaScript
const feline = {legs:4, family: 'Felidae'};
const canline = {isFurry: true, family: 'Caninae'}

{...feline, color: 'black'}
>>> {legs: 4, family: 'Felidae', color: 'black'}

{...feline, ...canline} // family 요소가 중복됨
>>> {lges: 4, family: "Caninae", isFurry: true} // 순서가 영향을 줌 -> feline 먼저 복사 후 canline이 이후의 복사되면서 최종적으로 family: "Caninae"가 됨
```
배열이나 문자열을 객체 안에 넣을 때: 인덱스를 key로 사용한다.
```JavaScript
{...[2,4,6,8]}
>>> {0: 2, 1: 4, 2: 6, 3: 8} // 인덱스를 key로 사용

{..."HIII"}
>>> {0: "H", 1: "I", 2: "I", 3: "I"}
```
## Rest
매개변수를 정의하지 않아도 인수는 arguments 요소에 자동 저장된다 (배열 객체가 아님 주의)
```JavaScript
function sum() {
    console.log(arguments)
}

sum(34, 65, 77)
>>> Arguments(3) [34, 65, 77, callee: ƒ, Symbol(Symbol.iterator): ƒ]
```
```JavaScript
function sum(...nums) { // 인수 개수의 제한을 없앨 수 있다.
    console.log(nums)
}

sum(43,43,23,52)
>>> [43, 43, 23, 52]
```
```JavaScript
function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDA GOES TO: ${gold}`)
    console.log(`SILVER MEDA GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}
```
## Desturcturing
구조 , 배열을 해체하여 각각의 변수로 만드는 법
```JavaScript
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

const highScores = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze] = scores;
gold
>>> 929321
silver
>>> 899341
bronze
>>> 888336

const [gold, ...everyoneElse] = scores
gold
>>> 929321
everyoneElse
>>> [899341, 888336, 772739, 543671, 243567, 111934]
```