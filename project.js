import express from "express";
import users from './MOCK_DATA.json' assert { type: 'json' }

const app = express();
app.get('/', (req, res) => {
    return res.send('hello,from server');
})

app.get('/api/users', (req, res) => {
    return res.json(users);
})
app.get('/users', (req, res) => {
    const html =
        `<ul> 
            ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
      </ul>`
    return res.send(html);
})

app.listen(8080, () => {
    console.log('server started');
})