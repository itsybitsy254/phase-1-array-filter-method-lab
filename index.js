const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers, name) {
    return drivers.filter(element => element.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, str) {
    const size = str.length;
    return drivers.filter(name => name.slice(0, size).toLowerCase() === str.toLowerCase());
}

const driverObjects = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
];

function matchName(drivers, str) {
    return drivers.filter(obj => obj.name.toLowerCase() === str.toLowerCase());
}

// Example usage:
console.log(findMatching(drivers, 'bobby')); // Output: ["Bobby", "bobby"]
console.log(fuzzyMatch(drivers, 'Bo')); // Output: ["Bobby", "bobby"]
console.log(matchName(driverObjects, 'Bobby')); // Output: [{ name: 'Bobby', hometown: 'Pittsburgh' }, { name: 'Bobby', hometown: 'Tampa Bay' }]