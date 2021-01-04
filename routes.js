'use-strict';

module.exports = function(app){
    var todolist = require('./controller');

    app.route('/')
    .get(todolist.index);

    app.route('/users')
    .get(todolist.users);

    app.route('/users')
    .post(todolist.createUsers);

    app.route('/users/single')
    .post(todolist.findUsers);
};