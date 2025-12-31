# JS Obejects
### key-value pair
예시
```JavaScript
const person = {firstName: 'Mick', lastName: 'Jagger'}

person
>>> {firstName: "Mick", lastName: "Jagger"}

let comment = {
    username : 'sillyGoose420',
    downVotes : 19,
    upVotes : 214,
    netScore : 195,
    commentText : 'Tastes like chicken lol',
    tags : ['#hilarious', '#funny', '#silly'],
    isGilded: false
};

//access 하는 법
comment["username"]
>>> "sillyGoose420"

comment.username
>>> "sillyGoose420"

comment['user' + 'name']
>>> "sillyGoose420"

const midterms = {danielle: 96, thomas: 78};
midterms.thomas = 79;

midterms
>>>  {danielle: 96, thomas: 79}

midterms.ezra = 'A';
midterms['antonio'] = 'B';

midterms
>>> {danielle: 96, thomas: 79, ezra: 'A', antonio: 'B'}

```

### Arrays + Objects
```JavaScript
const shoppingCart = [
    {
        product: 'Jenga Classic',
        price: 6.88,
        quantity: 1,
    },
    {
        product: 'Echo Dot',
        price: 29.99,
        quantity: 3
    },
    {
        product: 'Fire Stick',
        price: 39.99,
        quantity: 2
    }
]

const comment = [
    {username: 'Tammy', text: 'lolololol', votes: 9},
    {username: 'FishBoi', text: 'glub glub', votes: 12345},
]