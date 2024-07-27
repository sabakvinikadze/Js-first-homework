function numF(...numbers){
    if(numbers.length <= 2) {
    return 'please enter more than 2 numbers';
  }

 const sumFirstTwo = numbers[0] + numbers[1];
 const productRest = numbers 
                    .slice(2)
                    .reduce((accumulator, currentValue) => accumulator * currentValue, 1);

 return [sumFirstTwo, productRest];                   
}

const result = numF(4,1,3,1,2);
console.log("Result", result);


const user= {
    banks:[
        {}, //placeholder
        {}, // another placeholder
        {
            address:{
                city:'New York',
                country:'USA'
            }
        }
    ]
};

function getCityFromUser(user){
    const {banks} = user;
    if(banks && banks[2] && banks[2].address){
        const{city} = banks[2].address;
        return city;
    }
    return undefined;
    }
    console.log(getCityFromUser(user)); // logs: 'New York'


    const originalObject = {
        name: 'John',
        age: 30,
        address: {
            city: 'New York',
            Country: 'NY'
        },
        hobbies: ['reading', 'painting'],
        nestedObject: {
            prop1: 'value1',
            prop2: 'value2'
        }
    }

    function cloneObjectWithSpread(obj){
        const copiedObject = {
            ...obj,
            address:   {...obj.address},
            hobbies: [...obj.hobbies],
            nestedObject: {...obj.nestedObject}
        };
        return copiedObject;
        
    
    }
    
    const clonedObject = cloneObjectWithSpread(originalObject);
    console.log(clonedObject); // logs: a new object with all the properties of the original object, but with their own copies.