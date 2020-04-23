const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const usersRouter = require('./data/usersRouter');
const authRouter = require('./auth/authRouter');
const loginRouter = require('./data/loginRouter');
const authenticator = require('./auth/authenticator');
const session = require('express-session');
const server = express();

const sessionConfig = {
    name : 'Jazz',
    secret : process.env.SESSION_SECRET || 'keep it secret',
    resave : false,
    saveUninitialized : process.env.SEND_COOKIES || true, // can we legally store cookies?
     cookie : {
         maxAge : 1000 * 60 * 10, // 10 min in mili seconds
         secure : process.env.USE_SECURE_COOKIES || false, // used over https only, true in production 
         httpOnly : true,// true means JS om client cannot access cookie
     },
};

server.use(morgan('dev'));
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

server.use('/api/login', loginRouter);
server.use('/api/register', authRouter);
server.use('/api/users', authenticator, usersRouter);

server.get('/', (req, res) => {
    res.status(200).json({
        message : '== GET TO SERVER WORKING == '
    })
})

module.exports = server;
