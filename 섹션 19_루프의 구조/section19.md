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