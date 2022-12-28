function fibs(n) {
  const res = new Array(n);
  res[0] = 0;
  res[1] = 1;

  for (let i = 2; i < res.length; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }
  return res;
}

function fibsRec(n) {
  if (n <= 2) {
    return [0, 1];
  }
  const res = fibsRec(n - 1);
  res.push(res[n - 2] + res[n - 3]);
  return res;
}

console.log(fibs(8));

console.log(fibsRec(8));

function mergeSort(input) {
  const { length: arraySize } = input;
  if (arraySize < 2) return input;
  const mid = Math.floor(arraySize / 2);
  const sortedLeftArray = mergeSort(input.slice(0, mid));
  const sortedRightArray = mergeSort(input.slice(mid, arraySize));
  return merge(sortedLeftArray, sortedRightArray);
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  /* Either left/right array will be empty or both */
  return [...result, ...left, ...right];
}

const randArr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 256));
console.log(randArr);
console.log(mergeSort(randArr));
