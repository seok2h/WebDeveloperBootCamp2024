# 반복문
### FOR 문
1부터 10까지 출력하기, 리스트 출력하기
```JavaScript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

const animals = ['lions', 'tigers', 'bears']


for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}
```

중첩문
```JavaScript
const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart[i]; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length: j++) {
        consolel.log(row[j]);
    }
}

>>> 'Kristen'
    'Erik'
    'Namita'
    'Geoffrey'
    'Juanita'
    'Antonio'
    'Kevin'
    'Yuma'
    'Sakura'
    'Jack'
    'Erika'
```

### While 문
```JavaScript
let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}
```

### For ... of 문
for (variable of iterable) {
    statement
}

``` JavaScript
const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];

for (let sub of subreddits) {
    console.log(sub)
}
>>> cringe
    books
    chickens
    funny
    pics
    soccer


for (let char of "hello world") {
    console.log(char)
}
>>> 'h'
    'e'
    'l'
    'l'
    'o'

    'w'
    'o'
    'r'
    'l'
    'd'
```

### For in 문
```JavaScript
const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

for (let person of testScores) { // Uncaught TypeError: testScores is not iterable
    console.log(person);
}


// But
for (let person in testScores) { 
    console.log(person);
}
>>> keenan
    damon
    kim
    shawn
    marlon
    dwayne
    nadia
    elvira
    diedre
    vonnie

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`)
}
>>> keenan scored 80
    damon scored 67
    kim scored 89
    shawn scored 91
    marlon scored 72
    dwayne scored 77
    nadia scored 83
    elvira scored 97
    diedre scored 81
    vonnie scored 60
```