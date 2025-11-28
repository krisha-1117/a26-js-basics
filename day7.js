const radheRadheBBUsers =[
    {
        id:1,
        code:"RR",
        name:"alin siwakoti",
        products:["Chocolates","KFC"]
    },
    {
        id:2,
        code:"RR",
        name:"jeebesh dhakal",
        products:["Cheese","Sauce"]
    }
]
const KoteshworBBUsers =[
    {
        id:4,
        code:"KOT",
        name:"ram",
        products:["Shoes","Shirt","Freshner"]
    },
    {
        id:6,
        code:"KOT",
        name:"shyam",
        products:["Guiter","Hempbag"]
    }
]
const abc=()=>{
    const allUsers=[...radheRadheBBUsers,...KoteshworBBUsers]
    const result= allUsers.filter((user)=> user.name==="ram").map((user)=>{
    if(user.name==="ram"){
        return user.products
    }
})
return result
}
//console.log(abc())
const findEvenUserFromKot=()=>{
        const allUsers=[...radheRadheBBUsers,...KoteshworBBUsers]
        const result= allUsers.filter((user)=> user.id %2==0 &&user.code==="KOT").map((user)=> user.products )
        return result.flat()

}
console.log(findEvenUserFromKot())

