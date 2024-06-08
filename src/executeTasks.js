const colors = require('colors');
const getTasks = require('./getTasks');
const clearTask = require('./clearTask');

async function executeTasks(JWT_ACCOUNTS) {
  for (const token of JWT_ACCOUNTS) {
    try {
      const taskIds = await getTasks(token);
      if (taskIds && taskIds.length > 0) {
        for (const taskId of taskIds) {
          await clearTask(token, taskId);
        }
      } else {
        console.log(colors.yellow('No tasks available to complete.'));
      }
    } catch (error) {
      console.log(
        colors.red(
          'Error in looping: ' +
            (error.response ? error.response.data.message : error.message)
        )
      );
    }
  }
}

module.exports = executeTasks;
