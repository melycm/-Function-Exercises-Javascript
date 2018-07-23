// 1. Positive Numbers
var arr = [1, -4, 3, -7, 9];

var newArray = arr.filter(function(element){
    if(element > 0){
        return element;
    }
    
})
console.log(newArray);

// 2. Even Numbers
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var newArray1 = myArray.filter(function(element){
    if(element % 2 == 0){
        return element
    }
})
console.log(newArray1);

// 3. Square the Numbers
var myArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray1.forEach(function(element, index, array){
    array[index] = element* element;
});
console.log(myArray1);

// 4. Cities I
var cities = [ 
    {name: 'Los Angeles', temperature: 60.0}, 
    {name: 'Atlanta', temperature: 52.0 }, 
    {name: 'Detroit', temperature: 48.0 }, 
    {name: 'New York', temperature: 80.0 } 
];
var results = cities.filter(function(dictionaryValue){
    if(dictionaryValue["temperature"] <= 70){
        return dictionaryValue
    }
})
console.log(results);

// 5. Cities II
var cities1 = [ 
    {name: 'Los Angeles', temperature: 60.0}, 
    {name: 'Atlanta', temperature: 52.0 }, 
    {name: 'Detroit', temperature: 48.0 }, 
    {name: 'New York', temperature: 80.0 } 
];

function getCities(input, field) {
    var cities2 = [];
    for (var i=0; i < input.length ; ++i)
        cities2.push(input[i][field]);
    return cities2;
}

console.log(getCities(cities1, "name"));

// 6. Good Job 
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

var greetings = people.forEach(function(greet){
    console.log('Good Job, ' + greet + '!')
})
console.log(greetings);

// 7. Sort an Array
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

people.sort(function(a, b){
    return a <= b
})
console.log(people);

// 8. Sort an Array 2
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

people.sort(function(a, b){
    return b.length - a.length;
})
console.log(people);

// 9. Sort and Array 3
var arr1 = [ [1, 3, 4], [2, 4, 6, 8], [3, 6] ];

var sumArray = arr1.map(function(element){
    var sum = 0;
    for(var i = 0; i < element.length; i++){
        sum = sum + element[i]
    }
    return sum
})

console.log(sumArray);

// 10. 3 times

var fun1 = function(){
    console.log("Hello World!")
}
function call3Times(fun) {
    fun();
    fun();
    fun();
}

call3Times(fun1);

// 11. n times
function callNTimes(number, fun){
    var repeatedWord = "";

    while (number > 0) {
        repeatedWord += fun;
        number --;
    }
    return repeatedWord;
}
console.log(callNTimes(5,"Hello World! "));

// 12. Sum an array
const myArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reduce = (sum, value) => sum + value;

console.log(myArray3.reduce(reduce));

// 13. Acronym
var acronym = ['very', 'important', 'person'];
var splitarr = [];
var joinarr = [];

function indwords() {
    for(word in acronym) {
        splitword = acronym[word]
        splitLetter = splitword.split('') 
        joinarr.push(splitLetter[0])
        
    }
    console.log(joinarr.join(''))
}
console.log(indwords())


