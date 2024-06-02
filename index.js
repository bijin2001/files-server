const jsonServer  =require('json-server')
const FolderServer = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('files.json')
const PORT = 3000 || process.env.PORT

FolderServer.use(middleware)
FolderServer.use(route)
FolderServer.use(PORT,()=>{
    console.log(`Folder-server port : ${PORT} has successfully deployed`);
})