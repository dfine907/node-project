
const os = require('os')

const user = os.userInfo()
console.log(user)

const uptime = os.uptime()
console.log(`System Uptime: ${Math.floor(uptime / 60 / 60)} hours`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)


