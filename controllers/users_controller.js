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
        message: 'users list',
        users: users
    })
}

exports.getUserById = (req, res, next) => {
    let user = users.find((user) => user.id == req.params.id);
    res.status(200).json({
        message: 'user fetched',
        user: user
    })
}

exports.updateUser = (req, res, next) => {
    const {name, age, email, phone} = req.body;
    let newUser = new User(req.params.id, name, age, email, phone);
    users = users.map((user) => {
        if (user.id == req.params.id) {
            return newUser;
        }
        return user;
    });

    res.status(200).json({
        message: 'user updated successfully',
        user: newUser
    })
}

exports.deleteUser = (req, res, next) => {
    let removedUser = users.find((user) => user.id == req.params.id);
    users = users.filter((user) => user.id != req.params.id)
    res.status(200).json({
        message: 'user deleted successfully',
        user: removedUser
    })

}