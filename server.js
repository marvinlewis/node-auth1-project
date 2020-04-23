const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const usersRouter = require('./data/usersRouter');
const authRouter = require('./auth/Sign-up-authRouter');
const loginRouter = require('./data/loginRouter');
const authenticator = require('./auth/authenticator');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

server.use('/api/register', authRouter);
server.use('/api/login', loginRouter);
server.use('/api/users', authenticator, usersRouter);




server.get('/', (req, res) => {
    res.status(200).json({
        message : '== GET TO SERVER WORKING == '
    })
})

module.exports = server;
