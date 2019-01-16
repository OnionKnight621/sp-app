const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const mongoStore = require('connect-mongo')(expressSession);

const config = require('./config/default');
const users = require('./routes/users');
const login = require('./routes/login');
const check_logout = require('./routes/check_logout');
const posts = require('./routes/posts');
const comments = require('./routes/comments');
const {checkSession} = require('./middleware/checkSession');
const {errorHandler} = require('./middleware/errorHandler');
const profile = require('./routes/profiles');
const {logger} = require('./middleware/logger')

const app = express();

mongoose.connect(`mongodb://localhost/socialproj`, {useNewUrlParser: true})
.then(() => console.log("Connected to mongodb..."))
.catch(err => console.log(`Could not connect to mongodb... [${err}]`));

app.use(express.static(__dirname + '/public'));
// full path to builded react client
app.use(express.static('../social-proj-client-try/build'));

app.use(cors())
app.use(bodyParser.json());
app.use(expressSession({
    store: new mongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 2400,
        autoRemove: 'native'
    }),
    secret: "secret key",
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {maxAge: 2400000}
}));
app.use(logger)
app.use('/users', users);
app.use('/login', login);
app.use(checkSession);
app.use(errorHandler);
app.use('/login', check_logout);
app.use('/profiles', profile);
app.use('/posts', posts);
app.use('/comments', comments);

const port = config.appPort;

app.listen(port, () => console.log(`Listening on port: ${port}`));