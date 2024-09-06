
const a = [49, 4, 30, 9, 5, 90, 37];

function myFunction(value) {
    return value > 18;
}

let b = a.some(myFunction);
console.log(b);

//Array Every()
const c = [49, 4, 30, 9, 5, 90, 37];

function myFunction(value) {
    return value > 18;
}

let d = c.every(myFunction);
console.log(d);

