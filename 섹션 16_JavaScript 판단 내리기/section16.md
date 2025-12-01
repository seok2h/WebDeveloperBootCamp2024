# JavaScript 판단 내리기

### comparisons
\> : greater than<br>
\< : less than<br>
\>= : greater than or equal to<br>
\<= : less than or equal to<br>
\== : equality<br>
\!= : not equal<br>
\=== : strict equality<br>
\!== : strict non-equality<br>

**==과 ===의 특징**
==는 타입을 같게 만들고 비교 / ===는 객체 타입도 같아야 함.
```JavaScript
1 == '1'; // true
0 == ''; // true
0 == false; //true
null == undefined; //true

2 === '2' // false
null === undefined // fasle
0 === false // false
```

### Console, Alert, Prompt
**console.log() : 브라우저에서의 출력 (다른 언어의 print문과 비슷)**
**alert() : 브라우저에서의 알림창 생성**
예)
```JavaScript
alert("HELLO THERE!");
```
![image1](./img/image1.png)<br>
**prompt() : 브라우저에서의 입력창 생성**
예)
```JavaScript
promt("please enter a number");
```
![image2](./img/image2.png)<br>