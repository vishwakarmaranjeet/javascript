export function msToSec(time){
     return time / 1000;
}
export function secToMS(time){
    return time * 1000;ß
}
export function truncate(str, max = 0){
    if(typeof str !== 'string' || max === 0){
        return str;
    }
    return str.length <= max ? str : `${str.substring(0, max)}...`
}

export function format2DigitNumber (number){
    if(number <= 0){
        return "00";
    } else if(number <= 9){
        return "0" + number;
    } else {
        return number;
    }
}
  
export function protectedAccNo(input) {
  return (
    input.substr(0, 2) +
    input.substr(2, input.length - 6).replace(/\d/g, 'X') +
    input.substr(-4)
  );
}

export function commaSeparatorCurrency(input) {
  input = input + '';
  var inpDec = input.split('.')[1];
  var inpInt = input.split('.')[0];
  var lastThree = inpInt.substring(inpInt.length - 3);
  var otherNumbers = inpInt.substring(0, inpInt.length - 3);
  if (otherNumbers != '') {
    lastThree = ',' + lastThree;
  }
  inpInt = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
  return inpDec == null ? inpInt : inpInt + '.' + inpDec;
}

export async function makeAPIRequest(url, payload, contentType) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': contentType || 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify(payload)
    });
    if (response.status == 401) {
      return new Promise(function(resolve) {
        resolve({ status: response.status });
      });
    } else {
      return await response.json();
    }
  } catch (error) {
    return Promise.resolve({ valid: false });
  }
}

export function deepCopy(obj){
 return JSON.parse(JSON.stringify(obj));
};
// Usage
const originalObj = {name: "abc", address: { street: "test", landmark: "test 01" }};
const copiedObj = deepCopy(originalObj);
console.log(copiedObj);

export function generateUniqueId(){
  return Math.random().toString(36).substring(2, 9);
};
// Usage
const uniqueId = generateUniqueId();
console.log(uniqueId);

export function hasKey(obj, key){
  return obj.hasOwnProperty(key);
};
// Usage
const obj = { name: "John", age: 32 };
const hasAgeKey = hasKey(obj, "age");
console.log(hasAgeKey) // True

export function filterArray(array, condition){
  return array.filter(condition);
};
// Usage
const numbers = [1, 2, 3, 4, 5, 6];
const even = filterArray(numbers, (num)=> num % 2 === 0);
console.log(even);

export function truncateString(str, maxLength){
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
};
// Usage
const longText = "This is long text that needs to be truncate.";
const truncateText = truncateString(longText, 20);
console.log(truncateText);

export function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Usage
const randomValue = getRandomNumber(1, 10);
console.log(randomValue);

export function mergeObjects(...object){
  return Object.assign({}, ...object);
};
// Usage
const obj1 = { name: "Test", location: "Mumbai" };
const obj2 = { age: 25, address: "Somewhere on the earth" };
const mergedObject = mergeObjects(obj1, obj2);
console.log(mergedObject);

export function parseUrlParameters(url){
  const params = {};
  new URL(url).searchParams.forEach((value, key)=> (params[key] = value));
  return params;
};
// Usage
const urlString = "https://example.com?name=John&age=25";
const urlParams = parseUrlParameters(urlString);
console.log(urlParams);

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// Usage
const inputString = 'hello world';
const capitalizedString = capitalizeFirstLetter(inputString);
console.log(capitalizedString);

export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
// Usage
const isMobile = isMobileDevice();
console.log(isMobile);

export function sortByProperty(arr, property) {
  return arr.slice().sort((a, b) => a[property] - b[property]);
}
// Usage
const people = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 35 }];
const sortedPeople = sortByProperty(people, 'age');
console.log(sortedPeople);

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Usage
async function exampleAsyncFunction() {
  console.log('Start');
  await sleep(2000); // Sleep for 2 seconds
  console.log('End');
}
exampleAsyncFunction();

export function camelCaseToTitleCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, c => c.toUpperCase());
}
// Usage
const camelCaseString = 'myVariableName';
const titleCaseString = camelCaseToTitleCase(camelCaseString);