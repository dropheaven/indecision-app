const squared = num => num * num;
// console.log(squared(2));


const getFirstNameVerbose = fullName => {
  return fullName.split(' ')[0];
};
const getFirstName = fullName => fullName.split(' ')[0];
console.log(getFirstNameVerbose('Mike Smith'));