/**
 * Convert from milliseconds to seconds
 */
export function msToSec(time){
     return time / 1000;
}
/**
 * Convert from seconds to milliseconds
 */
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