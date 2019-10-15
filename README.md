# bootcamp-gostack-desafio-01

O primeiro desafio se basea nos conhecimentos aprendido no Modulo 1 do GoStack, onde você utiliza o express para manipular
dados recebitos tanto por URL como por Body.

# Conceito

O Conceito do programa é criar projetos, onde cada projeto sem seu ID, Titulo e um array de Tarefas

Todas as tarefas são salvas no seguinda formato JSON
```
data = {
  id: "1",
  title: "Trabalhos",
  tasks: []
}
```

# Requisiçoes
Retorna todos os projetos cadastrados
```
server.get('/projects',...)
```

Altera o titulo de um projeto a partir de um pela passado por URL
```
server.put('/projects/:id',...)
```

Deleta um projeto a partir de um ID passado pela URL
```
server.delete('/projects/:id',...)
```

Adiciona uma tarefa em um projeto cujo o ID é passado pela URL
```
server.post('/projects/:id/tasks',...)
```

# Middlewares
Existem dois Middlewares na aplicação: Um global e outro que é chamado por rotas que passam ID pela URL.

O Middleware Global tem a função de realizar a contagem da quantidade de requisições feitas na aplicação.

O outro Middleware serve para verificar se o ID passado na URL existe na aplicação.
