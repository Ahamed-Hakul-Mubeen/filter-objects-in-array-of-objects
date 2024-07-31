
const arrayOfObjects = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", occupation: "Engineer" },
  { id: 3, country: "USA", hobby: "Reading" },
  { id: 4, name: "Charlie", age: 25, occupation: "Artist" },
  { id: 5, hobby: "Gardening", favoriteColor: "Green" },
];

function checkAvailability(original, keyToFind){
    
    let keyCheck;
    
    keys = Object.keys(keyToFind);
    
    keyCheck = original.filter((val, key) =>{
        if(keys.every((i) => val[i] == keyToFind[i]))
        {
            return val;
        }
    })
    
    console.log(keyCheck)
}

const keyToFind = {name: "Alice", age: 30};

checkAvailability(arrayOfObjects, keyToFind)
