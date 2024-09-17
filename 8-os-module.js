const os = require('os')
const { release } = require('process')

// info anout current user
const user = os.userInfo()
console.log(user)

// method returns the system update in seconds
console.log(`The system uptime is ${os.uptime()}seconds`)

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)