# JavaScript 배열

### 배열 선언 법
```JavaScript
let array = [];
let colors = ['red', 'orange', 'yellow'];
let stuff = [true, 67, 'cat', null];
```

배열 요소 변경하는 법
```JavaScript
let color = ['rad', 'blue', 'yelloww'];
let color[0] = 'red'
color
>>> ['red', 'blue', 'yelloww']
```

Javasciprt 배열의 재밌는 점
```JavaScript
let array = [1,2,3];
array[10] = 10; // 가능

array
>>> [1, 2, 3, empty x 7, 10];
array[3]
>>> undefined
array[9]
>>> undefined
```
JavaScript 배열 메서드
```JavaScript
// .push()
let movieLine = [ 'tom', 'nancy'];
movieLine.push('pablo');

movieLine
>>> ['tom', 'nancy', 'pablo']

movieLine.push('harry', 'hermione');

movieLine
>>> ['tom', 'nancy', 'pablo', 'harry', 'herimone']

// .pop()
let person = movieLine.pop();

person
>>> "herimone"
movieLine
>>> ['tom', 'nancy', 'pablo', 'harry']

// .shift()
let person = movieLine.shift();

person
>>> "tom"
movieLine
>>> ['nancy', 'pablo', 'harry']

// .unshift()
movieLine.unshift('VIP');

movieLine
>>> ['VIP', 'nancy', 'pablo', 'harry']

// .concat()
let cats = ['blue', 'kitty']

let dogs = ['rusty', 'wyatt']

cats.concat(dogs)
>>> ['blue', 'kitty', 'rusty', 'wyatt']

cats
>>> ['blue', 'kitty']

let comboParty = dogs.concat(cats);

comboParty
>>> ['rusty', 'wyatt', 'blue', 'kitty']

// includes()
cats.includes('blue')
>>> true

cats.includes('Blue')
>>> false

// .reverse()
comboParty.reverse()
>>> ['kitty', 'blue', 'wyatt', 'rusty']

comboParty
>>> ['kitty', 'blue', 'wyatt', 'rsuty'] // 원본을 변경함


```

