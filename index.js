const express = require('express');

const server = express();

server.use(express.json());

const projects = [];

// Middleware Global: Mostra a quantidade de requisições que ja foram feitas na aplicação
var cont = 0;
server.use((req, res, next) => {
    console.log(`Quantidade de requisições realizadas: ${++cont}`);
    return next();
})

// Middleware: Verifica se o ID existe no array
function verificaID(req, res, next) {
    const { id } = req.params;

    for (let i = 0; i < projects.length; i++) {
        if(projects[i].id == id){
            req.index =  i;
            return next();
        }
    }

    return res.status(400).json({ error:"ID não encontrado." });
}

// Cria um projeto
server.post('/projects',(req,res) => {
    const { id, title } = req.body;

    // Monta o JSON
    const jsonData = {
        id,
        title,
        'tasks': [] 
    }

    // Adiciona no Array
    projects.push(jsonData);

    return res.send(jsonData);
})

// Lista todos os projetos e tarefas
server.get('/projects',(req, res) => {
    return res.json(projects);
})

// Altera o title de um id passado na URL
server.put('/projects/:id', verificaID,(req, res) => {
    const { title } = req.body;

    projects[req.index].title = title;

    return res.json({ status:"Titulo do Projeto Alterado." });
})

// Deleta um projeto a apartir de um ID
server.delete('/projects/:id', verificaID,(req, res) => {    
    projects.splice(req.index,1);

    return res.json({ status:"Projeto Deletado." });
})

// Adiciona uma nova tarefa em um projeto
server.post('/projects/:id/tasks', verificaID,(req, res) => {
    const { title } = req.body;

    projects[req.index].tasks.push(title);
    return res.json({ status:"Tarefa Adicionada." });
    
})



server.listen(3000);