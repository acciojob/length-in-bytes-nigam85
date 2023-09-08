// const byteSize = (str) => {
//   // write your code here
	
// };

// // Do not change the code below
// const str = prompt("Enter some string.");
// alert(byteSize(str));

function byteSize(str) {
  // Create a Blob object from the input string
  const blob = new Blob([str], { type: 'text/plain' });

  // Get the size of the Blob in bytes
  return blob.size;
}
