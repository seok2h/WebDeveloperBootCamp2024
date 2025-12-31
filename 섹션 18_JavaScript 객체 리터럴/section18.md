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