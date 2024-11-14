const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

const validatePassword = (password) => {
    const minLength = 6;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
  
    if (password.length >= minLength && hasUppercase && hasLowercase) {
      return true;
    } else {
      return false;
    }
  }
  
  readLine.question('Enter a password: ', (password) => {
    if (validatePassword(password)) {
      console.log('Password is valid!');
    } else { 
      console.log('Invalid password! Password must be at least 6 characters long and contain both uppercase and lowercase letters.');
    }
  
    readLine.close();
  });
  