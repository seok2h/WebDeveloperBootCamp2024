const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`
    }, // undefined undefined, 화살표 함수는 this를 
    shoutName: function () {
        setTimeout(function () {
            console.log(this.fullName())
        }, 3000)
    }
}

const person2 = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(function () {
            console.log(this); // setTimeout이 window 소속이므로 this도 window 객체를 가르킴
            console.log(this.fullName()) // error, window 객체에는 fullName()이 없기 때문
        }, 3000)
    }
}


const person3 = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`
    },
        shoutName: function () { // 화살표 함수로 변환
            setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}