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
