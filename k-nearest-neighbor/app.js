//write a function that accewpts a list of objects, an integer K, and another object.
// each object in the list has three properties
// {x, y, label}

// from Michael
// Another way of getting the keys off of an object:
// let obj = { a:3, b:1, c:6}
// let keys = Object.keys(obj)
// console.log( keys ) // [a,b,c]

// obj.d = 5
// keys = Object.keys(obj)
// console.log(keys) // [a,b,c,d]


//distance helper function
function distance(point1, point2) {
    return Math.sqrt((point1.x - point2.x)^2 + (point1.y - point2.y)^2);
}

//Sorting Magic Method
// unsorted list
// sortByDistance = [{x,y,label}, {x,y,label}...]
// i = #   tally   majority
// [].length === k


//function tally (returns the count)
let tally = (list) => () {
    let tally = {};
    for(let i in list){
        if(list[i]){
            list[i] += 1;
        } else {
            list[i] = 1;
        }
        return tally;
    }
}

function majority(tally){
    let large;
    for(let tally in list){
        if(tally[i] = large){
            large=tally[i];
        }
        return large;
    }
}