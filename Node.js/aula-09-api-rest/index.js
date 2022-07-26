import express, { response } from "express";
import { StatusCodes } from "http-status-codes";


const app = express();
const PORT = process.env.PORT || 3000;
let users = [
    { id: 1, name: 'Luis Fernando', age: 28 },
    { id: 2, name: 'André Stein', age: 28}
];

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})

app.get('/', (request, response) => {
    return response.send('<h1>Trabalhando com servidor express.</h1>');
});

app.get('/users', (req, res) => {
    return res.send(users);
});

app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const user = users.find(user => {
        return (user.id === Number(userId));
    })
    return res.send(user);
})

app.post('/users', (req, res) => {
    const newUser = req.body;

    users.push(newUser);

    return res.status(StatusCodes.CREATED).send(newUser);
})

app.put('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const updatedUser = req.body;

    users = users.map(user => {
        if(Number(userId) === user.id){
            return updatedUser;
        }
        return user;
    })
    return response.send(updatedUser);
})

app.delete('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    
    users = users.filter((user) => user.id !== Number(userId));

    return res.status(StatusCodes.NO_CONTENT).send();
});