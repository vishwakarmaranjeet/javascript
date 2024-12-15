const keys = ["name", "email", "phone"];
const values = ["Test", "test@gmail.com", "238943294"];

const user = {};

keys.forEach((value, index) => {
    return user[value] = values[index];
});

// console.log("user", user);

const users = keys.reduce((acc, value, index) => {
    acc[value] = values[index]
    return acc;
}, {});

console.log(users);

const fruits = ["apple", "banana", "graphes", "apple"];

const fruitsCount = fruits.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1; 
    return acc;
}, {});

console.log(fruitsCount);

