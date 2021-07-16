let answersObj = { 
    name: prompt('Твое имя'),
    lastName: prompt('Фамилия'),
    age: prompt('Возраст'),
    married: confirm('Женат?'),
    marriedFunc: function() {
        if (this.married === true) {
            return 'Женат'
        } else {
            return 'Не женат'
        }
    },
    checkAge: function() {      
        if ( +this.age === NaN) {
            return prompt('Цифрами пиши, чудила')
        } else {
            return this.age
        }
    }
}

const user = document.querySelector('.user')

document.querySelector('.name').innerHTML = answersObj.name
document.querySelector('.lastname').innerHTML = answersObj.lastName
document.querySelector('.age__span').innerHTML = answersObj.checkAge()
document.querySelector('.married').innerHTML = answersObj.marriedFunc()

