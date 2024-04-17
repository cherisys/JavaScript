let PersonObj = {
    fname: "Mohd",
    lname: "Arshad"
};

/*
for(let ele of PersonObj){
    console.log(ele);
}
*/
//for..of loop gives an error, that object
//must have [System.iterator]() method which returns an iterator.
//this means that PersonObj is not iterable by default.

//Making PersonObj iterable.
PersonObj[Symbol.iterator] = function() {
    let properties = Object.keys(PersonObj);
    let count = 0;
    let isDone = false;
    return {
        next:()=>{
            if(count>=properties.length) isDone = true;
            return {value: this[properties[count++]], done:isDone}
        }
    }
};

let ObjIterator = PersonObj[Symbol.iterator]();
console.log(ObjIterator.next());
console.log(ObjIterator.next());
console.log(ObjIterator.next());

