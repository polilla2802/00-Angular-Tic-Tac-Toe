export function JumpSearch(arr: number[], x: number, n: number) {
    // Finding block size to be jumped 
    let block: number = Math.sqrt(n);
    // Finding the block where element is 
    // present (if it is present) 
    let prev: number = 0;
    while(arr[Math.min(block,n)-1]<x){
        prev = block;
        block += Math.sqrt(n);
        if(prev >= n){
            return -1;
        }
    }

    // Doing a linear search for x in block 
    // beginning with prev. 
    while (arr[prev] < x) 
    { 
        prev++; 
  
        // If we reached next block or end of 
        // array, element is not present. 
        if (prev == Math.min(block,n)) 
            return -1; 
    } 
    // If element is found 
    if (arr[prev] == x) 
        return prev; 
  
    return -1; 

}
