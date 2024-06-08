const fs = require('fs');

const displayHeader = require('./src/displayHeader');
const executeTasks = require('./src/executeTasks');

const JWT_ACCOUNTS = JSON.parse(fs.readFileSync('accounts.json', 'utf-8'));

displayHeader();
executeTasks(JWT_ACCOUNTS);
