//Iteration revolves around two key concepts: 1. iterables and 2. iterators
//1. Iterable is an object that implements a method, whose key is Symbol.iterator
// Iterable returns an Iterator
//2. Iterator is an object that implements a next method, which access elements from collection.
// Iterator returns an IteratorResult, which gives collection element and flag if reached at end.

/*
Iterable {
    [Symbol.iterator](): Iterator
}

Iteraor {
    next(): IteratorResult
}

IteratorResult {
    value: any,
    done: boolean
}
*/

//writing custom iteration for array.

let iterable = [1,3,4];

function createIterator(array)
{
    let count =0;
    return {
        next: function(){
            return count<array.length ?
            {value: array[count++], done: false} :
            {value: undefined, done: true}
        }
    }
}

let myIterator = createIterator(iterable);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

//this is how the for..of loop works iternally.
//until the iteration is completed and done is true,
//it keeps calling next method.