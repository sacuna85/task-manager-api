//Alper: this works with ../routers/user under get user profile

const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        //first: looks for header user is supposed to provide.
        //second: then it validates that header.
        //third: finds associated user.
        //forth: we call next letting event handler run or we send an error.
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id:decoded._id, 'tokens.token': token })

        if(!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth