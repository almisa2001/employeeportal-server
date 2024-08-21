//import json sever
const server =require('json-server')

const empserver = server.create()

const middleware =server.defaults()
const router = server.router('db.json')

const PORT = 4000 || process.env.PORT
empserver.use(middleware)
empserver.use(router)


empserver.listen(PORT,()=>{
    console.log(`server running successfully at port number : ${PORT}`);
    
})
