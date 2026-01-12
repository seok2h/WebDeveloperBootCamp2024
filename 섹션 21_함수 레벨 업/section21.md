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