function firstDuplicate(a) {
  let result = {};

  for (let i = 0; i < a.length; i++) {
    let count = 0;
    let dist = [];

    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j]) {
        // console.log('count', count);
        dist.push(j)
        count++;
      }
      if (count === 2) {
        console.log(a[i], 'dist', dist);
        
        result[a[i]] = (i-j);
      }
    }
    
  }

  console.log(result);
  
  // return -1;
}

const arr = [2, 1, 3, 5, 3, 2];

console.log(firstDuplicate(arr));