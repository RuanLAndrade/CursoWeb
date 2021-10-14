let valueMembership = function (month, value) {
  if (month > 0 && month < 13){
    delayed = month - 1
    return console.log(`${value * (1.05**delayed).toFixed(2)}`)
  } else {
    return 'Invalid month'
  }
}

valueMembership(4, 100)