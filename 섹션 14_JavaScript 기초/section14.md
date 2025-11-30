# JavaScript 기초
### Primitive Types
* Number
* String
* Boolean
* Null
* Undefined

#### Number
자바스크립트에는 하나의 숫자 타입만 존재한다.

#### Math Operations
**Addition**: 50 + 5<br>
**Subtraction** : 50 - 1<br>
**Multiplication** : 50 * 7<br>
**Division** : 400 / 25<br>
**Modulo** : 27 % 2<br>
**제곱** : 3 ** 2

**PEMDAS**: 괄호, 지수, 곱하기, 나누기, 더하기, 빼기

**NaN** : 숫자타입이지만 숫자가 아님을 표현하는 것 예) 0/0


### 변수
#### 변수 선언 법 : let someName = value;
```JavaScript
let year = 1985;<br>
```

**증감 연산자 사용 가능<br>**
++year<br>
year++<br>
가능

**상수 선언 법**
```JavaScript
const pi = 3.14159265;
const daysInWeek = 7;
```

**The Old Variable Keyword**<br>
```JavaScript
var runDistance = 26.2
```

**BOOLEANS**<br>
```JavaScript
let isLoggedIn = true;<br>
let flagVariable = false;
```

**Strings**<br>
무조건 따옴표가 들어가야 함 (큰 따옴표, 작은 따옴표 상관 X)<br>

```JavaScript
let username = "danny";
let message = 'hello world!';
```

문자열 인덱싱, 길이
```JavaScript
let animal = "Dumbo Octopus"
animal[0]
>>> D

animal.length
>>> 13
```

문자열 합치기
```JavaScript
"hello" + "world"
>>> "helloworld"
```

string methods
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
