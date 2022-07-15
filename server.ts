import * as  express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

const port = process.env['PORT'] || 3000;
const server = express();

server.use(bodyParser.json({limit: '1mb'}));
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.static('dist/anexpg'));
//server.use('/static', express.static(path.join(__dirname, 'public')))

server.post('/api',(req,res) =>{
   res.json({msg:0});
})

server.get('*',(req,res) =>{
   var options = {
      root: path.join(__dirname, 'dist/anexpg')
   }
   return res.sendFile('index.html',options)
})


server.listen(port,()=>{console.log('server is running')})