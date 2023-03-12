const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user)



// method returns the system uptime in seconds (how long computer has been running)
console.log(`The System uptime is ${os.uptime()} seconds`)
console.log(`that is ${os.uptime() / 60} minutes`)
console.log(`or ${os.uptime() / 60 / 60} hours`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)