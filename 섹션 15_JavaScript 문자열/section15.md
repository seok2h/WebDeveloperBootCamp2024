# JavaScript 문자열
### Strings
무조건 따옴표가 들어가야 함 (큰 따옴표, 작은 따옴표 상관 X)<br>

```JavaScript
let username = "danny";
let message = 'hello world!';
```

**문자열 인덱싱, 길이**
```JavaScript
let animal = "Dumbo Octopus"
animal[0]
>>> D

animal.length
>>> 13
```

**문자열 합치기**
```JavaScript
"hello" + "world"
>>> "helloworld"
```

**string methods**
```JavaScript
let message = "JavaScript is so fun";

message.toUpperCase()
>>> "JAVASCRIPT IS SO FUN"
message.toLowerCase()
>>> "javascript is so fun"


message = "      JavaScript is so fun       ";
message.trim() // 문자열 앞 뒤 공백 제거
>>> "JavaScript is so fun"


message = "JavaScript is so fun"
meesage.indexOf('is')
>>> 11
message.indexOf('z')
>>> -1 // Not found

let str = 'supercalifragilisticexpialidocious'
str.slice(0,5); // 'super'
str.slice(5); // 'califragilisticexpialidocious'

let anooyingLaugh = 'teehee so funny! teehee!';
annoyingLaugh.replace('teehee', 'haha');
>>> 'haha so funny! teehee!' // it only replaces the first instance

'lol'.repeat(3)
>>> 'lollollol'
```

### Template Literals
리눅스 쉘과 비슷함.<br>
<b>단 작은 따옴표(')가 아닌 백틱(`)을 사용</b>
```JavaScript
`I counted ${3 + 4} sheep`; //
>>> 'I counted 7 sheep'
```
```JavaScript
let product = 'Artichoke';
let price = 2.25;
let qty = 5;
"You bought " + qty + " " + product + ". Total is: " + price * qty
>>> "you bought 5 Artichoke. Total is: 11.25" // 가능하지만 복잡함

// Template Literals 사용 예
`You bought ${qty} ${product}. Total is: ${price * qty}`
>>> "you bought 5 Artichoke. Total is: 11.25"
```

### Null과 undefined
Null은 python에 None과 비슷함.<br>
Undefined은 정의되지 않음.<br>
null은 null 자체로 값임.<br>
undefined는 값자체가 존재하지 않음.

### Math Object
```JavaScript
// Math 개체의 변수(상수) 중 일부
Math.E
>>> 2.71828182
Math.PI
>>> 3.141592
// 결과와 인수는 생략
Math.abs()
Math.sin()
Math.cos()
Math.tan()
Math.floor() //내림
Math.ceil() //올림

//Random Numbers
Math.random() // 0 ~ 0.999999999... 사이의 수 출력
// 만약 1 ~ 5 사이에 random 자연수를 얻고 싶다
Math.floor(Math.random() * 5) + 1 // +1을 하지 않으면 0 ~ 4사이의 수만 출력

```