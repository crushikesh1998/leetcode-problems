/*TWO SUM
Given an array of integers nums and an integer target, return indices of the two numbers such 
that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
[2,7,11,15] = 9     output =[0,1] <- [index]
*/

/* Answer and  approach */

/* 
    [2,7,11,15] = 9
    
    //here 9 is target

1. Brute Force :                                                =>O(n**2)
        this is the first approach to think about this solution,
        each element will check line by line  and  it takes O(n**2)
        i.e
        function twoSum(nums,target){
            for(let i=0; i < nums.length ; i++){
                for(let j = i + 1;j<nums.length;j++){
                    if(nums[i] +nums[j] === target){
                    return [ i , j ]
                    }
                }
            }
                return[];
        }

2. Using HashMap //best Approach  to solve this question        => O(n)

    function twoSum(nums,target){
    let map = new Map();
    for(let i = 0 ; i < nums.length ; i++ ){
        let diff = target - nums[i] // target - value of index which contains in array
        if(map.has(diff)){
            return [map.get(diff) , i]; // return the indices of target value and array index
        }
        map.set(nums[i], i);
    }
        return [];
    }



*/

let nums=[7,2,11,15] 
let target =9

function twoSum(nums,target){
    let map = new Map();
    for(let i = 0 ; i < nums.length ; i++ ){
        let diff = target - nums[i] // target - value of index which contains in array
        if(map.has(diff)){
            return [map.get(diff) , i]; // return the indices of target value and array index
        }
        map.set(nums[i], i);
    }
        return [];
    }