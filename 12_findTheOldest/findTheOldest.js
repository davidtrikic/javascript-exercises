const findTheOldest = function(array) {
    let age, oldest = 0;
    const theOldest = array.reduce((obj, person) => {
        
        if(!('yearOfDeath' in person)) {
            let currentYear = new Date().getFullYear();
            age = currentYear - person.yearOfBirth;
        }
        else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        if (age > oldest) {
            oldest = age;
            obj = person;
        }
        return obj;

    }, {});
    return theOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
