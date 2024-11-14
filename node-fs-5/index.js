const fs = require('fs').promises;  
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const DIARY_FILE = 'diary.txt';

async function writeToDiary() {
  rl.question('Enter your diary entry: ', async (entry) => {
    try {
      await fs.appendFile(DIARY_FILE, `${entry}\n`);
      console.log('Your entry has been saved.');
      rl.close();
    } catch (err) {
      console.log('Error writing to the diary:', err);
      rl.close();
    }
  });
}

async function readDiary() {
  try {
    const data = await fs.readFile(DIARY_FILE, 'utf8');
    console.log('\nDiary Entries:\n');
    console.log(data || 'Your diary is empty.');
    rl.close();
  } catch (err) {
    console.log('Error reading the diary:', err);
    rl.close();
  }
}


function askQuestion() {
  rl.question('Do you want to (R)ead or (W)rite in your diary? ', async (answer) => {
    if (answer.toUpperCase() === 'W') {
      await writeToDiary();
    } else if (answer.toUpperCase() === 'R') {
      await readDiary();
    } else {
      console.log('Invalid option. Please choose either (R)ead or (W)rite.');
      rl.close();
    }
  });
}

askQuestion();
