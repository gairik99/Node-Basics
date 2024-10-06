const fs = require('fs');
const os = require('os');
// fs.writeFileSync('text.txt', 'hello gairik');
// fs.writeFile('text.txt', 'hello gairik from async', (err) => { });
// const result = fs.readFileSync('./text.txt', 'utf-8');
// console.log(result);
// fs.readFile('./text.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log('Error', err);
//     }
//     else {
//         console.log(result);
//     }
// })

// fs.appendFileSync('./text.txt', 'gairik\n')
// console.log(fs.readFileSync('./text.txt', 'utf-8'));
// console.log(fs.statSync('text.txt'));
console.log(os.cpus().length)