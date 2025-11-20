const xyz= (arr1, arr2)=> {
        const mergedArray=[...arr1,...arr2];
        const result=mergedArray.map((num)=>{
            if ((num >5 && num<10) || num%2===0){
                return num ;
            }
        });
        return result . filter((num)=> num !== undefined);
        
}
console.log(xyz([1,6,3,8],[4,10,12,15]));