const { writeFileSync } = require('fs')
for (let i = 0; i < 10000; i+=1) {
  writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
}