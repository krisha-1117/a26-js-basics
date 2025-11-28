// should take city name 
// does the array list have the city
//if yes. filters the voters of that city
//check if they have voted or not
//if not get that voters name and phone number in array of objects

const votersList=[
    {
    id:1,
    code:"KTM",
    name:"Hari",
    contact:9844,
    age:18,
    hasVoted: null,
    },
    {
     id:2,
    code:"KTM",
    name:"Sambhu",
    contact:9844122,
    age:18,
    hasVoted: null,


    },
    {
    id:4,
    code:"KTM",
    name:"Starling",
    contact:9844122990,
    age:20,
    hasVoted: true,

    },
    {
    id:5,
    code:"KTM",
    name:"Kaldev",
    contact:9844133,
    age:21,
    hasVoted: null,
    },
    
];
const getVotersWhoHasnotVoted=(city)=> {
    const doesVoterListHavethisCity= !!votersList.find(
        (voter) => voter.code ===  city

    );
    let result =[];
    if (doesVoterListHavethisCity) {
        const votersOfCity= votersList
        .filter((voter) => voter.code === city)
        .map((voter) => {
            if (voter.age > 18 && voter.hasVoted === null) {
                return {
                    name: voter.name,
                    phoneNumber: voter.contact,

                };
            }
            

        });
        result = votersOfCity.filter((voter) => voter);
    }
    
    return result;
};
//console.log(getVotersWhoHasnotVoted("KTM"));

 const getUsers = () => {
    const eligibleVoter = votersList.find((voter) => voter.age > 18);
    let result = [];
    if(eligibleVoter) {
        const voterOlderThan18 = votersList
        .filter((voter) => voter.age >18)
        .map((voter) => {
            if(voter.hasVoterCard && voter.hasVoted === null) {
                return{
                    
                        name: voter.name,
                        phoneNumber: voter.contact,
                    
                };
            }

        });
        result = voterOlderThan18.filter((voter) => voter);
    }
    return result;

 };
 console.log(getUsers());