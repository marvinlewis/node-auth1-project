const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session); // remember to pass session

const usersRouter = require('./data/usersRouter');
const authRouter = require('./auth/authRouter');
const loginRouter = require('./data/loginRouter');
const logoutRouter = require('./data/logoutRouter');
const authenticator = require('./auth/authenticator');
const db = require('./data/dbConfig.js');


const server = express();

const sessionConfig = {
    name : 'Jazz',
    secret : process.env.SESSION_SECRET || 'keep it secret',
     cookie : {
         maxAge : 1000 * 60 * 100, // 10 min in mili seconds
         secure : process.env.USE_SECURE_COOKIES || false, // used over https only, true in production 
         httpOnly : false,// true means JS om client cannot access cookie
     },
    resave : false,
    saveUninitialized : process.env.SEND_COOKIES || true, // can we legally store cookies
    store : new knexSessionStore({ // store prop controls where session is stored, by default i
        knex : db, // (cont.) ts in memory, changing it to use database thru knex
        tablename : 'sessions',
        sidfieldname : 'sid',
        createtable : true,
        clearInterval : 1000 * 60 * 60 // will remove expired sessions every hour in miliseconds
    })
};

server.use(helmet());
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());
server.use(session(sessionConfig));

server.use('/api/register', authRouter);
server.use('/api/login', loginRouter);
server.use('api/logout', logoutRouter);
server.use('/api/users', authenticator, usersRouter);




server.get('/', (req, res) => {
    res.status(200).json({
        message : '== GET TO SERVER WORKING == '
    })
})

module.exports = server;
