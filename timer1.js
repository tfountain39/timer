// Slice the process.argv array from the third element(because node and path count as i1/2)
// and map each element to a Number, creating the 'alarms array'
const alarms = process.argv.slice(2).map(Number);
// Iterate over each element in the `alarms` array (array methods typically don't declare their name 
// first, they declare a functino on the input and then declare the array into function)
alarms.forEach(alarm => {
  // Check if the 'alarm' value is a number and greater than 0.
  if (typeof alarm === 'number' && alarm > 0) {
    // Set a timeout to write the  bell character to the standard output
    // after the specified number of miliseconds
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log('Alarm!');
    }, alarm * 1000);
  }
});

