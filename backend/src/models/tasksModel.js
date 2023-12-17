const connection = require('./connection');

const getAll = async() => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks[0];

};

const createTask = async(task) => {
    const {title} = task;
    const dateUTC = new Date(Date.now()).toUTCString();

    const query ='Insert into tasks(title, status, created_at) values (?,?,?)';

    const createdTask = await connection.execute(query, [title, 'pendente',dateUTC]);

    return createdTask;
};

module.exports = {
    getAll,
    createTask
};
