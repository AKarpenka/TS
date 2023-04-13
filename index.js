var str = 'str';
console.log(str);

//ассив чисел, в котором каждое число встречается 2 раза и лишь 1 число - 1 раз. Найти это число. 
let someArr = [2, 3, 1, 4, 3, 4, 1];

someArr.sort();
console.log(someArr);

let numb = someArr.filter((i, index, arr) => {
    if (index !== 0 && arr[index] !== arr[index - 1] && arr[index] !== arr[index + 1]) {
        return i;
    }
});

console.log(numb);


const time = {
    hour: 2,
    seconds: () => {
        console.log(this);
        return 3600 * this.hour
    },
    minutes() {
        return 60 * this.hour;
    }
}

console.log(time.seconds());
console.log(time.minutes());