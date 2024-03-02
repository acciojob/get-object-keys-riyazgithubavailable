//your JS code here. If required.
// Define the student object
const student = {
    name: 'John'
};

// Add a property to the Object prototype called getKeys()
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Test the functionality
console.log(student.getKeys()); // Output: ['name']
