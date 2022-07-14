const express = require('express');
var cors = require('cors');
var app = express();

// MIDDLEWARES
// JSON
app.use(express.json());
app.use(cors());

const users = [
  {
    email: 'collin@test.com',
    password: 'collin',
    firstName: 'Collin',
    lastName: 'Glass',
    title: 'Product Manager',
  },
  {
    email: 'aaron@test.com',
    password: 'password',
    firstName: 'Aaron',
    lastName: 'Alcala',
    title: 'Software Developer',
  },
];

const login = (email, password) => {
  const dbUser = users.find((u) => u.email === email);
  if (!dbUser) {
    return { error: 'User with that email does not exist' };
  }
  if (dbUser?.password !== password) {
    return { error: 'Email and Password do not match' };
  }

  return {
    user: dbUser,
    token: dbUser.email,
  };
};

const register = (email, password) => {
  const dbUser = {
    email,
    password,
    firstName: 'Test',
    lastName: 'User',
    title: 'Software Developer TEST',
  };

  users.push(dbUser);

  return {
    user: dbUser,
    token: dbUser.email,
  };
};

const sessions = {};

/// CRUD
app.get('/', function (request, response) {
  response.send(`<b style="font-size: 50px;">Hello Aaron, howdy</b>`);
});

app.get('/todos', function (request, response) {
  
      const user = sessions[request.headers.authorization];
  
    const todos = await getTodos(user.id);
  
    response.json({ todos });
  });

app.get('/users', function (request, response) {
  console.log(request.headers.authorization);

    const user = sessions[request.headers.authorization]

  // is user logged in?
  if (!session) {
    response.status(401).json({ message: 'Unauthorized' });
  }

  response.json({ users });
});

app.post('/login', function (request, response) {
  const { email, password } = request.body;
  const result = login(email, password);

  if (result.error) {
    response.send(result);
    return;
  }

  // add user session
  sessions[result.token] = result.user;

  response.send(result);
});

app.post('/register', function (request, response) {
  console.log(request.body); // your JSON
  const { email, password } = request.body;
  const result = register(email, password);

  // add user session
  sessions[result.token] = result.user;

  response.send(result);
});

app.listen(3001);
