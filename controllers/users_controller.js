const User = require('../models/user')


let users = [];

exports.createUser = (req, res, next) => {
    const {name, age, email, phone} = req.body;
    let newUser = new User(Date.now(), name, age, email, phone);
    users.push(newUser);
    res.status(200).json({
        message: 'user created successfully',
        user: newUser
    })
}


exports.getUsers = (req, res, next) => {
    res.status(200).json({
        message: users.length > 0 ? 'users list' : 'No users found',
        users: users
    })
}

exports.getUserById = (req, res, next) => {
    let user = users.find((user) => user.id == req.params.id);
    res.status(user ? 200 : 404).json({
        message: user ? 'user fetched' : 'no existing user with such Id',
        user: user
    })
}

exports.updateUser = (req, res, next) => {
    const {name, age, email, phone} = req.body;
    let user = users.find((user) => user.id == req.params.id);
    let newUser = new User(req.params.id, name, age, email, phone);
    users = users.map((user) => {
        if (user.id == req.params.id) {
            return newUser;
        }
        return user;
    });
    let response = user ? {message: 'user updated successfully', user: newUser} : {message: 'no existing user with such Id'}
    res.status(user ? 200 : 404).json(response)
}

exports.deleteUser = (req, res, next) => {
    let removedUser = users.find((user) => user.id == req.params.id);
    users = users.filter((user) => user.id != req.params.id)
    res.status(removedUser ? 200 : 404).json({
        message: removedUser ? 'user deleted successfully' : 'no existing user with such Id',
        user: removedUser
    })

}