const arr1 =[1,2,3,4];
const arr2 =[3,4,5,6];
const arr3 =[5,6,7,8];

const abc = (a1, a2, a3) => {
    const combineArr = [...a1, ...a2, ...a3];
    const uniqueArr = [...new Set(combineArr)];
    const result = uniqueArr
    .filter((num) => num % 2 !== 0)
    .map((num) => {
        if (num > 2 && num < 4) {
            return num;

        }
    });
    return result.filter((num) => num !== undefined);
};

console.log(abc(arr1, arr2, arr3));
