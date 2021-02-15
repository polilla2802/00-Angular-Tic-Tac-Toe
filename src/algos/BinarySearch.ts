export function BinarySearch(arr: number[], l: number, r: number, x: number) {
  while (l <= r) {
    var m = Math.floor((l + r) / 2);
    console.log("m: " + m);
    if (arr[m] == x) {
      return m;
    } else if (arr[m] < x) {
      l = m + 1;
      console.log("l: " + l);
    } else {
      r = m - 1;
      console.log("r: " + r);
    }
  }
  return -1;
}

