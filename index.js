const jsonServer = require('json-server')
const FolderServer = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('todo.json')
const PORT = 3000 || process.env.PORT

FolderServer.use(middleware)
FolderServer.use(route)
FolderServer.listen(PORT,()=>{
    console.log(`Folder port: ${PORT} successfully deployed`);
})