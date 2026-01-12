# 함수
### 함수 정의 법
```JavaScript
function funcName() {
    //do something
}

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
```

### 인수
```JavaScript
function greet(person) {
    console.log(`Hi, ${person}`)
}

greet('Elvis');
>>> "Hi, Elvis" 

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result)
}
```
### Return
```JavaScript
function add(x, y) {
    return x + y;
}

function add(x, y) {
    let sum = x + y; 
    return sum;
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number')  {
        return false;
    }
    let sum = x + y; 
    return sum;
}
```