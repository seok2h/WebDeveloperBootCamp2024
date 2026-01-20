# 함수 레벨 업
### 변수 접근성
함수 내에 선언된 변수는 기본적으로 함수 외부에서 접근할 수 없다.
```JavaScript
function collectEggs() {
    let totalEggs = 6;
}

collectEggs()
console.log(totalEggs) // undefined
```
if문 같은 블럭도 마찬가지
```JavaScript
let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'HIII!';
}

console.log(radius); //error: undefined
console.log(PI) // error: undefined

// 단 var로 선언된 변수는 블럭 밖에서도 불러와짐
for (var i = 0; i < 5; i++) {
    var msg = "asdf";
}

console.log(i) // 5
console.log(msg) // "asdf"
```

### 렉시컬 범위
부모 함수의 안에 중첩된 내부 함수는 해당 외부 함수의 범위에나 또는 범위 내에서 정의된 변수에 엑세스할 수 있다.
```JavaScript
function backRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman'];
    function cryForHelp() {
        for (let hero of heroes) { // 부모 함수의 변수를 사용할 수 있다.
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
        }
    }
    cryForHelp();
}
```
하지만 자식 함수에서 선언된 변수는 부모 함수에서 접근할 수 없다.

### 함수를 정의하는 다른 방법
```JavaScript
const add = function (x, y) {
    return x + y;
}

add(3, 4) // 7
}
```

### 함수를 인수로 전달하는 법
```JavaScript
function callTwice(func) {
    func();
    func();
}

// rollDie는 1~6의 무작이 수 출력 함수라고 가정
callTwice(rollDie)
>>> 4
    2
```

### 함수를 반환값으로 사용하는 방법
```JavaScript
// 예시 1
function makeMysterFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!");
            console.log("YOU WIN A MILLION DOLLARS!!");
        }
    }
    else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRU!S")
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
        }
    }
}

const mystery = makeMysteryFunc(); // Good function or Bad function으로 정해짐

//예시 2
function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);

isChild(40)
>>> false
isChild(7)
>>> true

const isAdult = makeBetweenFunc(19, 64);

isAdult(30)
>>> true
```

### 객체 안에 함수
```JavaScript
const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}

myMath.PI
>>> 3.14159
myMath.square(2)
>>> 4
myMath["squre"](2) // 가능은 하지만 잘 쓰지 않는다.
>>> 4
```
단축키 혹은 속기법(짧게 쓰는법)이 존재한다
```JavaScript
const math = {
    blah: 'Hi!',
    add(x, y) {
        return x + y;
    },
    multiply(x, y) {
        return x * y;
    }
} // function 키워드가 필요하지 않다.
math.add(50, 60);
```
### this 키워드
```JavaScript
const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says MEOWWWW`); // 여기서 this는 cat 객체를 가르킨다.
    }
}

cat.meow()
>>> "Blue Steele says MEOWWWW"


// 단 this는 가르키는 대상이 변할 수 있다.
const meow2 = cat.meow;
meow2()
>>> "says MEOWWW" // 여기서 this가 가르키는 객체는 window가 된다.

// window 객체는 javascript의 최상위 객체. 즉 어떤 객체를 정의하더라도 window 객체 내에서 정의가 됨 ↓
function scream() {
    console.log("AHHHHHHHHHHHAH");
}

window.scream()
>>> "AHHHHHHHHHHHAH"

// this는 항상 .왼쪽에 있는 객체를 가르키게 되어있음.
// meow2()는 왼쪽에 아무것도 존재하지 않으므로
// this는 항상 window를 가르키게 됨
```
 ### Try / Catch 문
 파이썬의 try / except문과 같은 역할을 한다.

```JavaScript

try {
    hello.toUpperCase(); // 여기서 에러 발생
} catch {
    console.log("ERROR");
}

>>> "ERROR"

function yell(msg) {
    try {
    console.log(msg.toUpperCase().repeat(3));
    }
    catch (e) {
        console.log(e)
        console.log("please pass a string next time!");
    }
}

```