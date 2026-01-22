# 콜백과 배열

### foreach
```JavaScript
const = nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]

nums.forEach(function (n) {
    console.log(n * n)
    // prints: 8, 64, 49, ... , 1
});

nums.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
})
```