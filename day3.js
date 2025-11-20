const firstName = "john";
const lastName = "doe";

const mergeArr =(array1, array2) => {
    const newArray = [...array1, ...array2, 100];
    return newArray;
};

console.log(mergeArr([1,2], [3,4]));