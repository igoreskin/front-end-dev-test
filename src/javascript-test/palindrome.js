/* 
With this try-catch syntax, JavaScript will actually generate an Error object 
with 2 properties called name and message, so we don't have to create an Error 
object separately. I also intentionally refrained from using the reverse() method. 
*/

const isPalindrome = (str) => {
  try {
    const stripped = str.replace(/[^0-9a-zA-Z]/g, '');
    return stripped.length > 0 && stripped === stripped.split('').reduce((aggr, el) => el + aggr, '');
  } catch (error) {
    console.error(`${error.name}: the argument must be a string, otherwise ${error.message}!`)
  }
}


module.exports = isPalindrome;