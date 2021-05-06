function mapToNegativize(arr){
    let new_arr = [];
    for(let i=0; i<arr.length; i++){
        new_arr.push(-1 * arr[i])
    }
    return new_arr;
}

function mapToNoChange(arr){
    let new_arr = [];
    for(let i=0; i<arr.length; i++){
        new_arr.push(arr[i])
    }
    return new_arr;
}

function mapToDouble(arr){
    const new_arr = arr.map(num => num * 2)
    return new_arr;
}

function mapToSquare(arr){
    let new_arr = [];
    for(let i=0; i<arr.length; i++){
        new_arr.push(arr[i]*arr[i])
    }
    return new_arr;
}

function reduceToTotal(arr, start=0) {
    let total = start
    for (let i = 0; i < arr.length; i++ ) {
      total = total + arr[i]
    }
    return total
  }
  
  function reduceToAllTrue(arr) {
    for (let i = 0; i< arr.length; i++ ) {
      if (!arr[i]) return false
    }
    return true
  }

  function reduceToAnyTrue(arr){
      for(let i=0; i< arr.length; i++){
          if(arr[i]) return true
      }
      return false;
  }