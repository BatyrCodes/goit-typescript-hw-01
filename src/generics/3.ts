function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const obj11 = { name: "Alice", age: 25 };
const obj22 = { position: "Developer", country: "USA" };

const mergedObj = merge(obj11, obj22);
console.log(mergedObj);
// { name: 'Alice', age: 25, position: 'Developer', country: 'USA' }
