const moment  = require("moment");

module.exports = Object.freeze({
    CALENDAR_INITIAL_EVENTS : [
        {title : "Product call", theme : "GREEN", startTime : moment().add(-12, 'd').startOf('day'), endTime : moment().add(-12, 'd').endOf('day')},
        {title : "Meeting with tech team", theme : "PINK", startTime : moment().add(-8, 'd').startOf('day'), endTime : moment().add(-8, 'd').endOf('day')},
        {title : "Meeting with Cristina", theme : "PURPLE", startTime : moment().add(-2, 'd').startOf('day'), endTime : moment().add(-2, 'd').endOf('day')},
        {title : "Meeting with Alex", theme : "BLUE", startTime : moment().startOf('day'), endTime : moment().endOf('day')}, 
        {title : "Product Call", theme : "GREEN", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "PURPLE", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "ORANGE", startTime : moment().add(3, 'd').startOf('day'), endTime : moment().add(3, 'd').endOf('day')},
        {title : "Product meeting", theme : "PINK", startTime : moment().add(5, 'd').startOf('day'), endTime : moment().add(5, 'd').endOf('day')},
        {title : "Sales Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Product Meeting", theme : "ORANGE", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Marketing Meeting", theme : "PINK", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Client Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Sales meeting", theme : "BLUE", startTime : moment().add(12, 'd').startOf('day'), endTime : moment().add(12, 'd').endOf('day')},
        {title : "Client meeting", theme : "PURPLE", startTime : moment().add(16, 'd').startOf('day'), endTime : moment().add(16, 'd').endOf('day')},
    ],

    RECENT_TRANSACTIONS : [
        {name : "Manisha", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "manisha@dashwind.com", location : "london", amount : 100, date : moment().endOf('day')},
        {name : "Nithisha", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "nithisha@dashwind.com", location : "Hyderabad", amount : 190, date : moment().add(-1, 'd').endOf('day')},
        {name : "Sai", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "sai@dashwind.com", location : "Kerala", amount : 112, date : moment().add(-1, 'd').endOf('day')},
        {name : "Prasad", avatar : "https://reqres.in/img/faces/4-image.jpg", email : "prasad@dashwind.com", location : "Delhi", amount : 111, date : moment().add(-1, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/5-image.jpg", email : "virat@dashwind.com", location : "Bangalore", amount : 190, date : moment().add(-2, 'd').endOf('day')},
        {name : "Karthika", avatar : "https://reqres.in/img/faces/6-image.jpg", email : "karthika@dashwind.com", location : "London", amount : 230, date : moment().add(-2, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Hyderabad", amount : 331, date : moment().add(-2, 'd').endOf('day')},
        {name : "Karthika", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "karthika@dashwind.com", location : "London", amount : 581, date : moment().add(-2, 'd').endOf('day')},
        {name : "Nithisha", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "nithisha@dashwind.com", location : "Delhi", amount : 151, date : moment().add(-2, 'd').endOf('day')},
        {name : "Sai", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "sai@dashwind.com", location : "Kerala", amount : 91, date : moment().add(-2, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "London", amount : 161, date : moment().add(-3, 'd').endOf('day')},
        {name : "Prasad", avatar : "https://reqres.in/img/faces/4-image.jpg", email : "prasda@dashwind.com", location : "Bangalore", amount : 121, date : moment().add(-3, 'd').endOf('day')},
        {name : "Nithisha", avatar : "https://reqres.in/img/faces/6-image.jpg", email : "nithisha@dashwind.com", location : "Hyderabad", amount : 713, date : moment().add(-3, 'd').endOf('day')},
        {name : "Sai", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "sai@dashwind.com", location : "London", amount : 217, date : moment().add(-3, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Delhi", amount : 117, date : moment().add(-3, 'd').endOf('day')},
        {name : "Karthika", avatar : "https://reqres.in/img/faces/7-image.jpg", email : "karthika@dashwind.com", location : "Bangalore", amount : 612, date : moment().add(-3, 'd').endOf('day')},
        {name : "Prasad", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "prasad@dashwind.com", location : "London", amount : 631, date : moment().add(-3, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "virat@dashwind.com", location : "Kerala", amount : 151, date : moment().add(-3, 'd').endOf('day')},
        {name : "Nithisha", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "nithisha@dashwind.com", location : "Hyderabad", amount : 617, date : moment().add(-3, 'd').endOf('day')},

    
    ]
});
